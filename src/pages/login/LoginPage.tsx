import React from 'react';
import Button from '../../components/Button/Button';
import { Form, Input, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import 'antd/dist/antd.css';

import './LoginPage.scss';

const LoginPage = () => {
  const { Title } = Typography;
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <Form
        name='normal_login'
        className='login-form bg-white shadow-md rounded px-10 pt-10 pb-20 m-auto mt-20'
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Title level={2}>Sign in</Title>
        <Form.Item
          name='username'
          rules={[
            {
              required: true,
              message: 'Please input your Email!',
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className='site-form-item-icon' />}
            placeholder='Email'
            bordered={false}
            className='inputField emailInput'
          />
        </Form.Item>
        <Form.Item
          name='password'
          rules={[
            {
              required: true,
              message: 'Please input your Password!',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className='site-form-item-icon' />}
            type='password'
            placeholder='Password'
            bordered={false}
            className='inputField passwordInput'
          />
        </Form.Item>
        <Form.Item>
          <a className='login-form-forgot' href='#forgot'>
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <div className='btnLogin'>
            <Button type='submit' btnName='Signin' />
          </div>
        </Form.Item>
      </Form>
      <div className='mt-5'>
        <Title level={5} type='secondary'>
          Not a member
        </Title>

        <Title level={5} className='signupLink'>
          <Link to={`/signup`}>Sign up</Link>
        </Title>
      </div>
    </div>
  );
};

export default LoginPage;
