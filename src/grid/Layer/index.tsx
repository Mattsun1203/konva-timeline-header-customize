import React, { FC, memo } from "react";

import { KonvaLayer } from "../../@konva";
import GridCellsHeader from "../GridCellsHeader";
import GridRows from "../Rows";

interface GridLayerProps {
  height: number;
}

const GridLayer: FC<GridLayerProps> = ({ height }) => {
  return (
    <KonvaLayer>
      <GridRows />
      <GridCellsHeader height={height} />
    </KonvaLayer>
  );
};

export default memo(GridLayer);
