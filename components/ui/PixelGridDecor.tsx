import {
  PIXEL_BRAND_COLOR,
  PIXEL_CELL_SIZE,
  getPixelStep,
} from "./pixel-pattern-config";

type PixelCell = {
  x: number;
  y: number;
  s: number;
};

type PixelGridDecorProps = {
  cells: readonly PixelCell[];
  grid: { cols: number; rows: number };
  className?: string;
};

export function PixelGridDecor({ cells, grid, className = "" }: PixelGridDecorProps) {
  const step = getPixelStep();
  const width = grid.cols * step;
  const height = grid.rows * step;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className={`shrink-0 ${className}`}
      aria-hidden="true"
      width={width}
      height={height}
      style={{ width, height, minWidth: width, minHeight: height }}
    >
      {cells.map((cell, index) => (
        <rect
          key={`${cell.x}-${cell.y}-${index}`}
          x={cell.x * step}
          y={cell.y * step}
          width={PIXEL_CELL_SIZE * cell.s}
          height={PIXEL_CELL_SIZE * cell.s}
          fill={PIXEL_BRAND_COLOR}
        />
      ))}
    </svg>
  );
}
