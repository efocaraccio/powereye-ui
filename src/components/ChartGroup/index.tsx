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

  const [filtroLinea, setFiltroLinea] = useState({...filtro, producto: 1})

  const [filtroRangoEtario, setFiltroRangoEtario] = useState(filtro);
  const [filtroSexo, setFiltroSexo] = useState(filtro);
  const [filtroBarras, setFiltroBarras] = useState(filtro);

  const [prodRangoEtario, setProdRangoEtario] = useState(null as number);
  const [prodSexo, setProdSexo] = useState(null as number);
  const [sexoBarras, setSexoBarras] = useState('');
  const [rangoEtarioBarras, setRangoEtarioBarras] = useState('');
  const [sexoLinea, setSexoLinea] = useState('');
  const [rangoEtarioLinea, setRangoEtarioLinea] = useState('');

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
    setFiltroBarras({
      ...filtro,
      rango: rangoEtarioBarras,
      sexo: sexoBarras
    })
    setFiltroLinea({
      ...filtro,
      rango: rangoEtarioLinea,
      sexo: sexoLinea
    })
  },[filtro, prodRangoEtario, prodSexo, sexoBarras, rangoEtarioBarras, rangoEtarioLinea, sexoLinea])


  return <div className={'chart-group'}>

    <Card style={{ margin: '20px auto', maxWidth: '1250px' }}>
      <Title level={3}>Impacto por día</Title>
      <div className={'filter-chart-group'}>

          <Select style={{ margin: '20px auto', maxWidth: '400px' }} placeholder="Seleccionar sexo" onChange={(value) => {setSexoLinea(value as any)}}>
           <Option value="">Todos</Option>
            <Option value="M">Masculino</Option>
            <Option value="F">Femenino</Option>
          </Select>


          <Select style={{ margin: '20px auto', maxWidth: '400px' }} placeholder="Seleccionar Rango etario" onChange={(value) => {setRangoEtarioLinea(value as any)}}>
           <Option value="">Todos</Option>
            <Option value="rango0025">Menores a 25 años</Option>
            <Option value="rango2540">De 25 a 40 años</Option>
            <Option value="rango4060">De 40 a 60 años</Option>
            <Option value="rango60up">60 años o más</Option>
          </Select>

      </div>
      <Linea filtro={filtroLinea} />
    </Card>
    <Card style={{ margin: '20px auto', maxWidth: '1250px' }}>
    <Title level={3}>Vistas totales por producto</Title>
      <div className={'filter-chart-group'}>

          <Select style={{ margin: '20px auto', maxWidth: '400px' }} placeholder="Seleccionar sexo" onChange={(value) => {setSexoBarras(value as any)}} >
          <Option value="">Todos</Option>
          <Option value="M">Masculino</Option>
            <Option value="F">Femenino</Option>
          </Select>


          <Select style={{ margin: '20px auto', maxWidth: '400px' }} placeholder="Seleccionar Rango etario" onChange={(value) => {setRangoEtarioBarras(value as any)}} >
          <Option value="">Todos</Option>
          <Option value="rango0025">Menores a 25 años</Option>
            <Option value="rango2540">De 25 a 40 años</Option>
            <Option value="rango4060">De 40 a 60 años</Option>
            <Option value="rango60up">60 años o más</Option>
          </Select>

      </div>
      <Columna filtro={filtroBarras}/>
    </Card>
    <Card className={''} style={{ margin: '20px auto', maxWidth: '1250px' }}>
    <Title level={3}>Vistas por Rango Etario</Title>

      <Select className={'filter-chart-group'} placeholder="Seleccionar producto" onChange={(value) => {setProdRangoEtario(value as any)}} >
        <Option key={999} value={null}>{"Todos los Productos"}</Option>
        { products && products.map( el => <Option key={el.id} value={el.id}>{el.label}</Option> )}
      </Select>

      <Torta type={"RangoEtario"} filtro={filtroRangoEtario} />
    </Card>
    <Card className={''} style={{ margin: '20px auto', maxWidth: '1250px' }}>
    <Title level={3}>Vistas por Sexo</Title>

      <Select className={'filter-chart-group'} placeholder="Seleccionar producto" onChange={(value) => {setProdSexo(value as any)}} >
      <Option key={999} value={null}>{"Todos los Productos"}</Option>
        { products && products.map( el => <Option key={el.id} value={el.id}>{el.label}</Option> )}
      </Select>

      <Torta type={"Sexo"} filtro={filtroSexo}/>
    </Card>
  </div>;
};
