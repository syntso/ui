import { Pixels } from "../../../src/components/pulse/pixels";

const grid = { columns: 5, rows: 3, cell: 2, gap: 1 };

function sequence(...values: number[]): () => number {
  let i = 0;

  return () => values[i++ % values.length] ?? 0;
}

describe("Pixels", () => {
  it("measures the grid without a trailing gap", () => {
    const pixels = new Pixels(grid);

    expect(pixels.width).toBe(14);
    expect(pixels.height).toBe(8);
  });

  it("keeps idle pixels still", () => {
    const pixels = new Pixels(grid, sequence(0.1, 0.9));

    expect(pixels.alphas("idle", 0)).toEqual(pixels.alphas("idle", 5000));
  });

  it("breathes all lit pixels together while waiting", () => {
    const pixels = new Pixels(grid, sequence(0.1, 0.9));
    const low = pixels.alphas("waiting", -660);
    const high = pixels.alphas("waiting", 660);
    const lit = low.map((alpha, i) => alpha !== 0.1 || high[i] !== 0.1);

    expect(lit.some(Boolean)).toBe(true);
    expect(new Set(high.filter((_, i) => lit[i]))).toHaveProperty("size", 1);
  });

  it("flares and decays while working", () => {
    const pixels = new Pixels(grid, sequence(0.5));
    const first = pixels.alphas("working", 0);
    const second = pixels.alphas("working", 90);

    expect(Math.max(...first)).toBe(1);
    expect(second.every(alpha => alpha >= 0.1)).toBe(true);
  });
});
