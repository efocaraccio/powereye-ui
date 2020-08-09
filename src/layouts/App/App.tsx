import React, { useState } from 'react';
import './App.scss';
import { Layout, Card } from 'antd';
import { TopBar } from '../../components/TopBar/TopBar';
import { Home } from '../Home';

export const PAGES = {
  HOME: 'home',
  CHARTS: 'charts',
  CONFIG: 'config'
};


const App = () => {

  const { Header, Content } = Layout;
  const [page, setPage] = useState(PAGES.HOME);

  const changePage = (page: string) => {
    if (Object.values(PAGES).includes(page)) {
      setPage(page);
    }
  };

  const selectPage = () => {
    switch (page) {
      case PAGES.HOME: return <Home  />;
      case PAGES.CHARTS: return <Home  />;
      case PAGES.CONFIG: return <Home  />;
      default: return <Home   />;
    }
  };

  return (
    <Layout>
      <Header>
        <TopBar />
      </Header>
      <Content className={'content'}>
      {
        selectPage()
      }
      </Content>
    </Layout>
  );
};

export default App;
