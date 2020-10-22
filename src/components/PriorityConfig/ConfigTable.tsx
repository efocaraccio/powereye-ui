import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Space } from 'antd';
import { PriorityApi } from '../../api/PriorityApi';
import Item from 'antd/lib/list/Item';

        // Reemplazar por use Effect que consulte los productos

export const ConfigTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const [modalVisible, setModalVisibility] = useState(false);

  const isEditing = record => record.key === editingKey;

  const priorityApi = new PriorityApi()
/*      FALTA DESTACAR COMO CON H1 EL QUE TENGA MAS IMPACTO******************    **/
  useEffect(()=> {
    priorityApi.getConfig().then((response)=> {
      setData(response.map(item => {
        
        return {
          key: item.id,
          prioridadCantVistas: item.prioridadCantVistas,
          prioridadExpresion: item.prioridadExpresion,
          prioridadRangoEtario: item.prioridadRangoEtario,
          prioridadSexo: item.prioridadSexo,
          valorSexo: item.valorSexo,
          valorRangoEtario: item.valorRangoEtario,
          
        }
      }))
    })
  },[])

  

  /*
  * Functions to interact with a row of the table
  * save/edit/delete/cancel
  */
  const edit = record => {
    form.setFieldsValue({
      
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  

  /*
  * END Functions to interact with a row of the table
  */


  /*
  * Columns of table
  */
  const columns = [
    {
      title: 'Prioridad cant vistas',
      dataIndex: 'prioridadCantVistas',
      width: '15%',
      editable: false,
    },
    {
      title: 'Prioridad rango etario',
      dataIndex: 'prioridadRangoEtario',
      width: '15%',
      editable: false,
    },
    {
      title: 'Prioridad sexo',
      dataIndex: 'prioridadSexo',
      width: '15%',
      editable: false,
    },
    {
      title: 'Prioridad expresión',
      dataIndex: 'prioridadExpresion',
      width: '15%',
      editable: false,
    },
    {
      title: 'Valor rango etario',
      dataIndex: 'valorRangoEtario',
      width: '15%',
      editable: false,
    },
    {
      title: 'Valor sexo',
      dataIndex: 'valorSexo',
      width: '15%',
      editable: false,
    },
    
  ];
  // set the edit config for the editable fields
  const mergedColumns = columns.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: record => ({
        record,
        inputType: col.dataIndex === 'prioridad' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  /*
  * End columns of table
  */
  

  return (
      
      <Table
        components={{
          
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
  );
};