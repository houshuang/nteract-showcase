import React from "react";
import Cell from "../OutputCell";
import latexOutputs from "./latexOutputs";
import errorOutputs from "./errorOutputs";
import imageOutputs from "./imageOutputs";
import pipInstallStream from "./pipInstallStream";
import svgOutputs from "./svgOutputs";
import htmlOutputs from "./htmlOutputs";
import plotlyMimeOutputs from "./plotlyMimetypeOutputs";
import dataExplorerOutputs from "./dataExplorerOutputs";
import geojsonOutputs from "./geojsonOutputs";
import vdomOutputs from "./vdomOutputs";

export default {
  title: "Output Cells"
};

const prompts = [
  {
    prompt: "What's your name",
    password: false
  }
];

const pagerOutput = [
  {
    data: {
      "text/plain":
        "\u001b[0;31mDocstring:\u001b[0m\nprint(value, ..., sep=' ', end='\\n', file=sys.stdout, flush=False)\n\nPrints the values to a stream, or to sys.stdout by default.\nOptional keyword arguments:\nfile:  a file-like object (stream); defaults to the current sys.stdout.\nsep:   string inserted between values, default a space.\nend:   string appended after the last value, default a newline.\nflush: whether to forcibly flush the stream.\n\u001b[0;31mType:\u001b[0m      builtin_function_or_method\n"
    }
  }
];

const JSONOutputs = [
  {
    metadata: {},
    output_type: "display_data",
    data: {
      "text/plain": "<IPython.core.display.JSON object>",
      "application/json": {
        a: [1, 2, 3, 4],
        b: {
          inner1: "helloworld",
          inner2: "foobar"
        }
      }
    }
  }
];

const JSOutputs = [
  {
    data: {
      "text/plain": "<IPython.core.display.Javascript object>",
      "application/javascript": "window.alert('hi')"
    }
  }
];

const markdownOutputs = [
  {
    data: {
      "text/plain": "<IPython.core.display.Markdown object>",
      "text/markdown": "*some markdown* $\\phi$"
    }
  }
];

const plainOutputs = [
  {
    data: {
      "text/plain":
        "0     0.682470\n1     0.409654\n2    -1.683142\n3     0.517818\n4     0.343392\n5    -0.281964\n6    -0.046200\n7    -0.785414\n8    -0.179461\n9    -0.553865\n10   -0.625018\n11   -0.344308\n12    0.281107\n13    0.189159\n14    0.752562\n15    0.997223\n16   -0.547336\n17   -1.143198\n18   -0.028214\n19    0.302076\n20   -0.434141\n21   -0.402221\n22    0.388526\n23    0.132653\n24    0.973290\n25    0.848051\n26    0.136678\n27   -1.713279\n28    0.829344\n29    0.872920\n30    0.259600\n31   -2.140716\n32    0.386217\n33    1.439180\n34   -1.257657\n35    0.485445\n36   -1.504132\n37   -0.420448\n38    0.641855\n39   -0.525863\n40   -0.527276\n41    1.224988\n42    0.140673\n43   -1.988895\n44   -0.078344\n45   -0.215901\n46    0.513992\n47   -0.783388\n48    0.460540\n49    0.978539\ndtype: float64"
    }
  }
];

export const EmptyCell = () => <Cell />;

export const PagerCell = () => <Cell pager={pagerOutput} />;

export const ErrorCell = () => <Cell outputs={errorOutputs} />;

export const ErrorWithPager = () => (
  <Cell pager={pagerOutput} outputs={errorOutputs} />
);

export const PromptCell = () => <Cell prompts={prompts} />;

export const StreamCell = () => <Cell outputs={pipInstallStream} />;

export const JsonCell = () => <Cell outputs={JSONOutputs} />;

export const JsWindowAlertCell = () => <Cell outputs={JSOutputs} />;

export const HTMLPandasCell = () => <Cell outputs={htmlOutputs} />;

export const MarkdownCell = () => <Cell outputs={markdownOutputs} />;

export const LatexCell = () => <Cell outputs={latexOutputs} />;

export const SvgCell = () => <Cell outputs={svgOutputs} />;

export const ImageCell = () => <Cell outputs={imageOutputs} />;

export const PlainCell = () => <Cell outputs={plainOutputs} />;

export const PlotlyMimeCell = () => <Cell outputs={plotlyMimeOutputs} />;

export const DataExplorerCell = () => <Cell outputs={dataExplorerOutputs} />;

export const GeoJSONCell = () => <Cell outputs={geojsonOutputs} />;

export const VDOMCell = () => <Cell outputs={vdomOutputs} />;
