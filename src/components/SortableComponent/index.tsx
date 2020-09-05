import React, {Component, useState} from 'react';
import {render} from 'react-dom';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import { List, Typography, Divider, Tooltip, Card } from 'antd';
import './index.scss'
import { MenuOutlined } from '@ant-design/icons';

const { Text } = Typography;

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

const initialItems = [
  {
    label: "Cantidad de vistas",
    id: 1
  },
  {
    label: "Rango etario",
    id: 2
  },
  {
    label: "Sexo",
    id: 3
  },
  {
    label: "Expresión",
    id: 4
  },
]

export const SortableComponent = () => {

  const [ items, setItems ] = useState(initialItems)

  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  return <SortableList items={items} onSortEnd={onSortEnd} />;

}