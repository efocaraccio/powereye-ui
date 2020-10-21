import React, {useEffect, useState} from 'react';
import './index.scss';
import { Line } from '@ant-design/charts';
import { StatisticsApi } from '../../api/StatisticsApi';
import { mapServerDataToLineChart } from './Helper/helper';

/*const data = [
  {
    date: '2018/8/13',
    type: 'register',
    value: 2852,
  },
  {
    date: '2018/8/13',
    type: 'bill',
    value: 689,
  }
];*/

const statisticsApi = new StatisticsApi();

const Linea = (props) => {

  const { description, filtro } = props;
  const [data, setData] = useState([]);

  const dataVacio = [
    {
      date: '',
      type: '',
      value: 0
    }
  ]

  useEffect( () => {
    statisticsApi.getLineaImpacto(filtro)
      .then( response => {
        if(response !== null || response.length === 0){
          setData(mapServerDataToLineChart(response))
        }
        if(response.length === 0){
          setData(dataVacio)
        }
      } )
      .catch( err => {
        setData([])
        console.log(err);
      })
  }, [filtro])

  const config = {
    className: 'chart',
    description: {
      visible: !!description ? true : false,
      text: description,
    },
    data,
    responsive: true,
    forceFit: true,
    padding: 'auto',
    xField: 'date',
    yField: 'value',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },

    seriesField: 'type',
    interactions: [
      {
        type: 'slider',
        cfg: {
          start: 0,
          end: 1,
        },
      },
    ],
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };

  return < Line {...config} />;
};

export default Linea;