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

const initialItems = [
  {
    label: "Cantidad de vistas",
    id: 0
  },
  {
    label: "Rango etario",
    id: 1
  },
  {
    label: "Sexo",
    id: 2
  },
  {
    label: "Expresión",
    id: 3
  },
]

export const SortableComponent = () => {

  const [ items, setItems ] = useState(initialItems)

  const onSortEnd = ({oldIndex, newIndex}) => {
    setItems(arrayMove(items, oldIndex, newIndex));
    var array=arrayMove(items, oldIndex, newIndex)

    localStorage.setItem("prioridadRangoEtario",getIndex("Rango etario",array,"label").toString())
    localStorage.setItem("prioridadSexo",getIndex("Sexo",array,"label").toString())
    localStorage.setItem("prioridadCantVistas",getIndex("Cantidad de vistas",array,"label").toString())
    localStorage.setItem("prioridadExpresion",getIndex("Expresión",array,"label").toString())

   
    console.log(array)

  };

  return <SortableList items={items} onSortEnd={onSortEnd} />;

}