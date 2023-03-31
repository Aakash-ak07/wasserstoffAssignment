import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { TinyColumn } from '@ant-design/plots';

const BarChart = () => {
  const data = [254, 128, 217, 123, 154, 182, 166, 198, 121, 327, 91, 417, 366, 259, 81, 397, 366, 219, 45, 78];
  const config = {
    height: 60,
    autoFit: true,
    data,
    tooltip: {
      customContent: function (x, data) {
        return `NO.${x}: ${data[0]?.data?.y.toFixed(2)}`;
      },
    },
    pattern: {
      type: 'line',
    },
  };
  return <TinyColumn {...config} />;
};

export default BarChart;