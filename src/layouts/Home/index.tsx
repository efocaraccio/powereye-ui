import React from 'react';
import { Card, Typography, Divider, Row, Col } from 'antd';
import './index.scss';
import { ButtonCard } from '../../components/ButtonCard';
import { Link } from 'react-router-dom';

const { Title } = Typography;

export const Home = () => {

  return <div className={'home'}>
    <Card style={{ width: '100%' }} className={'title-card'}>
      <Title style={{ margin: 0, fontWeight: 500 }} level={2}>Nombre de la empresa</Title>
    </Card>
    <Divider />
    <div className={'button-group'}>
    <Row>
      <Col span={12}>
        <Link to='/charts'><ButtonCard image={'chart'} title={'Estadísticas'}/></Link>
        </Col>
      <Col span={12}>
        <Link to='/config' ><ButtonCard image={'config'} title={'Configurar mi vidriera'}/></Link>
        </Col>
    </Row>

    </div>
  </div>;
};
