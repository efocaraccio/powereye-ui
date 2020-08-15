import React from 'react';
import { Columna, Torta, Linea } from '../Chart/index';
import { Typography, Card } from 'antd';
import './index.scss';

const { Title } = Typography;

export const ChartGroup = () => {

  return <div className={'chart-group'}>
    <Card style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Linea title={'Vistas de productos por día'} />
    </Card>
    <Card style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Torta title={'Vistas por producto'} />
    </Card>
    <Card style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Columna title={'Vistas totales por producto'} />
    </Card>
  </div>;
};