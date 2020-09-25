import React, { useState } from 'react';

import { Layout, Menu, Input, Avatar, Badge } from 'antd';
import {
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  BellOutlined,
  MailOutlined,
} from '@ant-design/icons';

import 'antd/dist/antd.css';
import './AdminPage.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const AdminPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className='layout-page'>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={toggleCollapsed}
        className='sidebar'
      >
        <Menu
          defaultSelectedKeys={['1']}
          mode='inline'
          className='sidebar-menu'
        >
          <Menu.Item key='1' icon={<PieChartOutlined />} className='admin'>
            <span className='title-admin'>Dashboard</span>
          </Menu.Item>
          <Menu.Item key='2' icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
            <Menu.Item key='3'>Tom</Menu.Item>
            <Menu.Item key='4'>Bill</Menu.Item>
            <Menu.Item key='5'>Alex</Menu.Item>
          </SubMenu>
          <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
            <Menu.Item key='6'>Team 1</Menu.Item>
            <Menu.Item key='8'>Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key='9' icon={<FileOutlined />} />
        </Menu>
      </Sider>
      <Layout className='site-layout'>
        <Header className='site-layout-background'>
          <div className='site-layout-left'>
            <Search
              placeholder='Search for...'
              onSearch={(value) => console.log(value)}
              enterButton
              className='input-search'
            />
          </div>
          <div className='site-layout-right'>
            <div className='site-icons'>
              <span>
                <Badge count={1}>
                  <BellOutlined className='site-icons_style' />
                </Badge>
              </span>
              <span>
                <Badge count={1}>
                  <MailOutlined className='site-icons_style' />
                </Badge>
              </span>
            </div>
            <span className='avatar-item'>
              <p className='avatar-name'>Mr.Trung</p>
              <Badge count={1} className='avatar-icon'>
                <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
              </Badge>
            </span>
          </div>
        </Header>
        <Content className='site-content'>
          <div style={{ padding: 24, minHeight: 360 }}>Bill is a cat.</div>
        </Content>
        <Footer className='footer'>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export { AdminPage };
