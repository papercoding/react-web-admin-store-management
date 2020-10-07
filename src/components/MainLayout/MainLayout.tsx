import React from "react";

import { Layout, Breadcrumb, Row, Avatar, Tabs, Space, Button } from "antd";
import {
  UserOutlined,
  BellOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

import PopoverButton from "../PopoverButton/PopoverButton";
import "./MainLayout.scss";
import Text from "antd/lib/typography/Text";

const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

const MainLayout = () => {
  return (
    <Layout className="site-layout">
      <Header className="site-layout-background">
        <Row justify="end" align="middle">
          <Space>
            <PopoverButton
              popoverContent={
                <Tabs defaultActiveKey="1">
                  <TabPane tab="Notification (4)" key="1">
                    Content of Tab Pane 1
                  </TabPane>
                  <TabPane tab="News (3)" key="2">
                    Content of Tab Pane 2
                  </TabPane>
                  <TabPane tab="To do (4)" key="3">
                    Content of Tab Pane 3
                  </TabPane>
                </Tabs>
              }
              badgeCount={11}
              showBadge
            >
              <BellOutlined style={{ fontSize: "16px" }} />
            </PopoverButton>
            <PopoverButton
              placement="bottom"
              popoverContent={
                <div>
                  <Button icon={<UserOutlined />} type="text">
                    Profile
                  </Button>
                  <br />
                  <Button icon={<SettingOutlined />} type="text">
                    Settings
                  </Button>
                  <br />
                  <Button icon={<LogoutOutlined />} type="text">
                    Sign Out
                  </Button>
                  <br />
                </div>
              }
            >
              <Space>
                <Avatar size="small" />
                <Text>{"John Doe"}</Text>
              </Space>
            </PopoverButton>
          </Space>
        </Row>
      </Header>
      <Content style={{ margin: "0 16px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          Bill is a cat.
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default MainLayout;
