import type { Activity } from "../pulse";

export interface Grid {
  columns: number;
  rows: number;
  cell: number;
  gap: number;
}

export class Pixels {
  readonly width: number;

  readonly height: number;

  private readonly lit: boolean[];

  private readonly energy: Float32Array;

  constructor(
    private readonly grid: Grid,
    private readonly random: () => number = Math.random,
  ) {
    const { columns, rows, cell, gap } = grid;

    this.width = columns * (cell + gap) - gap;
    this.height = rows * (cell + gap) - gap;
    this.lit = Array.from({ length: columns * rows }, (_, i) => random() < 0.25 + ((i % columns) / columns) * 0.35);
    this.energy = new Float32Array(columns * rows);
  }

  alphas(activity: Activity, time: number): number[] {
    if (activity === "working") this.flare();

    const breath = (Math.sin(time / 420) + 1) / 2;

    return this.lit.map((lit, i) => {
      if (activity === "idle") return lit ? 0.38 : 0.1;

      if (activity === "waiting") return lit ? 0.25 + breath * 0.75 : 0.1;

      return Math.max(0.1, this.energy[i] ?? 0);
    });
  }

  draw(context: CanvasRenderingContext2D, color: string, activity: Activity, time: number): void {
    const { columns, cell, gap } = this.grid;

    context.clearRect(0, 0, this.width, this.height);
    context.fillStyle = color;

    this.alphas(activity, time).forEach((alpha, i) => {
      context.globalAlpha = alpha;
      context.fillRect((i % columns) * (cell + gap), Math.floor(i / columns) * (cell + gap), cell, cell);
    });

    context.globalAlpha = 1;
  }

  private flare(): void {
    const { columns, rows } = this.grid;

    for (let i = 0; i < this.energy.length; i++) this.energy[i] = (this.energy[i] ?? 0) * 0.8;

    for (let k = 0; k < 3; k++) {
      const column = Math.min(columns - 1, Math.floor(Math.pow(this.random(), 0.6) * columns));
      const row = Math.floor(this.random() * rows);

      this.energy[row * columns + column] = 1;
    }
  }
}
