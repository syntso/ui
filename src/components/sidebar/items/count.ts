export function liveCount(live: number, total: number): string {
  return live > 0 ? `${live}/${total}` : `${total}`;
}
