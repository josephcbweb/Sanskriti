import React, { useState } from "react";
import { Chart } from "react-google-charts";
import "./Map.css"; // Importing the CSS file
import { data } from "../../utils/data.ts";

const options = {
  region: "IN",
  displayMode: "regions",
  resolution: "provinces",
  colorAxis: {
    colors: [
      "#FFD700", // 1 - Soft yellow
      "#C7D9FF", // 2 - Light blue
      "#FFB3A6", // 3 - Peachy pink
      "#D0A8FF", // 4 - Lavender
      "#A6D8D2", // 5 - Light teal
      "#FFDAB9", // 6 - Peach beige
      "#FF8F66", // 7 - Soft orange
      "#C6F5C0", // 8 - Pale mint
      "#FFB3D9", // 9 - Light rose
      "#FF7F7F", // 10 - Light red
      "#D0A04A", // 11 - Light mustard
      "#E5A7C7", // 12 - Soft pinkish lavender
      "#A3A7FF", // 13 - Soft periwinkle
      "#C1A9FF", // 14 - Soft lilac
      "#A2D8C9", // 15 - Light seafoam green
      "#A7D6A4", // 16 - Soft mint green
      "#A7C8FF", // 17 - Soft sky blue
      "#F1C62D", // 18 - Light gold
      "#C4A1E7", // 19 - Soft violet
      "#B8D8B4", // 20 - Soft sage
      "#FF8C74", // 21 - Light salmon
      "#A8B9FF", // 22 - Soft periwinkle blue
      "#A1D1D1", // 23 - Light turquoise
      "#FFB7A6", // 24 - Light coral
      "#B9D38C", // 25 - Soft olive
      "#F2A68D", // 26 - Light terracotta
      "#D19D72", // 27 - Soft brown
      "#F9F1A2", // 28 - Pale buttery yellow
      "#D1A5D4", // 29 - Soft lavender pink
      "#88C9D6", // 30 - Light cyan
      "#B3E5A0", // 31 - Soft pastel green
      "#A8F8A2", // 32 - Pale lime green
      "#A2F4BB", // 33 - Light pastel teal
      "#D4A9E7", // 34 - Light purple
      "#B6A1D7", // 35 - Soft lavender
      "#FFD2E0", // 36 - Light pastel pink
      "#FFB49F", // 37 - Soft peach
    ],
  }, // Gradient from light orange to dark orange
  backgroundColor: "transparent", // Transparent background color
  datalessRegionColor: "transparent", // Transparent for other countries
  defaultColor: "transparent", // Light gray for India
  tooltip: { textStyle: { color: "#000000" }, showColorCode: false }, // Black tooltip text for dark mode
  legend: "none",
};

const handleRegionClick = (region) => {
  const stateName = region[1].toLowerCase().replace(/\s+/g, "-");
  window.open(`/state/${stateName}`, "_self"); // Redirect to dynamic route
};

const Map = () => {
  return (
    <div style={{ textAlign: "center" }} className="map-main">
      <div className="map-comp">
        <Chart
          chartType="GeoChart"
          data={data}
          options={options}
          width="100%"
          height="100vh"
          legendToggle
          chartEvents={[
            {
              eventName: "ready",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const svg = chart.getContainer().getElementsByTagName("svg")[0];
                const regions = svg.getElementsByTagName("path");

                for (let region of regions) {
                  const dataRegion = region.getAttribute("data-region");
                  if (dataRegion && !dataRegion.startsWith("IN-")) {
                    region.classList.add("hidden-region");
                  }
                }
              },
            },
            {
              eventName: "select",
              callback: ({ chartWrapper }) => {
                const chart = chartWrapper.getChart();
                const selection = chart.getSelection();
                if (selection.length === 1) {
                  const region = data[selection[0].row + 1];
                  handleRegionClick(region);
                }
              },
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Map;
