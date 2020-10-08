import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Row, Typography } from "antd";
import {
  DashboardOutlined,
  ContainerOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { MenuItem } from "../../utils/types";
import "./SideBar.scss";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface ISideBar {
  menuItem: MenuItem[];
  sidebarTitle?: string;
  sidebarLogo?: string;
}

const getMenuIconByTitle = (title: string) => {
  switch (title) {
    case "Dashboard":
      return <DashboardOutlined />;
    case "Inventory Management":
      return <ContainerOutlined />;
    case "Campaign Management":
      return <CalendarOutlined />;
  }
};

const SideBar: React.FC<ISideBar> = ({
  sidebarTitle,
  sidebarLogo,
  menuItem,
}) => {
  return (
    <Sider width="258px" theme="dark" collapsible>
      <div className="side-bar-logo">
        <NavLink to="/">
          <Row className="logo-container" align="middle" justify="center">
            <img width="32" src={sidebarLogo} alt="Sidebar Logo" />
            <Typography.Title className="logo-title" level={4}>
              {sidebarTitle}
            </Typography.Title>
          </Row>
        </NavLink>
      </div>
      <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
        {menuItem.map((item, index) => {
          if (!item.subItem) {
            return (
              <Menu.Item
                key={`${item.title}-${index}`}
                icon={getMenuIconByTitle(item.title)}
              >
                <NavLink to={item.path}>{item.title}</NavLink>
              </Menu.Item>
            );
          } else {
            return (
              <SubMenu
                key={`${item.title}-${index}`}
                icon={getMenuIconByTitle(item.title)}
                title={item.title}
              >
                {item.subItem.map((subItem, index) => {
                  return (
                    <Menu.Item key={`${subItem.title}-${index}`}>
                      <NavLink to={subItem.path}>{subItem.title}</NavLink>
                    </Menu.Item>
                  );
                })}
              </SubMenu>
            );
          }
        })}
      </Menu>
    </Sider>
  );
};

export default SideBar;
