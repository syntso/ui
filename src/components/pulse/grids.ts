import type { Grid } from "./pixels";

export const grids = {
  regular: { columns: 7, rows: 5, cell: 2, gap: 1 },
  small: { columns: 5, rows: 3, cell: 2, gap: 1 },
} satisfies Record<string, Grid>;
