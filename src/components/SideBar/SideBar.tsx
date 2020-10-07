import React from "react";

import SneakerLogo from "../../assets/images/sneakers.svg";
import { Layout, Menu, Row, Space, Typography } from "antd";
import {
  UserOutlined,
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import "./SideBar.scss";

const { Sider } = Layout;
const { SubMenu } = Menu;

const SideBar = () => {
  return (
    <Sider className="my-sider" collapsible>
      <Row align="middle" justify="center">
        <Space>
          <img style={{ width: "64px" }} src={SneakerLogo} alt="App Logo" />
          <Typography.Text style={{ color: "white" }}>
            {"SNEAKER"}
          </Typography.Text>
        </Space>
      </Row>
      <Menu
        style={{ background: "transparent" }}
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
      >
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default SideBar;
