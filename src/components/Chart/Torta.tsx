import React, {useState, useEffect} from 'react';
import './index.scss';
import { Pie } from '@ant-design/charts';
import { StatisticsApi } from '../../api/StatisticsApi';


const Torta = (props) => {

  const { type, title, description, filtro} = props;
  const [data, setData] = useState([]);

  useEffect( () => {
    const statisticsApi = new StatisticsApi()
    if(type === "Sexo"){
      statisticsApi.getTortaSexo(filtro).then( response => {
        if(response !== null){
          const newDataSexo = [{
            date: 'Masculino',
            value: response.cantM
          },
          {
            date: 'Femenino',
            value: response.cantF
          },];
          setData(newDataSexo);
        }
      }).catch( err => {
        console.log(err);
      } );
    }
    if(type === "RangoEtario"){
      statisticsApi.getTortaRangoEtario(filtro).then( response => {
        if(response !== null){
          const newDataRangoEtario = [{
            date: 'Menores a 25 años',
            value: response.rango0025
          },
          {
            date: 'De 25 a 40 años',
            value: response.rango2540
          },
          {
            date: 'De 40 a 60 años',
            value: response.rango4060
          },
          {
            date: '60 años o más',
            value: response.rango60up
          },];
          setData(newDataRangoEtario);
        }
      }).catch( err => {
        console.log(err);
      } );
    }
  }, [filtro] )

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