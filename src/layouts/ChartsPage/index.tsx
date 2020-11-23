import React, { useState } from 'react';
import { Layout, Divider } from 'antd';
import './index.scss';
import { IndicatorGroup } from '../../components/IndicatorGroup';
import { ChartGroup } from '../../components/ChartGroup';
import {  } from 'antd';
import { TopBar } from '../../components/TopBar/TopBar';

const { Header, Content } = Layout;

interface FiltroFecha {
  fechaInicio: string;
  fechaFin: string;
  producto?: number;
}

const fechaInicial: FiltroFecha = {
  fechaInicio: "2020/10/15",
  fechaFin: "2020/11/27",
}



export const ChartsPage = () => {

  const dateFormat = 'YYYY/MM/DD';
  const [filtro, setFiltro ] = useState( fechaInicial )


  const onDateChange = (dateRange: moment.Moment[]) => {
    const dates = dateRange
                    .filter( date => date.isValid )
                    .map( date => date.format(dateFormat))

    if( dates.length > 0 ) {
      setFiltro({
        fechaInicio: dates[0],
        fechaFin: dates[1]
      })
    }
  };

  return  <Layout>
  <Header>
    <TopBar />
  </Header>
  <Content className={'charts-page'}>
    <IndicatorGroup   dateFormat={dateFormat} onDateChange={onDateChange} fechaInicial={fechaInicial} filtro={filtro}/>
    <Divider/>
    <ChartGroup filtro={filtro} onFilterChange={setFiltro}/>
  </Content>
</Layout>;

};
