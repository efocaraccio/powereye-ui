import React, { useState } from 'react';
import { Button, Modal, Form, Input, Radio, Select } from 'antd';

const { Option } = Select;

export const CreateProductModal = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm();
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
            <Option value="alta">Alta</Option>
            <Option value="media">Media</Option>
            <Option value="baja">Baja</Option>
          </Select>
        </Form.Item>
        <Form.Item name="multimedia" label="Multimedia">
          <Input placeholder="miarchivo.mp4"/>
        </Form.Item>
      </Form>
    </Modal>
  );
};