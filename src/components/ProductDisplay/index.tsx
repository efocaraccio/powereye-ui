import React from 'react';
import { Typography } from 'antd';
import { ProductTable } from './ProductTable';


const {Title,Text} = Typography;

export const ProductDisplay = () => {

  return <div className={'showcase'}>
    <div style={{textAlign: 'center', marginBottom: '25px'}}>
      <Title level={3}>Productos</Title>
      <Text>Edita y agrega nuevos productos para luego posicionarlos en vidriera.</Text>
    </div>
    <div>
      <ProductTable/>
    </div>
  </div>
}