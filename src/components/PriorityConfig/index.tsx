import React from 'react';
import { Typography } from 'antd';
import { SortableComponent } from '../SortableComponent';
import './index.scss';
import { RangoEtarioCard } from './RangoEtarioCard';
import { SexoCard } from './SexoCard';

const { Title, Text } = Typography

export const PriorityConfig = () => {

  return <div className={''}>
    <div style={{textAlign: 'center', marginBottom: '25px'}}>
      <Title level={3}>Prioridad de vistas</Title>
      <Text>Configure la prioridad a la hora de calcular el impacto de una vista.</Text>
      <br/>
      <Text>A mayor prioridad de una catagoría, mayor impacto tendrá una vista que cumpla con los criterios seleccionados.</Text>
    </div>
    <div className={'priority-content'}>
      <SortableComponent/>
      <RangoEtarioCard/>
      <SexoCard/>
    </div>
  </div>
}
