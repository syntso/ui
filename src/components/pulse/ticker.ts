type Listener = (time: number) => void;

export class Ticker {
  private readonly listeners = new Set<Listener>();

  private frame = 0;

  private last = 0;

  constructor(private readonly interval: number) {}

  subscribe(listener: Listener): () => void {
    this.listeners.add(listener);

    if (this.listeners.size === 1) this.frame = requestAnimationFrame(this.tick);

    return () => {
      this.listeners.delete(listener);

      if (this.listeners.size === 0) cancelAnimationFrame(this.frame);
    };
  }

  private readonly tick = (time: number): void => {
    if (time - this.last >= this.interval) {
      this.last = time;
      this.listeners.forEach(listener => listener(time));
    }

    this.frame = requestAnimationFrame(this.tick);
  };
}

export const pixelTicker = new Ticker(90);
