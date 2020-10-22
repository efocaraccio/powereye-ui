import React from 'react';
import { Radio, Card, Typography } from 'antd';

const { Text } = Typography

export const RangoEtarioCard = (props) => {

  const radioStyle = {
    display: 'block',
    height: '45px',
    lineHeight: '30px',
  };

  const onChange = e => {
    props.onChange(e.target.value);
  };

  console.log(props.value)
  return <Card title={<Text strong>Selecciones qué rango etario priorizar</Text>} style={{border: '1px solid #d9d9d9'}}>
  <Radio.Group onChange={onChange} value={props.value}>
    <Radio style={radioStyle} value={0}>
      <Text keyboard>0 - 25</Text>
    </Radio>
    <Radio style={radioStyle} value={1}>
    <Text keyboard>25 - 40</Text>
    </Radio>
    <Radio style={radioStyle} value={2}>
      <Text keyboard>40 - 60</Text>
    </Radio>
    <Radio style={radioStyle} value={3}>
      <Text keyboard>60 +</Text>
    </Radio>
  </Radio.Group>
  </Card>
}