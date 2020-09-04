import React from 'react';
import './index.scss';
import { Button } from 'antd';
import { ConfigPages } from '../../layouts/ConfigPage';

export const ConfigNavigator = (props: ConfigNavigator) => {

  const { onPageChange } = props;

  return <div className={'config-navigator'}>
    <Button onClick={() => {onPageChange('showcase') }}  shape="round" size={'large'}>Vidriera</Button>
    <Button onClick={() => {onPageChange('products') }} shape="round" size={'large'}>Productos</Button>
    <Button onClick={() => {onPageChange('screen') }} shape="round" size={'large'}>Prioridad</Button>
  </div>;
};

interface ConfigNavigator {
  onPageChange: (value: ConfigPages) => void;
}