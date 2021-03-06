import React from 'react';
import { Dropdown, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import './TopBar.scss';
import logo from '../../assets/PowerEyeLogoAndText.png';
import { Link } from 'react-router-dom';

const menu = ( // TODO: dinamizar nombre de usuario
  <Menu>
    <Menu.Item style={{ cursor: 'default' }}>
      nombre de usuario
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item>
      <Link to='/login'>Log out</Link>
    </Menu.Item>
  </Menu>
);

export const TopBar = () => {
  return <div className='topbar'>
    <Link to={'/'}><img src={logo} className='powereye-logo' alt='logo' /></Link>
    <Dropdown placement={'bottomRight'} trigger={['click']} overlay={menu}>
      <UserOutlined className={'user-icon'} />
    </Dropdown>
  </div>;
};