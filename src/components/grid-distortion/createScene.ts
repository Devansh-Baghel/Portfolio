import * as THREE from 'three';
import { vertexShader, fragmentShader } from './shaders';

export interface SceneObjects {
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  camera: THREE.OrthographicCamera;
  plane: THREE.Mesh;
  uniforms: {
    time: { value: number };
    resolution: { value: THREE.Vector4 };
    uTexture: { value: THREE.Texture | null };
    uDataTexture: { value: THREE.DataTexture | null };
  };
  dataTexture: THREE.DataTexture;
  geometry: THREE.PlaneGeometry;
  material: THREE.ShaderMaterial;
}

export function createScene(
  container: HTMLElement,
  imageSrc: string,
  grid: number,
): SceneObjects {
  const scene = new THREE.Scene();

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  container.innerHTML = '';
  container.appendChild(renderer.domElement);

  const camera = new THREE.OrthographicCamera(0, 0, 0, 0, -1000, 1000);
  camera.position.z = 2;

  const uniforms = {
    time: { value: 0 },
    resolution: { value: new THREE.Vector4() },
    uTexture: { value: null as THREE.Texture | null },
    uDataTexture: { value: null as THREE.DataTexture | null },
  };

  const textureLoader = new THREE.TextureLoader();
  textureLoader.load(imageSrc, (texture) => {
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    uniforms.uTexture.value = texture;
  });

  const size = grid;
  const data = new Float32Array(4 * size * size);
  for (let i = 0; i < size * size; i++) {
    data[i * 4] = Math.random() * 255 - 125;
    data[i * 4 + 1] = Math.random() * 255 - 125;
  }

  const dataTexture = new THREE.DataTexture(
    data,
    size,
    size,
    THREE.RGBAFormat,
    THREE.FloatType,
  );
  dataTexture.needsUpdate = true;
  uniforms.uDataTexture.value = dataTexture;

  const material = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms,
    vertexShader,
    fragmentShader,
    transparent: true,
  });

  const geometry = new THREE.PlaneGeometry(1, 1, size - 1, size - 1);
  const plane = new THREE.Mesh(geometry, material);
  scene.add(plane);

  return {
    scene,
    renderer,
    camera,
    plane,
    uniforms,
    dataTexture,
    geometry,
    material,
  };
}

export function cleanupScene(
  container: HTMLElement,
  renderer: THREE.WebGLRenderer,
  geometry: THREE.PlaneGeometry,
  material: THREE.ShaderMaterial,
  dataTexture: THREE.DataTexture,
  texture: THREE.Texture | null,
): void {
  renderer.dispose();
  if (container.contains(renderer.domElement)) {
    container.removeChild(renderer.domElement);
  }
  geometry.dispose();
  material.dispose();
  dataTexture.dispose();
  texture?.dispose();
}
