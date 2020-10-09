import { Image, Row, Typography } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import AppLogo from "../../assets/images/logoplaceholder.svg";
import "./AppBrand.scss";

interface IAppBrand {
  appNameStyle?: React.CSSProperties;
  appNameLevel?: 5 | 1 | 2 | 3 | 4 | undefined;
  isShownAppName?: boolean;
  logoWidth?: string;
}

const AppBrand: React.FC<IAppBrand> = ({
  appNameStyle,
  isShownAppName = true,
  appNameLevel = 4,
  logoWidth = "32px",
}) => {
  const { t } = useTranslation();

  return (
    <Row className="logo-container" align="middle" justify="center">
      <Image width={logoWidth} src={AppLogo} alt="Sidebar Logo" />
      {isShownAppName && (
        <Typography.Title
          style={appNameStyle}
          className="logo-title"
          level={appNameLevel}
        >
          {t("APP_NAME")}
        </Typography.Title>
      )}
    </Row>
  );
};

export default AppBrand;
