import React, { useState } from 'react';
import './index.scss';
import { Card, Tag, Typography, Popover, Select } from 'antd';

const { Title, Text } = Typography;

export const ShowcaseSector = (props) => {

  const { index, text, options = [] } = props;

  const [selectedOption, setSelectedOption] = useState(text);


  const onChange = (value, options) => {
    setSelectedOption(options.label);
  }

  const content = (
    <div>
      <Select options={options} style={{ width: '100%' }} onChange={onChange} />
    </div>
  );

  return <Popover placement="bottom" title={'Seleccione un producto'} content={content} trigger="click">
    <Card className={'sector-content'} hoverable style={{ height: '150px' }}>
      <span className={'fixed-index'}>{index}</span>
      { selectedOption ? <Text className={'text-option'}>{selectedOption}</Text> : <span/>}
    </Card>
  </Popover>;
};