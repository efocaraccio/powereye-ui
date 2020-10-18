import React, { useEffect, useState } from 'react';
import './index.scss';
import { Column } from '@ant-design/charts';
import { StatisticsApi } from '../../api/StatisticsApi';
import { ProductApi } from '../../api/ProductApi';

const Columna = (props) => {

  const { type, description, filtro } = props;
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(null);

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
  
  useEffect(() => {
    const statisticsApi = new StatisticsApi()
    console.log("filtro", filtro)
      statisticsApi.getBarrasProductos(filtro).then( response => {
        if(response !== null){
        setData(response.map(item => {
          return {
            label: products.find(element => element.id === item.idProducto).label,
            value: item.vistas
          }
        }))
      }
      }).catch( err => {
        console.log(err);
      } );
  }, [filtro])

  const config = {
    className: 'chart',
    description: {
      visible: !!description ? true : false,
      text: description,
    },
    data,
    forceFit: true,
    padding: 'auto',
    xField: 'label',
    yField: 'value',
    yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
    label: {
      visible: true,
      position: 'middle',
    },
    meta: {
      label: {  alias: 'Productos' },
      value: { alias: 'Vistas' },
    },
    responsive: true,
  };

  return <Column {...config}/>;
};


export default Columna;