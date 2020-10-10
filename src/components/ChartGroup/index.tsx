import React, {useState, useEffect} from 'react';
import { Columna, Torta, Linea } from '../Chart/index';
import { Typography, Card, Form, Select } from 'antd';
import { StatisticsApi } from '../../api/StatisticsApi';
import './index.scss';
import { ProductApi } from '../../api/ProductApi';

const { Option } = Select;

const { Title } = Typography;

export const ChartGroup = (props) => {

  const {onDateChange, filtro} = props;
  const [products, setProducts] = useState(null);

  const [filtroRangoEtario, setFiltroRangoEtario] = useState(filtro);
  const [filtroSexo, setFiltroSexo] = useState(filtro);

  const [prodRangoEtario, setProdRangoEtario] = useState(null as number);
  const [prodSexo, setProdSexo] = useState(null as number);

  useEffect(()=> {
    const productApi = new ProductApi()
    productApi.getProducts().then((response)=> {
      setProducts(response.map(item => {
        return {
          id: item.id,
          label: item.nombre
        }
      }))
    })
  },[])

  useEffect(()=> {
    setFiltroRangoEtario({
      ...filtro,
      producto: prodRangoEtario
    })
    setFiltroSexo({
      ...filtro,
      producto: prodSexo
    })
  },[filtro, prodRangoEtario, prodSexo])


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
      <Select placeholder="Seleccionar producto" onChange={(value) => {setProdRangoEtario(value as any)}} >
        { products && products.map( el => <Option value={el.id}>{el.label}</Option> )}
      </Select>
    </Form.Item>
      <Torta type={"RangoEtario"} filtro={filtroRangoEtario} />
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
      <Select placeholder="Seleccionar producto" onChange={(value) => {setProdSexo(value as any)}} >
        { products && products.map( el => <Option value={el.id}>{el.label}</Option> )}
      </Select>
    </Form.Item>
      <Torta type={"Sexo"} filtro={filtroSexo}/>
    </Card>
  </div>;
};
