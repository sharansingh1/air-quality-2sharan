"use client";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  Tooltip,
  XYChart,
} from "@visx/xychart";
import { ParentSize } from "@visx/responsive";

const accessors = {
  xAccessor: (d) => d && new Date(d.x),
  yAccessor: (d) => d.y,
};

const Line = ({ data, title, units }) => {
  if (data.length === 0) {
    return null;
  }

  return (
    <div className="pl-4 py-4 w-1/3">
      {title}
      <ParentSize className="-my-8">
        {({ width }) => (
          <XYChart
            height={250}
            width={250}
            xScale={{ type: "time" }}
            yScale={{ type: "linear" }}
          >
            <AnimatedGrid
              numTicks={10}
              lineStyle={{
                stroke: "#f1f1f1",
                strokeLinecap: "round",
                strokeWidth: 1,
              }}
              label="poggers"
            />
            <AnimatedAxis
              hideAxisLine
              hideTicks
              orientation="bottom"
              numTicks={4}
              tickFormat={(date) => {
                return new Date(date).toLocaleTimeString(navigator.language, {
                  hour: "2-digit",
                  minute: "2-digit",
                });
              }}
            />
            <AnimatedAxis
              hideAxisLine
              hideTicks
              orientation="left"
              numTicks={10}
              label={units}
            />
            <AnimatedLineSeries
              stroke="#FF0000"
              dataKey={title}
              data={data}
              {...accessors}
            />
            <Tooltip
              snapTooltipToDatumX
              snapTooltipToDatumY
              showSeriesGlyphs
              glyphStyle={{
                fill: "#008561",
                strokeWidth: 0,
              }}
              renderTooltip={({ tooltipData }) => {
                return (
                  <>
                    {Object.values(tooltipData.datumByKey).map(
                      ({ datum }, index) => (
                        <div key={index}>
                          {datum.y} {units}
                        </div>
                      ),
                    )}
                  </>
                );
              }}
            />
          </XYChart>
        )}
      </ParentSize>
    </div>
  );
};

export default Line;
