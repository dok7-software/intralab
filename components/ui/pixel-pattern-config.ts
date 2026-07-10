export const PIXEL_CELL_SIZE = 18;
export const PIXEL_CELL_GAP = 8;
export const PIXEL_BRAND_COLOR = "#1f55a0";

export function getPixelStep(
  cellSize = PIXEL_CELL_SIZE,
  gap = PIXEL_CELL_GAP,
) {
  return cellSize + gap;
}
