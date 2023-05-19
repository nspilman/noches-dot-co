export function getRandomInterval(floor: number, ceiling: number): number {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}
