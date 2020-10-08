import React from "react";

import { Layout } from "antd";

import MainLayout from "../../components/MainLayout/MainLayout";
import SideBar from "../../components/SideBar/SideBar";
import { MenuItem } from "../../utils/types";

const MOCKUP_MENU: MenuItem[] = [
  {
    id: "db001",
    title: "Dashboard",
    path: "/",
  },
  {
    id: "ivt002",
    title: "Inventory Management",
    path: "",
    subItem: [
      {
        id: "pdm001",
        title: "Product Management",
        path: "/product-management",
      },
      {
        id: "bdm002",
        title: "Branding Management",
        path: "/branding-management",
      },
    ],
  },
  {
    id: "cp003",
    title: "Campaign Management",
    path: "/campaign-management",
  },
];

const AdminPage = () => {
  return (
    <Layout className="admin-layout" style={{ minHeight: "100vh" }}>
      <SideBar menuItem={MOCKUP_MENU} />
      <MainLayout />
    </Layout>
  );
};

export default AdminPage;
