import React from 'react';
import { Card, Typography, Divider, Row, Col } from 'antd';
import './index.scss';
import { ButtonCard } from '../../components/ButtonCard';

const { Title } = Typography;

export const Home = () => {

  return <div className={'home'}>
    <Card style={{ width: '100%' }} className={'title-card'}>
      <Title style={{ margin: 0 }} level={1}>Nombre de la empresa</Title>
    </Card>
    <Divider />
    <div className={'button-group'}>
    <Row>
      <Col span={12}><ButtonCard image={'chart'} title={'Estadísticas'} onClick={() => {}}/></Col>
      <Col span={12}><ButtonCard image={'config'} title={'Configurar mi vidriera'} onClick={() => {}}/></Col>
    </Row>

    </div>
  </div>;
};