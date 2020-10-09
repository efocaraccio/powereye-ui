import React, {useState, useEffect} from 'react';
import { Columna, Torta, Linea } from '../Chart/index';
import { Typography, Card, Form, Select } from 'antd';
import { StatisticsApi } from '../../api/StatisticsApi';
import './index.scss';

const { Option } = Select;

const { Title } = Typography;

export const ChartGroup = (props) => {

  const {onDateChange, filtro} = props;

  return <div className={'chart-group'}>

    <Card style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Title level={3}>Impacto por día</Title>
      <div className={'filter-chart-group'}>
        <Form.Item
          name="filtro1"
          label="Sexo"
          style={{ margin: '20px auto', maxWidth: '400px' }}
          rules={[
            {
              message: 'Seleccionar sexo',
            },
          ]}>
          <Select placeholder="Seleccionar sexo">
            <Option value="2">Masculino</Option>
            <Option value="1">Femenino</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="filtro2"
          label="Rango Etario"
          style={{ margin: '20px auto', maxWidth: '400px' }}
          rules={[
            {
              message: 'Seleccionar Rango etario',
            },
          ]}>
          <Select placeholder="Seleccionar Rango etario">
            <Option value="4">Menores a 25 años</Option>
            <Option value="3">De 25 a 40 años</Option>
            <Option value="2">De 40 a 60 años</Option>
            <Option value="1">60 años o más</Option>
          </Select>
        </Form.Item>
      </div>
      <Linea  />
    </Card>
    <Card style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Columna title={'Vistas totales por producto'} />
    </Card>
    <Card className={''} style={{ margin: '20px auto', maxWidth: '1250px' }}>
    <Title level={3}>Vistas por Rango Etario</Title>
    <Form.Item
    className={'filter-chart-group'}
      name="filtro2"
      label="Producto"
      style={{ margin: '20px auto', maxWidth: '400px' }}
      rules={[
        {
          message: 'Seleccionar producto',
        },
      ]}>
      <Select placeholder="Seleccionar producto">
        <Option value="3">Prod3</Option>
        <Option value="2">Prod2</Option>
        <Option value="1">Prod1</Option>
      </Select>
    </Form.Item>
      <Torta type={"RangoEtario"} filtro={filtro} />
    </Card>
    <Card className={''} style={{ margin: '20px auto', maxWidth: '1250px' }}>
    <Title level={3}>Vistas por Sexo</Title>
    <Form.Item
    className={'filter-chart-group'}
      name="filtro2"
      label="Producto"
      style={{ margin: '20px auto', maxWidth: '400px' }}
      rules={[
        {
          message: 'Seleccionar producto',
        },
      ]}>
      <Select placeholder="Seleccionar producto">
        <Option value="3">Prod3</Option>
        <Option value="2">Prod2</Option>
        <Option value="1">Prod1</Option>
      </Select>
    </Form.Item>
      <Torta type={"Sexo"} filtro={filtro}/>
    </Card>
  </div>;

  /*return <div className={'chart-group'}>
    <Form.Item
          name="filtro1"
          label="Sexo"
          style={{ margin: '20px auto', maxWidth: '400px' }}
          rules={[
            {
              message: 'Seleccionar sexo',
            },
          ]}>
          <Select placeholder="Seleccionar sexo">
            <Option value="2">Masculino</Option>
            <Option value="1">Femenino</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="filtro2"
          label="Rango Etario"
          style={{ margin: '20px auto', maxWidth: '400px' }}
          rules={[
            {
              message: 'Seleccionar Rango etario',
            },
          ]}>
          <Select placeholder="Seleccionar Rango etario">
            <Option value="4">Menores a 25 años</Option>
            <Option value="3">De 25 a 40 años</Option>
            <Option value="2">De 40 a 60 años</Option>
            <Option value="1">60 años o más</Option>
          </Select>
        </Form.Item>
    <Card style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Linea title={'Impacto por día'} />
    </Card>
    <Card style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Columna title={'Vistas totales por producto'} />
    </Card>
    <Form.Item
          name="filtro2"
          label="Producto"
          style={{ margin: '20px auto', maxWidth: '400px' }}
          rules={[
            {
              message: 'Seleccionar producto',
            },
          ]}>
          <Select placeholder="Seleccionar producto">
            <Option value="3">Prod3</Option>
            <Option value="2">Prod2</Option>
            <Option value="1">Prod1</Option>
          </Select>
        </Form.Item>
    <Card className={''}  style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Torta type={"RangoEtario"} filtro={filtro} title={'Vistas por Rango Etario'} />
    </Card>
    <Card className={''} style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Torta type={"Sexo"} filtro={filtro} title={'Vistas por Sexo'}/>
    </Card>
  </div>;*/
};