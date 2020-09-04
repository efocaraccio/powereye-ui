import React from 'react';
import { Typography } from 'antd';

const { Title, Text } = Typography

export const ScreenDisplay = () => {

  return <div className={''}>
    <div style={{textAlign: 'center', marginBottom: '25px'}}>
      <Title level={3}>Mapeo de vidriera</Title>
      <Text>Elige un producto por cada sector de tu vidriera según se encuentren dispuestos en tu vidriera real.</Text>
    </div>
  </div>
}