import React from "react";

import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  ContainerOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { MenuItem } from "../../utils/types";
import "./SideBar.scss";
import { NavLink } from "react-router-dom";

const { Sider } = Layout;
const { SubMenu } = Menu;

interface ISideBar {
  menuItem: MenuItem[];
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

const SideBar: React.FC<ISideBar> = ({ menuItem }) => {
  return (
    <Sider width="258px" theme="dark" collapsible>
      <div className="side-bar-logo">
        <NavLink to="/"></NavLink>
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
