import React, { useState } from 'react';
import { Card, Statistic } from 'antd';
import './index.scss';
import { BarChartOutlined } from '@ant-design/icons';

export const IndicatorCard = (props: IndicatorCardProps) => {

  const { initialStat = 0, fetchStat, title, unit } = props;

  //const [stat, setStat] = useState(initialStat);
  //const [loading, setLoading] = useState( initialStat !== 0 ? false : true );


  return <Card className={'indicator-card'} >
    <Statistic
            style={{width: '200px'}}
            className={'stat'}
            title={title}
            value={initialStat.toFixed(0)}
            valueStyle={{ color: '#3f8600' }}
            suffix={unit}
          />
  </Card>;
};

interface IndicatorCardProps {
  title: string;
  initialStat?: number;
  fetchStat?: any;
  unit?: string;
}