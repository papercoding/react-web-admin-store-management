import React from "react";
import { Button, Space, Input } from "antd";

import ContentHeaderBar from "../../components/ContentHeaderBar/ContentHeaderBar";

const ListProductPage = () => {
  return (
    <div>
      <ContentHeaderBar
        headerTitle={"Product Management"}
        renderRightSection={() => {
          return (
            <div style={{ display: "flex" }}>
              <Space>
                <Input.Search placeholder="Search products" />
                <Button type="primary">{"Create Product"}</Button>
              </Space>
            </div>
          );
        }}
      />
    </div>
  );
};

export default ListProductPage;
