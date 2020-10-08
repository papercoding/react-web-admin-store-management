import React from "react";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";

import MainLayout from "../../components/MainLayout/MainLayout";
import SideBar from "../../components/SideBar/SideBar";
import { MenuItem } from "../../utils/types";
import AppLogo from "../../assets/images/logoplaceholder.svg";

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
  const { t } = useTranslation();
  return (
    <Layout className="admin-layout" style={{ minHeight: "100vh" }}>
      <SideBar
        sidebarLogo={AppLogo}
        sidebarTitle={t("APP_NAME")}
        menuItem={MOCKUP_MENU}
      />
      <MainLayout />
    </Layout>
  );
};

export default AdminPage;
