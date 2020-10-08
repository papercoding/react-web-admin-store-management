import React from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Button, Row, Col } from "antd";
import { useTranslation } from "react-i18next";
import AppBrand from "../../components/AppBrand/AppBrand";
import "./LoginPage.scss";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <Row className="login-content" justify="center" align="middle">
      <Col span={8}>
        <AppBrand
          appNameStyle={{ color: "black" }}
          appNameLevel={3}
          logoWidth="48px"
        />
        <Form
          className="login-form"
          name="basic"
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              size="large"
              placeholder={t("INPUT_USER_NAME_PH")}
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              size="large"
              placeholder={t("INPUT_PASSWORD_PH")}
              prefix={<LockOutlined />}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block size="large">
              {t("LOGIN")}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
