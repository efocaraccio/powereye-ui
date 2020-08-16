import React from 'react';
import { Card, Typography } from 'antd';
import './index.scss';
import ChartImage from '../../assets/chart-color-bg.png';
import ConfigImage from '../../assets/config-color-bg.png';

const { Title } = Typography;

export const ButtonCard = (props: ButtonCardProps) => {

  const { title, image } = props;

  return <Card hoverable className={'buttom-card'}>
    <img alt={title} src={ image === 'chart' ? ChartImage : ConfigImage } style={{marginBottom: '20px'}}/>
    <Title style={{fontWeight: 500}} level={4}>{title}</Title>
  </Card>;

};

export interface ButtonCardProps {
  title: string;
  image: string;
}