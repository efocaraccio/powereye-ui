import React from 'react';
import './index.scss';
import { Button } from 'antd';
import { ConfigPages } from '../../layouts/ConfigPage';

export const ConfigNavigator = (props: ConfigNavigator) => {

  const { onPageChange } = props;

  return <div className={'config-navigator'}>
    <Button onClick={() => {onPageChange('showcase') }}  shape="round" size={'large'}>Vidriera</Button>
    <Button onClick={() => {onPageChange('products') }} shape="round" size={'large'}>Productos</Button>
    <Button onClick={() => {onPageChange('priority') }} shape="round" size={'large'}>Prioridad</Button>
    <Button onClick={() => {onPageChange('sellers') }} shape="round" size={'large'}>Vendedores</Button>
  </div>;
};

interface ConfigNavigator {
  onPageChange: (value: ConfigPages) => void;
}