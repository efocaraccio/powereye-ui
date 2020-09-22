import React from 'react';
import { Radio, Card, Typography } from 'antd';

const { Text } = Typography

export const SexoCard = () => {

  const radioStyle = {
    display: 'block',
    height: '45px',
    lineHeight: '40px',
  };

  const onChange = e => {
    console.log('radio checked', e.target.value);
  };

  return <Card title={<Text strong>Selecciones qué sexo priorizar</Text>} style={{border: '1px solid #d9d9d9;'}}>
  <Radio.Group onChange={onChange}>
    <Radio style={radioStyle} value={1}>
      <Text keyboard>M</Text>
    </Radio>
    <Radio style={radioStyle} value={2}>
    <Text keyboard>F</Text>
    </Radio>
    <Radio style={radioStyle} value={3}>
      <Text keyboard>Ambos</Text>
    </Radio>
  </Radio.Group>
  </Card>
}