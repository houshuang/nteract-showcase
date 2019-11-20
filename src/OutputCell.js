import * as React from 'react';
import {
  KernelOutputError,
  Media,
  Output,
  PromptRequest,
  RichMedia,
  StreamText,
} from '@nteract/outputs';
import { Outputs, Pagers } from '@nteract/presentational-components';

import DataExplorer from '@nteract/data-explorer';
// import WidgetDisplay from '@nteract/jupyter-widgets';
import GeoJSONTransform from '@nteract/transform-geojson';
import ModelDebug from '@nteract/transform-model-debug';
import PlotlyTransform from '@nteract/transform-plotly';
import VDOMDisplay from '@nteract/transform-vdom';
import { get } from 'lodash';

const displayOrder = [
  'application/vnd.jupyter.widget-view+json',
  'application/vnd.vega.v5+json',
  'application/vnd.vega.v4+json',
  'application/vnd.vega.v3+json',
  'application/vnd.vega.v2+json',
  'application/vnd.vegalite.v3+json',
  'application/vnd.vegalite.v2+json',
  'application/vnd.vegalite.v1+json',
  'application/geo+json',
  'application/vnd.plotly.v1+json',
  'text/vnd.plotly.v1+html',
  'application/x-nteract-model-debug+json',
  'application/vnd.dataresource+json',
  'application/vdom.v1+json',
  'application/json',
  'application/javascript',
  'text/html',
  'text/markdown',
  'text/latex',
  'image/svg+xml',
  'image/gif',
  'image/png',
  'image/jpeg',
  'text/plain',
];

const displayById = {
  'application/json': Media.Json,
  'application/javascript': Media.JavaScript,
  'text/html': Media.HTML,
  'text/markdown': Media.Markdown,
  'text/latex': Media.LaTeX,
  'image/svg+xml': Media.SVG,
  'image/gif': Media.Image,
  'image/png': Media.Image,
  'image/jpeg': Media.Image,
  'text/plain': Media.Plain,
  'text/vnd.plotly.v1+html': PlotlyTransform,
  'application/vnd.plotly.v1+json': PlotlyTransform,
  'application/geo+json': GeoJSONTransform,
  'application/x-nteract-model-debug+json': ModelDebug,
  'application/vnd.dataresource+json': DataExplorer,
  // 'application/vnd.jupyter.widget-view+json': WidgetDisplay,
  // 'application/vnd.vegalite.v1+json': VegaLite1,
  // 'application/vnd.vegalite.v2+json': VegaLite2,
  // 'application/vnd.vegalite.v3+json': VegaLite3,
  // 'application/vnd.vega.v2+json': Vega2,
  // 'application/vnd.vega.v3+json': Vega3,
  // 'application/vnd.vega.v4+json': Vega4,
  // 'application/vnd.vega.v5+json': Vega5,
  'application/vdom.v1+json': VDOMDisplay,
};

const richestMediaType = (output) => {
  const outputData = output.data;
  if (!outputData) {
    return;
  }

  // Find the first mediaType in the output data that we support with a handler
  const mediaType = displayOrder.find((key) => {
    return outputData[key] && displayById[key];
  });

  return mediaType;
};

const Transforms = ({ output }) => {
  const mediaType = richestMediaType(output);
  if (!mediaType) {
    return null;
  }

  const metadata = get(output, ['metadata', mediaType]);
  const data = output.data[mediaType];
  const Media = displayById[mediaType];
  return <Media data={data} metadata={metadata} />;
};

const Cell = (props) => {
  const {
    pager = [],
    outputs = [],
    prompts = [],
    sendInputReply = () => '',
  } = props;
  return (
    <>
      <Pagers>
        {pager.map((pager, key) => (
          <RichMedia data={pager.data} metadata={pager.metadata}>
            <Media.Json />
            <Media.JavaScript />
            <Media.HTML />
            <Media.Markdown />
            <Media.LaTeX />
            <Media.SVG />
            <Media.Image />
            <Media.Plain />
          </RichMedia>
        ))}
      </Pagers>
      <Outputs>
        {outputs.map((output, index) => (
          <>
            <Transforms output={output} metadata={output} />
            <Output output={output}>
              <KernelOutputError />
              <StreamText />
            </Output>
          </>
        ))}
      </Outputs>
      {prompts.map((prompt: InputRequestMessage) => (
        <PromptRequest {...prompt} submitPromptReply={sendInputReply} />
      ))}
    </>
  );
};

export default Cell;
