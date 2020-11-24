import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Table, Input, InputNumber, Popconfirm, Form, Button, Space } from 'antd';
import { CreateProductModal } from './CreateProductModal';
import { EditableCell } from './EditableCell';
import { ProductApi } from '../../api/ProductApi';
import { CheckCircleOutlined } from '@ant-design/icons';


        // Reemplazar por use Effect que consulte los productos

export const ProductTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingKey, setEditingKey] = useState('');
  const [modalVisible, setModalVisibility] = useState(false);

  const isEditing = record => record.key === editingKey;

  const productApi = new ProductApi()

  useEffect(()=> {
    productApi.getProducts().then((response)=> {
      setData(response.map(item => {
        return {
          key: item.id,
          nombre: item.nombre,
          prioridad: item.prioridad,
          multimedia: <CheckCircleOutlined style={{color: "green"}} />,
          sector: item.idZonaVidriera,
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

  const handleDelete = key => {
            // HACER API CALL DESDE ACA PARA ELIMINAR PRODUCTO
            const index = data.findIndex(item => key === item.key);
            //console.log(data[index].imagen)
      const newItem = {
        id: key,
        nombre: data[index].nombre,
      }
      productApi.deleteProduct(newItem).then((response)=> {
        setData(data.filter(item => item.key !== key))
      })

  };

  const save = async key => {
    try {
      const row = await form.validateFields();
      const newData = [...data];
      const index = newData.findIndex(item => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        const newItem = {
          id: key,
          nombre: newData[index].nombre,
          prioridad: newData[index].prioridad,
        }
        productApi.editProduct(newItem).then((response)=> {
          setData(newData);
        })

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
      editable: false,
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
    //console.log(values)
    var imgBase64=JSON.parse(localStorage.getItem("imagen"))
    //console.log(JSON.parse(localStorage.getItem("imagen")))
    const prod = {
      nombre: values.nombre,
      prioridad: 0,
      imagen: imgBase64.split(",")[1]
    }
    productApi.createProduct(prod).then( response => {
      if(response !== 0){
        setData([...data, { nombre: prod.nombre, prioridad: prod.prioridad ,key:response}]);
      }
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