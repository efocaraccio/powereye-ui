import React from 'react';
import { Column } from '@ant-design/charts';

const data = [
  {
    type: 'asd',
    sales: 38,
  },
  {
    type: 'dfg',
    sales: 52,
  },
  {
    type: 'ghj',
    sales: 61,
  },
  {
    type: 'zxc',
    sales: 145,
  },
  {
    type: 'cvb',
    sales: 48,
  },
];

export const ChartGroup = () => {


  const config = {
    title: {
      visible: true,
      text: 'El titulo del grafico',
    },
    description: {
      visible: true,
      text:
        'descrionc lorem ipsum dolor lorem ipsum dolor lorem ipsum dolor',
    },
    forceFit: true,
    data,
    padding: 'auto',
    xField: 'type',
    yField: 'sales',
    meta: {
      type: { alias: 'texto horizontal' },
      sales: { alias: 'texto vertical' },
    },
    label: {
      visible: true,
      position: 'middle',
    },
  };
  return <Column {...config} />;
};