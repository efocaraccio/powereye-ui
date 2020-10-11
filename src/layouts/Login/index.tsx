import React from 'react';
import './index.scss'
import { Form, Input, Checkbox, Button, Card, Typography } from 'antd';
import textLogo from '../../assets/PowerEyeTextLogo.png';
import onlyLogo from '../../assets/PowerEyeOnlyLogo.png';
import { Link } from 'react-router-dom';

const {Text} = Typography;

export const Login = () => {

  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return <div className={'login-page'}>
    <img src={onlyLogo} alt={'Power Eye'} width={'300px'} className={'only-logo'}/>
    <Card className={'form-box'}>
      <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item style={{textAlign: 'center', marginBottom: '25px'}}>
          <img src={textLogo} alt={'Power Eye'} width={'200px'}/>
        </Form.Item>
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item style={{ cursor: 'pointer', textAlign: 'right' }}>
          <Text type={'secondary'}>¿Olvidaste tu contraseña?</Text>
        </Form.Item>
        <Form.Item style={{ textAlign: 'center',marginTop: '25px' }}>
        <Link to='/'>
          <Button style={{width: '100%'}} type="primary" htmlType="submit">
            Iniciar sesión
          </Button>
        </Link>
        </Form.Item>
      </Form>
    </Card>
  </div>
}