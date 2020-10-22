import React from 'react';
import { Radio, Card, Typography } from 'antd';

const { Text } = Typography

export const SexoCard = (props) => {

  const radioStyle = {
    display: 'block',
    height: '45px',
    lineHeight: '40px',
  };

  const onChange = e => {
    props.onChange(e.target.value);
  };

  return <Card title={<Text strong>Selecciones qué sexo priorizar</Text>} style={{border: '1px solid #d9d9d9'}}>
  <Radio.Group onChange={onChange} value={props.value}>
    <Radio style={radioStyle} value={'M'}>
      <Text keyboard>M</Text>
    </Radio>
    <Radio style={radioStyle} value={'F'}>
    <Text keyboard>F</Text>
    </Radio>
  
  </Radio.Group>
  </Card>
}