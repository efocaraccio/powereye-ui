import React, {useState} from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import { List, Typography, Tooltip, Card } from 'antd';
import './index.scss'
import { MenuOutlined } from '@ant-design/icons';

const arrayMove = require('array-move');
const { Text } = Typography;
function getIndex(value, arr, prop) {
  for(var i = 0; i < arr.length; i++) {
      if(arr[i][prop] === value) {
          return i;
      }
  }
  return -1; //to handle the case where the value doesn't exist
}
const SortableItem = SortableElement(({value}) => <List.Item>
  <MenuOutlined style={{marginRight: '6px'}}/>
  <Text>{value}</Text>
</List.Item>);

const SortableList = SortableContainer(({items}) => {
  return (
    <Card title={<Tooltip title="Lista ordenada de mayor prioridad a menor prioridad" color={'blue'}>
    <Text strong>Ordene según prioridad</Text>
  </Tooltip>}>
    <List>
    {items.map((value, index) => (
      <SortableItem key={value.id} index={index} value={value.label} />
      ))}
      </List>
      </Card>
  );
});


export const SortableComponent = (props) => {

  const onSortEnd = ({oldIndex, newIndex}) => {
    props.setItemsOrdenables(arrayMove(props.items, oldIndex, newIndex));
    var array=arrayMove(props.items, oldIndex, newIndex)

    props.setPrioridadConfig({
      rangoEtario: getIndex("Rango etario",array,"label"),
      prioridadSexo: getIndex("Sexo",array,"label"),
      cantVistas: getIndex("Cantidad de vistas",array,"label")
    })

  };

  return <SortableList  items={props.items} onSortEnd={onSortEnd} />;

}