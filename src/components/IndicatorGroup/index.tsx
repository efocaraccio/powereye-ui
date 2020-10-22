import React, { useState, useEffect} from 'react';
import { Space, DatePicker, Typography } from 'antd';
import './index.scss';
import { IndicatorCard } from '../IndicatorCard';
import { StatisticsApi } from '../../api/StatisticsApi';
import moment from 'moment';
import { ButtonCard } from '../ButtonCard';

const { RangePicker } = DatePicker;
const { Text, Title } = Typography;



export const IndicatorGroup = (props) => {

  const {fechaInicial, dateFormat, onDateChange, filtro} = props;

  const [promedio, setPromedio] = useState(0);
  const [ingresaron, setIngresaron] = useState(0);
  const [detuvieron, setDetuvieron] = useState(0);

  console.log(RangePicker.toString)


  useEffect( () => {
    const statisticsApi = new StatisticsApi()

    statisticsApi.getPromedioVistasDiarias(filtro).then( response => {
      if(response !== null){
        setPromedio(response)
      }
    }).catch( err => {
      console.log(err);
      setPromedio(0)
    } );

    statisticsApi.getPersonasQueIngresaron(filtro).then( response => {
      if(response !== null  && Number.isInteger(response)){
        setIngresaron(response)
      }
    }).catch( err => {
      console.log(err);
      setIngresaron(0)
    } );

    statisticsApi.getPersonasDetuvieron(filtro).then( response => {
      if(response !== null && Number.isInteger(response)){
        setDetuvieron(response)
      }
    }).catch( err => {
      console.log(err);
      setDetuvieron(0)
    } );
  }, [filtro] )


  return <div className={'indicator-group'}>
    <Title>Estadísticas</Title>
    <Space>
      <Text strong>Seleccione un rango de fecha</Text>
      <RangePicker  defaultValue={[moment(fechaInicial.fechaInicio, dateFormat), moment(fechaInicial.fechaFin, dateFormat)]}
                    format={dateFormat}
                    onChange={onDateChange} />
    </Space>
    <div className={'indicator-row'}>
      <IndicatorCard title={'Promedio de atención diario'} initialStat={promedio} />
      <IndicatorCard title={'Personas que pasaron caminando'} initialStat={detuvieron} />
      <IndicatorCard title={'Personas que ingresaron'} initialStat={ingresaron} />
    </div>


  </div>;

};
