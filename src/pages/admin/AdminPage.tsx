import React from "react";
import { Switch, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Layout } from "antd";

import MainLayout from "../../components/MainLayout/MainLayout";
import SideBar from "../../components/SideBar/SideBar";
import { MenuItem } from "../../utils/types";
import AppLogo from "../../assets/images/logoplaceholder.svg";
import { ROUTES } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { updateToken } from "../../features/AppConfigs/AppConfigsSlice";
import ListProductPage from "../listProduct/ListProductPage";

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

const getComponentByPath = (path: string) => {
  switch (path) {
    case ROUTES.PRODUCT_MANAGEMENT:
      return <ListProductPage />;
    case ROUTES.BRANDING_MANAGEMENT:
      return <div>Branding Management</div>;
    case ROUTES.CAMPAIGN_MANAGEMENT:
      return <div>Campaign Management</div>;
    default:
      return <div>Dash Board</div>;
  }
};

const AdminPage = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleOnSignOutClick = () => {
    dispatch(updateToken(""));
    localStorage.setItem("token", "");
  };

  return (
    <Layout className="admin-layout" style={{ minHeight: "100vh" }}>
      <SideBar
        sidebarLogo={AppLogo}
        sidebarTitle={t("APP_NAME")}
        menuItem={MOCKUP_MENU}
      />
      <MainLayout onSignOutClick={handleOnSignOutClick}>
        <Switch>
          {MOCKUP_MENU.map((item) => {
            if (!item.subItem) {
              return (
                <Route
                  exact
                  path={item.path}
                  component={() => getComponentByPath(item.path)}
                />
              );
            } else {
              return item.subItem.map((subItem) => {
                return (
                  <Route
                    exact
                    path={subItem.path}
                    component={() => getComponentByPath(subItem.path)}
                  />
                );
              });
            }
          }).flat()}
        </Switch>
      </MainLayout>
    </Layout>
  );
};

export default AdminPage;
