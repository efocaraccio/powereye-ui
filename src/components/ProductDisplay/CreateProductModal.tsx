import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;

export const CreateProductModal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const [fileList, updateFileList] = useState([]);
  function getBase64(file2, cb) {debugger;
    let reader = new FileReader();
    reader.readAsDataURL(file2);
    reader.onload = function () {
      console.log(reader.result)  
      var img = JSON.stringify(reader.result)
      localStorage.setItem("imagen",img)
      cb(reader.result)
        
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
  }
  const props = {
    fileList,
    beforeUpload: file => {
      if (file.type !== 'image/png') {
        
      }
      let idCardBase64 = '';
      getBase64(file, (result) => {
          idCardBase64 = result;
      });
      
      return file.type === 'image/png' || file.type === 'image/jpg' || file.type === 'image/jpeg';
    },
    
   
    
  };
  return (
    <Modal
      visible={visible}
      title="Crear nuevo producto"
      okText="Crear"
      cancelText="Cancelar"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
          name="nombre"
          label="Nombre"
          rules={[
            {
              required: true,
              message: 'Ingrese nombre del producto',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="prioridad"
          label="Prioridad"
          rules={[
            {
              required: true,
              message: 'Seleccione prioridad',
            },
          ]}>
          <Select placeholder="Seleccione prioridad">
            <Option value="3">MEDIUM</Option>
            <Option value="2">MEDIUM_LOW</Option>
            <Option value="1">LOW</Option>
          </Select>
        </Form.Item>
        <Form.Item name="imagen"
          label="Imagen"
          rules={[
            {
              required: true,
            },
          ]}>
          <Upload {...props}>
            <Button icon={<UploadOutlined />}>Seleccionar imagen</Button>
          </Upload>
        </Form.Item>
      </Form>
    </Modal>
  );
};
