import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Layout, Menu, Row, Typography } from "antd";
import {
  DashboardOutlined,
  ContainerOutlined,
  CalendarOutlined,
} from "@ant-design/icons";

import { MenuItem } from "../../utils/types";
import "./SideBar.scss";
import AppBrand from "../AppBrand/AppBrand";

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
  const location = useLocation();
  const [isCollapsed, setCollapsed] = useState(false);

  const handleOnCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Sider onCollapse={handleOnCollapse} width="258px" theme="dark" collapsible>
      <div className="side-bar-logo">
        <NavLink to="/">
          <AppBrand isShownAppName={!isCollapsed} />
        </NavLink>
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["/"]}
        selectedKeys={[location.pathname]}
        mode="inline"
      >
        {menuItem.map((item, index) => {
          if (!item.subItem) {
            return (
              <Menu.Item key={item.path} icon={getMenuIconByTitle(item.title)}>
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
                    <Menu.Item key={subItem.path}>
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
