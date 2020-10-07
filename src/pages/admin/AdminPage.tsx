import React from "react";

import { Layout } from "antd";

import MainLayout from "../../components/MainLayout/MainLayout";
import SideBar from "../../components/SideBar/SideBar";
import "./AdminPage.scss";

const AdminPage = () => {
  return (
    <Layout className="admin-layout" style={{ minHeight: "100vh" }}>
      <SideBar />
      <MainLayout />
    </Layout>
  );
};

export default AdminPage;
