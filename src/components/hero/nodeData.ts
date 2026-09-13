/** Labels for the nodes orbiting the core in the hero visualization. */
export const SYSTEM_NODES = [
  "AI",
  "BACKEND",
  "APIS",
  "DATABASE",
  "SYSTEMS",
  "DSA",
  "FULL STACK",
] as const;

/**
 * Evenly distributes `count` points across a sphere of the given radius.
 * `yFlatten` compresses the vertical spread (< 1 = more halo-like, keeps
 * nodes clear of the nav above and the copy below regardless of camera framing).
 */
export function fibonacciSphere(
  count: number,
  radius: number,
  yFlatten = 1,
): [number, number, number][] {
  const points: [number, number, number][] = [];
  const goldenAngle = Math.PI * (3 - Math.sqrt(5));

  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2;
    const radiusAtY = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = goldenAngle * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    points.push([x * radius, y * radius * yFlatten, z * radius]);
  }

  return points;
}
