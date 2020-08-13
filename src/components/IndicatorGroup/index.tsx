import React from 'react';
import { Card, PageHeader, Col, Row, Space, DatePicker, Divider } from 'antd';
import './index.scss';
import { IndicatorCard } from '../IndicatorCard';

const { RangePicker } = DatePicker;

export const IndicatorGroup = () => {

  return  <div className={'indicator-group'}>
<RangePicker/>
    <div className={'indicator-row'}>
        <IndicatorCard title={'Promedio de vistas diarias'} initialStat={2}/>
        <IndicatorCard title={'asd'} initialStat={1}/>
        <IndicatorCard title={'asd'} initialStat={1}/>
        <IndicatorCard title={'Rendimiento'} initialStat={1}/>
        </div>


  </div>;

};
