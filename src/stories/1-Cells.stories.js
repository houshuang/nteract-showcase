import React from "react";
import {
  Input,
  Prompt,
  Source,
  Cell,
  Cells
} from "@nteract/presentational-components";

import * as OutputCells from "./0-OutputCells.stories";

export default {
  title: "Cells"
};

export const FullCellPandas = promptProps => (
  <Cell>
    <Input>
      <Prompt {...promptProps} />
      <Source language="python">{`import pandas as pd\npd.DataFrame([1,2,3])\n\n# Alternate between hovering the cursor over this cell and outside of the cell`}</Source>
    </Input>
    <OutputCells.HTMLPandasCell />
  </Cell>
);

export const FullCellPandasRunning = () => <FullCellPandas running />;

export const FullCellPandasQueued = () => <FullCellPandas queued />;

export const FullCellPandasRunningCounter = () => (
  <FullCellPandas counter={2} />
);

export const FullCellPandasBlank = () => <FullCellPandas blank />;

export const FullCellErrors = () => (
  <Cell isSelected>
    <Input>
      <Prompt counter={2} />
      <Source language="python">{`import pandas as pd\npd.DataFrame([1,2,3])\n\n# Alternate between hovering the cursor over this cell and outside of the cell`}</Source>
    </Input>
    <OutputCells.ErrorCell />
  </Cell>
);

export const ManyCells = () => (
  <Cells>
    <FullCellPandas />
    <FullCellErrors />
  </Cells>
);
