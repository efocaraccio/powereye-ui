import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Space } from 'antd';
import { CreateProductModal } from './CreateProductModal';
import { EditableCell } from './EditableCell';
import { ProductApi } from '../../api/ProductApi';

const originData = [];
        // Reemplazar por use Effect que consulte los productos
for (let i = 0; i < 15; i++) {
  originData.push({
    key: i.toString(),
    nombre: `Producto ${i}`,
    prioridad: 1,
    sector: `${i}`,
  });
}

export const ProductTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState(originData);
  const [editingKey, setEditingKey] = useState('');
  const [modalVisible, setModalVisibility] = useState(false);

  const isEditing = record => record.key === editingKey;

  const productApi = new ProductApi()

  /*
  * Functions to interact with a row of the table
  * save/edit/delete/cancel
  */
  const edit = record => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey('');
  };

  const handleDelete = key => {
            // HACER API CALL DESDE ACA PARA ELIMINAR PRODUCTO
    setData(data.filter(item => item.key !== key))
  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setData(newData);
        setEditingKey('');
      } else {
        newData.push(row);
        setData(newData);
        setEditingKey('');
      }
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
  };
  /*
  * END Functions to interact with a row of the table
  */


  /*
  * Columns of table
  */
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      width: '30%',
      editable: true,
    },
    {
      title: 'Prioridad',
      dataIndex: 'prioridad',
      editable: true,
    },
    {
      title: 'Sector',
      dataIndex: 'sector',
      editable: false,
      render: (text,record) => {
        if(!text) {
          return <span style={{color: 'grey', fontStyle: 'italic', fontSize: '10px'}}>Editable desde vidriera</span>
        } else return text
      }
    },
    {
      title: 'Multimedia',
      dataIndex: 'multimedia',
      editable: true,
    },
    {
      title: 'Acciones',
      dataIndex: 'acciones',
      render: (text, record) => {
        const editable = isEditing(record);
        return editable ? (
          <Space size="middle">
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Guardar
            </a>
            <a onClick={cancel}>Cancel</a>
            </Space>
        ) : (
          <Space size="middle">
            <a onClick={() => edit(record)}>
                Editar
            </a>
            <Popconfirm title="Seguro desea eliminar?" cancelText={"Cancelar"} onConfirm={() => handleDelete(record.key)}>
              <a>Eliminar</a>
            </Popconfirm>
            </Space>
        ) ;
      }
    }
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

  const onCreate = values => {
    console.log(values)
    const prod = {
      nombre: values.nombre,
      prioridad: parseInt(values.prioridad)
    }
    productApi.createProduct(prod).then( response => {
      setData([...data, values]);
    }).catch( err => {
      console.log(err);
    } );
    setModalVisibility(false);
  };

  return (
    <Form form={form} component={false}>
      <Button
        onClick={()=>{setModalVisibility(true)}}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Agregar producto
      </Button>
      <CreateProductModal
        visible={modalVisible}
        onCreate={onCreate}
        onCancel={() => {
          setModalVisibility(false);
        }}
      />
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
        }}
      />
    </Form>
  );
};