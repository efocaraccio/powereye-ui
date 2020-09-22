import React from 'react';
import './index.scss';
import { Row, Col, Card, Button, Typography } from 'antd';
import { ShowcaseSector } from './ShowcaseSector';


const options = [
  
  { value: 1, label: 'camara' },
  { value: 2, label: 'remera' },
  { value: 3, label: 'guante' },
  { value: 4, label: 'bufanda' },
  

]

const {Title,Text} = Typography;

export const Showcase = (props) => {

  const cuadrantes = 9

  const rows = [];
  for (let i = 0; i < cuadrantes / 3; i++) {
    rows.push(
      <Row gutter={[16, 16]}>
        {[1, 2, 3].map((value: undefined, index) => {
          return <Col xs={24} sm={8} md={8} lg={8} xl={8}>
            <ShowcaseSector options={options} index={(i * 3) + (index + 1)} />
          </Col>
        })}
      </Row>
    )
  }

  return <div className={'showcase'}>
    <div style={{textAlign: 'center', marginBottom: '25px'}}>
      <Title level={3}>Mapeo de vidriera</Title>
      <Text>Elige un producto por cada sector de tu vidriera según se encuentren dispuestos en tu vidriera real.</Text>
    </div>
    {rows}
    <div style={{width: '250px', margin: 'auto', marginTop: '25px'}}>
      <Button block type="primary">Guardar</Button>
    </div>
  </div>
};