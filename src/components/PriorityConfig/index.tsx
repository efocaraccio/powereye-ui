import React from 'react';
import { Typography, Button } from 'antd';
import { SortableComponent } from '../SortableComponent';
import './index.scss';
import { RangoEtarioCard } from './RangoEtarioCard';
import { SexoCard } from './SexoCard';
import { PriorityApi } from '../../api/PriorityApi';
import { ConfigTable } from './ConfigTable';

const { Title, Text } = Typography

export const PriorityConfig = () => {
  const priorityApi = new PriorityApi()
  return <div className={''}>
    <div style={{textAlign: 'center', marginBottom: '25px'}}>
      <ConfigTable></ConfigTable>
      <Title level={3}>Prioridad de vistas</Title>
      <Text>Configure la prioridad a la hora de calcular el impacto de una vista.</Text>
      <br/>
      <Text>A mayor prioridad de una catagoría, mayor impacto tendrá una vista que cumpla con los criterios seleccionados.</Text>
    </div>
    <div className={'priority-content'}>
      <SortableComponent/>
      <RangoEtarioCard/>
      <SexoCard/>
      <Button
        onClick={()=>{guardar()}}
        type="primary"
        style={{
          marginBottom: 16,
        }}
      >
        Guardar
      </Button>
    </div>
  </div>
}

function guardar(){
  var imgBase64=JSON.parse(localStorage.getItem("valorSexo"))
  debugger
  const priorityApi = new PriorityApi()
  //console.log(JSON.parse(localStorage.getItem("imagen")))
  const prioridad = {
    prioridadRangoEtario: JSON.parse(localStorage.getItem("prioridadRangoEtario")),

    prioridadSexo: JSON.parse(localStorage.getItem("prioridadSexo")),
    prioridadCantVistas: JSON.parse(localStorage.getItem("prioridadCantVistas")),
    prioridadExpresion: JSON.parse(localStorage.getItem("prioridadExpresion")),
    valorSexo:JSON.parse(localStorage.getItem("valorSexo")),
  
    valorRangoEtario:JSON.parse(localStorage.getItem("valorRangoEtario")),
  
    valorExpresion:0
  }
  console.log(prioridad)
  priorityApi.postPriority(prioridad).then( response => {
    /*if(response !== 0){
      setData([...data, { nombre: prod.nombre, prioridad: prod.prioridad ,key:response}]);
    }*/
  }).catch( err => {
    console.log(err);
  } );
}