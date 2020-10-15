import React, { useEffect } from 'react';
import './index.scss';
import { Column } from '@ant-design/charts';
import { StatisticsApi } from '../../api/StatisticsApi';

const data = [
  {
    label: 'asd',
    value: 38,
  },
  {
    label: 'dfg',
    value: 52,
  },
  {
    label: 'ghj',
    value: 61,
  },
  {
    label: 'zxc',
    value: 145,
  },
  {
    label: 'cvb',
    value: 48,
  },
];

const statisticsApi = new StatisticsApi();

const Columna = (props) => {

  const { type, description } = props;

  useEffect(() => {

  }, [])

  const config = {
    className: 'chart',
    description: {
      visible: !!description ? true : false,
      text: description,
    },
    data,
    forceFit: true,
    padding: 'auto',
    xField: 'label',
    yField: 'value',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    label: {
      visible: true,
      position: 'middle',
    },
    meta: {
      label: {  alias: 'texto horizontal' },
      value: { alias: 'texto vertical' },
    },
    responsive: true,
  };

  return <Column {...config}/>;
};


export default Columna;