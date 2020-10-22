import React, { useEffect, useState } from 'react';
import { Typography, Button } from 'antd';
import { SortableComponent } from '../SortableComponent';
import './index.scss';
import { RangoEtarioCard } from './RangoEtarioCard';
import { SexoCard } from './SexoCard';
import { PriorityApi } from '../../api/PriorityApi';

const { Title, Text } = Typography

const PRIORIDADES = {
  "HIGH": 0,
  "MEDIUM": 1,
  "MEDIUM_LOW": 2,
  "LOW": 3
}

const RANGOSETARIOS = {
  JOVENES: 0,
  ADULTOS: 1,
  ADULTOS_MAYORES: 2,
  ANCIANOS: 3
}

export const PriorityConfig = () => {
  
  const [configData, setConfigData] = useState([]);
  const [edadConfig, setEdadConfig] = useState(0);
  const [sexoConfig, setSexoConfig] = useState("");
  const [prioridadConfig, setPrioridadConfig] = useState(0);

  const [itemOrdenables, setItemOrdenables] = useState([])

  useEffect(()=>{
    const priorityApi = new PriorityApi()
    priorityApi.getConfig().then((response)=> {
      if(response && response.length > 0) {
        const array = [
          {
            label: "Cantidad de vistas",
            id: PRIORIDADES[response[0].prioridadCantVistas]
          },
          {
            label: "Rango etario",
            id: PRIORIDADES[response[0].prioridadRangoEtario]
          },
          {
            label: "Sexo",
            id: PRIORIDADES[response[0].prioridadSexo]
          },
        ]
        setItemOrdenables(array.sort((a,b) => a.id-b.id))
        setEdadConfig(RANGOSETARIOS[response[0].valorRangoEtario])
        setSexoConfig(response[0].valorSexo)
      }
    })
  },[])


  function guardar(){
    const priorityApi = new PriorityApi()
    const prioridad = {
      prioridadRangoEtario: prioridadConfig["rangoEtario"],
      prioridadSexo: prioridadConfig["prioridadSexo"],
      prioridadCantVistas: prioridadConfig["cantVistas"],
      prioridadExpresion: PRIORIDADES.LOW,
     
      valorSexo: sexoConfig,
      valorRangoEtario: `${edadConfig}`,
      valorExpresion: 0
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

  return <div className={''}>
    <div style={{textAlign: 'center', marginBottom: '25px'}}>
      
      <Title level={3}>Prioridad de vistas</Title>
      <Text>Configure la prioridad a la hora de calcular el impacto de una vista.</Text>
      <br/>
      <Text>A mayor prioridad de una catagoría, mayor impacto tendrá una vista que cumpla con los criterios seleccionados.</Text>
    </div>
    <div className={'priority-content'}>
      <SortableComponent setPrioridadConfig={setPrioridadConfig} items={itemOrdenables} setItemsOrdenables={setItemOrdenables}/>
      <RangoEtarioCard value={edadConfig} onChange={setEdadConfig}/>
      <SexoCard value={sexoConfig} onChange={setSexoConfig}/>
      
    </div>
    <br></br>
    
    <div>
    <Button
        onClick={()=>{guardar()}}
        type="primary"
        style={{
          marginBottom: 16,
          left:"50%",
        }}
      >
        Guardar
    </Button>
    </div>
  </div>
}
