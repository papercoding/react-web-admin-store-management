import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import Button from '../../components/Button/Button';

import './LoginPage.scss';

type FieldStates = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { Title } = Typography;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // e.preventDefault();
    const { email, password } = fields;

    console.log(`Email: ${email} and password: ${password}`);
  };

  const [fields, setFields] = useState<FieldStates>({
    email: '',
    password: '',
  });

  return (
    <div>
      <Form
        name='normal_login'
        className='login-form bg-white shadow-md rounded px-10 pt-10 pb-20 m-auto mt-20'
        initialValues={{
          remember: true,
        }}
        onFinish={handleSubmit}
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
            onChange={(e) => {
              const email = e.target.value;
              setFields((prevState) => ({ ...prevState, email }));
            }}
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
            onChange={(e) => {
              const password = e.target.value;
              setFields((prevState) => ({ ...prevState, password }));
            }}
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
