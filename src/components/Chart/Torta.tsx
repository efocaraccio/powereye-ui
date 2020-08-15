import React from 'react';
import './index.scss';
import { Pie } from '@ant-design/charts';

const data = [
  {
    date: 'asd',
    value: 38,
  },
  {
    date: 'dfg',
    value: 52,
  },
  {
    date: 'ghj',
    value: 61,
  },
  {
    date: 'zxc',
    value: 145,
  },
  {
    date: 'cvb',
    value: 48,
  },
];

const Torta = (props) => {

  const { type, title, description } = props;

  const config = {
    className: 'chart',
    title: {
      visible: !!title ? true : false,
      text: title,
    },
    description: {
      visible: !!description ? true : false,
      text: description,
    },
    data,
    forceFit: true,
    padding: 'auto',
    radius: 0.8,
    angleField: 'value',
    colorField: 'date',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    label: {
      visible: true,
      type: 'outer',
      offset: 20,
      formatter: (text, item) => `${item._origin.date}: ${item._origin.value}`,
    },
    responsive: true,
  };

  return <Pie {...config} />;
};

export default Torta;