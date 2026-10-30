import React, { useEffect, useRef } from 'react';
import { cleanupScene, createScene } from './grid-distortion/createScene';
import { applyDisplacement } from './grid-distortion/displacement';

interface GridDistortionProps {
  grid?: number;
  mouse?: number;
  strength?: number;
  relaxation?: number;
  imageSrc: string;
  className?: string;
}

const IDLE_STOP_MS = 800;

const GridDistortion: React.FC<GridDistortionProps> = ({
  grid = 15,
  mouse = 0.1,
  strength = 0.15,
  relaxation = 0.9,
  imageSrc,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationIdRef = useRef<number | null>(null);
  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    if (
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const {
      scene,
      renderer,
      camera,
      plane,
      uniforms,
      dataTexture,
      geometry,
      material,
    } = createScene(container, imageSrc, grid);

    const renderFrame = () => {
      if (!(dataTexture.image.data instanceof Float32Array)) {
        console.error('dataTexture.image.data is not a Float32Array');
        return;
      }

      applyDisplacement(dataTexture.image.data, grid, mouseState, {
        strength,
        relaxation,
        mouseRadius: mouse,
      });

      dataTexture.needsUpdate = true;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      if (width === 0 || height === 0) return;

      const containerAspect = width / height;

      renderer.setSize(width, height);
      plane.scale.set(containerAspect, 1, 1);

      const frustumHeight = 1;
      const frustumWidth = frustumHeight * containerAspect;
      camera.left = -frustumWidth / 2;
      camera.right = frustumWidth / 2;
      camera.top = frustumHeight / 2;
      camera.bottom = -frustumHeight / 2;
      camera.updateProjectionMatrix();

      uniforms.resolution.value.set(width, height, 1, 1);

      if (!runningRef.current) {
        renderFrame();
      }
    };

    if (window.ResizeObserver) {
      const resizeObserver = new ResizeObserver(() => handleResize());
      resizeObserver.observe(container);
      resizeObserverRef.current = resizeObserver;
    } else {
      window.addEventListener('resize', handleResize);
    }

    const mouseState = { x: 0, y: 0, prevX: 0, prevY: 0, vX: 0, vY: 0 };
    const lastMoveTimeRef = { current: performance.now() };
    const inViewRef = { current: true };
    const runningRef = { current: false };

    const startLoop = () => {
      if (runningRef.current || !inViewRef.current) return;

      runningRef.current = true;
      const tick = () => {
        renderFrame();

        if (performance.now() - lastMoveTimeRef.current > IDLE_STOP_MS) {
          runningRef.current = false;
          animationIdRef.current = null;
          return;
        }

        animationIdRef.current = requestAnimationFrame(tick);
      };
      animationIdRef.current = requestAnimationFrame(tick);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = (e.clientX - rect.left) / rect.width;
      const y = 1 - (e.clientY - rect.top) / rect.height;
      mouseState.vX = x - mouseState.prevX;
      mouseState.vY = y - mouseState.prevY;
      Object.assign(mouseState, { x, y, prevX: x, prevY: y });

      lastMoveTimeRef.current = performance.now();
      startLoop();
    };

    const handleMouseLeave = () => {
      dataTexture.needsUpdate = true;
      Object.assign(mouseState, {
        x: 0,
        y: 0,
        prevX: 0,
        prevY: 0,
        vX: 0,
        vY: 0,
      });
      lastMoveTimeRef.current = performance.now();
      startLoop();
    };

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        inViewRef.current = entries[0]?.isIntersecting ?? true;
        if (inViewRef.current) {
          lastMoveTimeRef.current = performance.now();
          startLoop();
        }
      },
      { rootMargin: '120px' },
    );
    intersectionObserver.observe(container);

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    handleResize();
    renderFrame();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      runningRef.current = false;
      animationIdRef.current = null;

      intersectionObserver.disconnect();

      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      } else {
        window.removeEventListener('resize', handleResize);
      }

      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);

      cleanupScene(
        container,
        renderer,
        geometry,
        material,
        dataTexture,
        uniforms.uTexture.value,
      );
    };
  }, [grid, mouse, strength, relaxation, imageSrc]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{
        width: '100%',
        height: '100%',
        minWidth: '0',
        minHeight: '0',
      }}
    />
  );
};

export default GridDistortion;
