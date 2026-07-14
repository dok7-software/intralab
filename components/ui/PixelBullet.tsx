import { PIXEL_BRAND_COLOR, PIXEL_CELL_SIZE } from "./pixel-pattern-config";

type PixelBulletProps = {
  className?: string;
};

export function PixelBullet({ className = "" }: PixelBulletProps) {
  return (
    <span
      className={`inline-block shrink-0 ${className}`}
      style={{
        width: PIXEL_CELL_SIZE,
        height: PIXEL_CELL_SIZE,
        backgroundColor: PIXEL_BRAND_COLOR,
      }}
      aria-hidden="true"
    />
  );
}
