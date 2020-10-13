import React, { useEffect, useState } from 'react';
import './index.scss';
import { Row, Col, Card, Button, Typography, Spin } from 'antd';
import { ShowcaseSector } from './ShowcaseSector';
import { ProductApi } from '../../api/ProductApi';
import { CheckCircleOutlined } from '@ant-design/icons';


const options = [  
  { value: 1, label: 'camara' },
  { value: 2, label: 'remera' },
  { value: 3, label: 'guante' },
  { value: 4, label: 'bufanda' },

]

const {Title,Text} = Typography;
const productApi = new ProductApi()

export const Showcase = (props) => {

  const [products, setProducts] = useState([]);
  const [syncing , setSyncing] = useState(false);

  useEffect(()=> {
    productApi.getProducts().then((response)=> {
      setProducts(response.map(item => {
        return {
          id: item.id,
          label: item.nombre,
          idZonaVidriera: item.idZonaVidriera
        }
      }))
    })
  },[])

  const onMappingChange = (id, idZona) => {
    setSyncing(true);
    productApi.asingProductToShowcase({
      id: id,
      idZonaVidriera: idZona
    })
    .then( result => {      
      products && products.filter( prod => prod.idZonaVidriera === idZona)
        .forEach( prod => productApi.desasignarDeVidriera({id: prod.id, idZonaVidriera: prod.idZonaVidriera}) )
      
      const newProducts = products && products.map( prod => {
        if(prod.idZonaVidriera === idZona && prod.id !== id) {
          prod.idZonaVidriera = null
        }
        if(prod.id === id) {
          prod.idZonaVidriera = idZona;
        }
        return prod;
      });
      setProducts(newProducts)
    })
    .finally( () => setTimeout( () => setSyncing(false), 1000) )
  };

  const cuadrantes = 9

  const rows = [];
  for (let i = 0; i < cuadrantes / 3; i++) {
    rows.push(
      <Row gutter={[16, 16]}>
        {[1, 2, 3].map((value: undefined, index) => {
          return <Col xs={24} sm={8} md={8} lg={8} xl={8}>
            <ShowcaseSector options={products} index={(i * 3) + (index + 1)} onProductChange={onMappingChange} />
          </Col>
        })}
      </Row>
    )
  }

  return <div className={'showcase'}>
    <div style={{textAlign: 'center', marginBottom: '25px'}}>
      <Title level={3}>Mapeo de vidriera</Title>
      <Text>Elige un producto por cada sector de tu vidriera según se encuentren dispuestos en tu vidriera real.</Text>
    </div>
    {rows}
    <div style={{width: '250px', margin: 'auto', marginTop: '25px'}}>
      {/*<Button block type="primary">Guardar</Button>*/}
      { syncing ? 
          <div className={'sync-state'}><Spin className={'spin-icon'}/><Text>Syncing</Text></div> : 
          <div className={'sync-state'}><CheckCircleOutlined className={'success-icon'} /><Text>Synced!</Text></div>}
    </div>
  </div>
};