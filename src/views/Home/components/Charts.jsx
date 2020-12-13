import React from "react";
import { Chart } from "react-charts";

export const SiteVisits = () => {
  const data = React.useMemo(
    () => [
      {
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 4],
          [4, 7],
        ],
      },
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        height: "225px",
      }}
    >
      <Chart data={data} series={series} axes={axes} />{" "}
    </div>
  );
};

export const SiteAudience = () => {
  const data = React.useMemo(
    () => [
      {
        label: "Male",
        data: [[55, 55]],
      },
      {
        label: "Female",
        data: [[35, 35]],
      },
      {
        label: "Other",
        data: [[10, 10]],
      },
      {
        label: "Total",
        data: [[1, 0]],
      },
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "left" },
      { position: "bottom", type: "linear", stacked: false },
    ],
    []
  );

  return (
    <div
      style={{
        height: "225px",
      }}
    >
      <Chart data={data} series={series} axes={axes} />
    </div>
  );
};

export const TotalRevenue = () => {
  const data = React.useMemo(
    () => [
      {
        data: [[0, 75]],
      },
      {
        data: [[0, 65]],
      },
      {
        data: [[0, 55]],
      },
      {
        data: [[0, 85]],
      },
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      type: "bar",
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "ordinal", position: "bottom" },
      { position: "left", type: "linear", stacked: false },
    ],
    []
  );

  return (
    <div
      style={{
        height: "225px",
      }}
    >
      <Chart data={data} series={series} axes={axes} />
    </div>
  );
};

export const Growth = () => {
  const data = React.useMemo(
    () => [
      {
        data: [
          [0, 1],
          [1, 3],
          [2, 4],
          [3, 4],
          [4, 8],
        ],
      },
      {
        data: [
          [0, 1],
          [1, 2],
          [2, 3],
          [3, 5],
          [4, 7],
        ],
      },
    ],
    []
  );

  const series = React.useMemo(
    () => ({
      showPoints: false,
    }),
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div
      style={{
        height: "225px",
      }}
    >
      <Chart data={data} series={series} axes={axes} />{" "}
    </div>
  );
};
