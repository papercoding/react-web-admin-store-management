import { Typography } from "antd";
import React from "react";
import "./ContentHeaderBar.scss";
interface IHeaderBar {
  headerTitle?: string;
  renderRightSection?: () => React.ReactNode;
}

const ContentHeaderBar: React.FC<IHeaderBar> = ({
  headerTitle,
  renderRightSection,
}) => {
  return (
    <div className="content-header-bar">
      <Typography.Title className="title" level={3}>
        {headerTitle}
      </Typography.Title>
      <div style={{ display: "flex" }}>
        {renderRightSection && renderRightSection()}
      </div>
    </div>
  );
};

export default ContentHeaderBar;
