import React from 'react';
import './App.scss';
import { Layout } from 'antd';
import { TopBar } from '../../components/TopBar/TopBar';
import { Home } from '../Home';

const { Header, Content } = Layout;

const App = () => {
  return (
    <Layout>
      <Header>
        <TopBar />
      </Header>
      <Content className={'content'}>
        <Home/>
      </Content>
    </Layout>
  );
};

export default App;
