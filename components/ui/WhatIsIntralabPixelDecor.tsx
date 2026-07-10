import {
  WHAT_IS_INTRALAB_PIXEL_CELLS,
  WHAT_IS_INTRALAB_PIXEL_GRID,
} from "./what-is-intralab-pixels";
import { PixelGridDecor } from "./PixelGridDecor";

type WhatIsIntralabPixelDecorProps = {
  className?: string;
};

export function WhatIsIntralabPixelDecor({
  className = "",
}: WhatIsIntralabPixelDecorProps) {
  return (
    <PixelGridDecor
      cells={WHAT_IS_INTRALAB_PIXEL_CELLS}
      grid={WHAT_IS_INTRALAB_PIXEL_GRID}
      className={className}
    />
  );
}
