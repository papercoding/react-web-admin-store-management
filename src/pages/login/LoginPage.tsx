import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useTranslation } from "react-i18next";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Checkbox, Form, Input, Button, Row, Col, message } from "antd";

import { login } from "../../services/users/users";
import AppBrand from "../../components/AppBrand/AppBrand";
import "./LoginPage.scss";
import { updateToken } from "../../features/AppConfigs/AppConfigsSlice";

const LoginPage = () => {
  const { t } = useTranslation();
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleOnFinish = async (values: any) => {
    setLoading(true);
    try {
      const { username, password } = values;
      await login(username, password);
      message.success(t("LOGIN_SUCCESS_MSG"));
      dispatch(updateToken("fake_token"));
    } catch {
      message.error(t("LOGIN_FAIL_MSG"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row className="login-content" justify="center" align="middle">
      <Col
        xs={{ span: 18 }}
        md={{ span: 8 }}
        xl={{ span: 6 }}
        xxl={{ span: 4 }}
      >
        <AppBrand
          appNameStyle={{ color: "black" }}
          appNameLevel={2}
          logoWidth="48px"
        />
        <Form
          className="login-form"
          name="basic"
          initialValues={{ remember: true }}
          onFinish={handleOnFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input
              size="large"
              placeholder={t("INPUT_USER_NAME_PH")}
              prefix={<UserOutlined />}
              disabled={isLoading}
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
              disabled={isLoading}
            />
          </Form.Item>
          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>{t("CHECKBOX_LABEL_REMEMBER_ME")}</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              loading={isLoading}
              type="primary"
              htmlType="submit"
              block
              size="large"
            >
              {t("LOGIN")}
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default LoginPage;
