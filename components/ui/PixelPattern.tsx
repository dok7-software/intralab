type PixelPatternVariant = "corner" | "band" | "cluster" | "edgeBottomRight";

type PixelCell = {
  x: number;
  y: number;
  s: number;
};

// Coordinates are laid out on a loose 12-column grid and approximate the
// scattered "pixel cloud" motif used throughout the IntraLab 22@ brand deck.
const CORNER_CELLS: PixelCell[] = [
  { x: 9, y: 0, s: 1 }, { x: 10, y: 0, s: 1 }, { x: 11, y: 0, s: 1 },
  { x: 8, y: 1, s: 1 }, { x: 9, y: 1, s: 1 }, { x: 11, y: 1, s: 1 },
  { x: 7, y: 2, s: 1 }, { x: 9, y: 2, s: 1 }, { x: 10, y: 2, s: 1 },
  { x: 8, y: 3, s: 1 },
  { x: 10, y: 4, s: 1 }, { x: 11, y: 4, s: 1 },
  { x: 8, y: 5, s: 1 }, { x: 9, y: 5, s: 1 }, { x: 10, y: 5, s: 1 }, { x: 11, y: 5, s: 1 },
  { x: 7, y: 6, s: 1 }, { x: 9, y: 6, s: 1 },
  { x: 9, y: 7, s: 1 }, { x: 10, y: 7, s: 1 },
  { x: 8, y: 8, s: 1 }, { x: 10, y: 8, s: 1 }, { x: 11, y: 8, s: 1 },
  { x: 9, y: 9, s: 1 }, { x: 11, y: 9, s: 1 },
];

// Cascading pixel motif anchored to the bottom-right, as used in the
// "¿Qué obtiene tu equipo?" slide.
const EDGE_BOTTOM_RIGHT_CELLS: PixelCell[] = [
  { x: 9, y: 0, s: 1 }, { x: 10, y: 0, s: 1 }, { x: 11, y: 0, s: 1 },
  { x: 8, y: 1, s: 1 }, { x: 9, y: 1, s: 1 }, { x: 11, y: 1, s: 1 },
  { x: 7, y: 2, s: 1 }, { x: 9, y: 2, s: 1 }, { x: 10, y: 2, s: 1 },
  { x: 8, y: 3, s: 1 },
  { x: 10, y: 4, s: 1 }, { x: 11, y: 4, s: 1 },
  { x: 8, y: 5, s: 1 }, { x: 9, y: 5, s: 1 }, { x: 10, y: 5, s: 1 }, { x: 11, y: 5, s: 1 },
  { x: 7, y: 6, s: 1 }, { x: 9, y: 6, s: 1 },
  { x: 9, y: 7, s: 1 }, { x: 10, y: 7, s: 1 },
  { x: 8, y: 8, s: 1 }, { x: 10, y: 8, s: 1 }, { x: 11, y: 8, s: 1 },
  { x: 9, y: 9, s: 1 }, { x: 11, y: 9, s: 1 },
  { x: 8, y: 10, s: 1 }, { x: 10, y: 10, s: 1 }, { x: 11, y: 10, s: 1 },
  { x: 9, y: 11, s: 1 }, { x: 10, y: 11, s: 1 },
  { x: 7, y: 12, s: 1 }, { x: 9, y: 12, s: 1 }, { x: 11, y: 12, s: 1 },
  { x: 8, y: 13, s: 1 }, { x: 10, y: 13, s: 1 },
  { x: 9, y: 14, s: 1 }, { x: 11, y: 14, s: 1 },
  { x: 10, y: 15, s: 1 }, { x: 11, y: 15, s: 1 },
];

const BAND_CELLS: PixelCell[] = [
  { x: 0, y: 1, s: 1 }, { x: 1, y: 1, s: 1 },
  { x: 0, y: 0, s: 1 },
  { x: 3, y: 0, s: 1 }, { x: 4, y: 0, s: 1 }, { x: 5, y: 0, s: 1 },
  { x: 4, y: 1, s: 1 }, { x: 6, y: 1, s: 1 },
  { x: 7, y: 0, s: 1 },
  { x: 6, y: 0, s: 1 },
  { x: 9, y: 1, s: 1 },
  { x: 12, y: 0, s: 1 }, { x: 13, y: 0, s: 1 },
  { x: 13, y: 1, s: 1 }, { x: 14, y: 1, s: 1 },
  { x: 17, y: 0, s: 1 },
  { x: 19, y: 0, s: 1 }, { x: 20, y: 0, s: 1 },
  { x: 19, y: 1, s: 1 }, { x: 21, y: 1, s: 1 },
];

const CLUSTER_CELLS: PixelCell[] = [
  { x: 0, y: 0, s: 1 }, { x: 1, y: 0, s: 1 },
  { x: 0, y: 1, s: 1 }, { x: 2, y: 1, s: 1 }, { x: 3, y: 1, s: 1 },
  { x: 1, y: 2, s: 1 }, { x: 3, y: 2, s: 1 },
  { x: 0, y: 3, s: 1 },
  { x: 2, y: 4, s: 1 }, { x: 3, y: 4, s: 1 },
];

const VARIANT_CELLS: Record<PixelPatternVariant, PixelCell[]> = {
  corner: CORNER_CELLS,
  band: BAND_CELLS,
  cluster: CLUSTER_CELLS,
  edgeBottomRight: EDGE_BOTTOM_RIGHT_CELLS,
};

const VARIANT_GRID: Record<PixelPatternVariant, { cols: number; rows: number }> = {
  corner: { cols: 12, rows: 10 },
  band: { cols: 22, rows: 2 },
  cluster: { cols: 4, rows: 5 },
  edgeBottomRight: { cols: 12, rows: 16 },
};

type PixelPatternProps = {
  variant?: PixelPatternVariant;
  className?: string;
  color?: string;
  cellSize?: number;
  gap?: number;
};

export function PixelPattern({
  variant = "corner",
  className = "",
  color = "#1f55a0",
  cellSize = 10,
  gap = 6,
}: PixelPatternProps) {
  const cells = VARIANT_CELLS[variant];
  const { cols, rows } = VARIANT_GRID[variant];
  const step = cellSize + gap;

  return (
    <svg
      viewBox={`0 0 ${cols * step} ${rows * step}`}
      className={className}
      aria-hidden="true"
      style={{ width: cols * step, height: rows * step }}
    >
      {cells.map((cell, index) => (
        <rect
          key={`${cell.x}-${cell.y}-${index}`}
          x={cell.x * step}
          y={cell.y * step}
          width={cellSize * cell.s}
          height={cellSize * cell.s}
          fill={color}
        />
      ))}
    </svg>
  );
}
