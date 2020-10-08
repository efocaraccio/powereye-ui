import React, { useState} from 'react';
import { Card, PageHeader, Col, Row, Space, DatePicker, Divider, Typography } from 'antd';
import './index.scss';
import { IndicatorCard } from '../IndicatorCard';
import { StatisticsApi } from '../../api/StatisticsApi';

const { RangePicker } = DatePicker;
const { Text, Title } = Typography;


export const IndicatorGroup = () => {

  const statisticsApi = new StatisticsApi()
  
  const [promedio, setPromedio] = useState(0);
  const [ingresaron, setIngresaron] = useState(0);
  const [detuvieron, setDetuvieron] = useState(0);
  console.log(RangePicker.toString)
  const filtro = {
    fechaInicio: "2020/09/09",
    fechaFin: "2020/09/27"
  }

  statisticsApi.getPromedioVistasDiarias(filtro).then( response => {
    if(response != 0){
      setPromedio(response)
    }
  }).catch( err => {
    console.log(err);
  } );

  statisticsApi.getPersonasQueIngresaron(filtro).then( response => {
    if(response != 0){
      setIngresaron(response)
    }
  }).catch( err => {
    console.log(err);
  } );

  statisticsApi.getPersonasDetuvieron(filtro).then( response => {
    if(response != 0){
      setDetuvieron(response)
    }
  }).catch( err => {
    console.log(err);
  } );
  

  return <div className={'indicator-group'}>
    <Title>Estadísticas</Title>
    <Space>
      <Text strong>Seleccione un rango de fecha</Text>
      <RangePicker />
    </Space>
    <div className={'indicator-row'}>
      <IndicatorCard title={'Promedio de vistas diarias'} initialStat={promedio} />
      <IndicatorCard title={'Personas que se detuvieron'} initialStat={detuvieron} />
      <IndicatorCard title={'Personas que ingresaron'} initialStat={ingresaron} />
    </div>


  </div>;

};
