import React, { useState } from 'react';
import './index.scss';
import { Button, Layout, Divider } from 'antd';
import { TopBar } from '../../components/TopBar/TopBar';
import { ConfigNavigator } from '../../components/ConfigNavigator';
import { Showcase } from '../../components/Showcase';

const { Header, Content } = Layout;

const CONFIG_PAGES = {
  PRIORITIES: 'priorities',
  PRODUCTS: 'products',
  SHOWCASE: 'showcase'
}

export type ConfigPages = 'priorities' | 'products' | 'showcase';

export const ConfigPage = () => {

  const [page, setPage] = useState(CONFIG_PAGES.SHOWCASE);

  const changePage = (newPage: ConfigPages) => {
    setPage(newPage);
  }

  const loadPage = () => {
    if(page === CONFIG_PAGES.PRIORITIES)
      return <div></div>;
    if(page === CONFIG_PAGES.PRODUCTS)
      return <div></div>;
    if(page === CONFIG_PAGES.SHOWCASE)
      return <Showcase/>;
    return <div></div>;
  }

  return <Layout>
    <Header>
      <TopBar />
    </Header>
    <Content className={'config-page'}>
      <ConfigNavigator onPageChange={changePage} />
      <Divider />
      { loadPage() }
    </Content>
  </Layout>;
};