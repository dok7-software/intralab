import {
  TEAM_BENEFITS_PIXEL_CELLS,
  TEAM_BENEFITS_PIXEL_GRID,
} from "./team-benefits-pixels";
import { PixelGridDecor } from "./PixelGridDecor";

type TeamBenefitsPixelDecorProps = {
  className?: string;
};

export function TeamBenefitsPixelDecor({
  className = "",
}: TeamBenefitsPixelDecorProps) {
  return (
    <PixelGridDecor
      cells={TEAM_BENEFITS_PIXEL_CELLS}
      grid={TEAM_BENEFITS_PIXEL_GRID}
      className={className}
    />
  );
}
