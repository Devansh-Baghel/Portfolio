/**
 * Pure displacement physics for the grid distortion effect.
 * Applies relaxation decay and mouse-driven displacement to a grid data texture.
 *
 * This is a pure function — no DOM, no WebGL, no side effects.
 * Testable with known inputs → known outputs.
 */
export function applyDisplacement(
  data: Float32Array,
  size: number,
  mouse: { x: number; y: number; vX: number; vY: number },
  config: { strength: number; relaxation: number; mouseRadius: number },
): void {
  for (let i = 0; i < size * size; i++) {
    data[i * 4] *= config.relaxation;
    data[i * 4 + 1] *= config.relaxation;
  }

  const gridMouseX = size * mouse.x;
  const gridMouseY = size * mouse.y;
  const maxDist = size * config.mouseRadius;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      const distSq =
        Math.pow(gridMouseX - i, 2) + Math.pow(gridMouseY - j, 2);
      if (distSq < maxDist * maxDist) {
        const index = 4 * (i + size * j);
        const power = Math.min(maxDist / Math.sqrt(distSq), 10);
        data[index] += config.strength * 100 * mouse.vX * power;
        data[index + 1] -= config.strength * 100 * mouse.vY * power;
      }
    }
  }
}
