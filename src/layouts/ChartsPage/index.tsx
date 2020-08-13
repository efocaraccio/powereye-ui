import React from 'react';
import { Layout, Divider } from 'antd';
import './index.scss';
import { IndicatorGroup } from '../../components/IndicatorGroup';
import { ChartGroup } from '../../components/ChartGroup';
import {  } from 'antd';
import { TopBar } from '../../components/TopBar/TopBar';

const { Header, Content } = Layout;

export const ChartsPage = () => {

  return  <Layout>
  <Header>
    <TopBar />
  </Header>
  <Content className={'charts-page'}>
    <IndicatorGroup/>
    <Divider style={{margin: '30px'}}/>
  </Content>
  <ChartGroup/>
</Layout>;

};
