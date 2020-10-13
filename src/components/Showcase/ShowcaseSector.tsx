import React, { useEffect, useState } from 'react';
import './index.scss';
import { Card, Tag, Typography, Popover, Select } from 'antd';

const { Title, Text } = Typography;
const { Option } = Select;

export const ShowcaseSector = (props) => {

  const { index, text, options = [], onProductChange } = props;

  const [selectedOption, setSelectedOption] = useState(text);

  useEffect( () => {
    console.log(options)
    // TODO find para agarra el primer item que coincide con la vidriera ya que como esta el bug en el back, hay más de un item por zona varias veces
    const currentValue = options.find( opt => opt.idZonaVidriera === index);
    if( currentValue ) {
      setSelectedOption(currentValue.label)
    } else {
      setSelectedOption("")
    }
  }, [options])

  const onChange = (value, options) => {
    setSelectedOption(options.children);
    onProductChange(value, index)
  }

  const content = (
    <div>
      <Select style={{ width: '100%' }} onChange={onChange} >
        { options.map(option => <Option key={option.id} value={option.id}>{option.label}</Option>) }
      </Select>
    </div>
  );

  return <Popover placement="bottom" title={'Seleccione un producto'} content={content} trigger="click">
    <Card className={'sector-content'} hoverable style={{ height: '150px' }}>
      <span className={'fixed-index'}>{index}</span>
      { selectedOption ? <Text className={'text-option'}>{selectedOption}</Text> : <span/>}
    </Card>
  </Popover>;
};