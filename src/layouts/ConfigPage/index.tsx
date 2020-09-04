import React, { useState } from 'react';
import './index.scss';
import { Button, Layout, Divider } from 'antd';
import { TopBar } from '../../components/TopBar/TopBar';
import { ConfigNavigator } from '../../components/ConfigNavigator';
import { Showcase } from '../../components/Showcase';
import { ScreenDisplay } from '../../components/ScreenDisplay';
import { ProductDisplay } from '../../components/ProductDisplay';

const { Header, Content } = Layout;

const CONFIG_PAGES = {
  SCREEN: 'screen',
  PRODUCTS: 'products',
  SHOWCASE: 'showcase'
}

export type ConfigPages = 'screen' | 'products' | 'showcase';

export const ConfigPage = () => {

  const [page, setPage] = useState(CONFIG_PAGES.SHOWCASE);

  const changePage = (newPage: ConfigPages) => {
    setPage(newPage);
  }

  const loadPage = () => {
    if(page === CONFIG_PAGES.SCREEN)
      return <ScreenDisplay/>;
    if(page === CONFIG_PAGES.PRODUCTS)
      return <ProductDisplay/>;
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