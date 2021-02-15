import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import {
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { fetchToken } from "slices/token";

const { Text } = Typography;

const LoginForm = () => {
  const [email, setEmail] = React.useState("johnd@gmail.com");
  const [password, setPassword] = React.useState("password");

  const onFinish = () => {
    let user = { email: email, password: password };

    fetchToken(user);
  };
  return (
    <Form name="login" className="login-form" onFinish={onFinish}>
      <Form.Item>
        <Text>Email</Text>

        <Input
          placeholder="Email"
          prefix={<MailOutlined className="site-form-item-icon" />}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </Form.Item>
      <Form.Item>
        <Text>Password</Text>

        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          iconRender={(visible) =>
            visible ? (
              <EyeTwoTone className="site-form-item-icon" />
            ) : (
              <EyeInvisibleOutlined className="site-form-item-icon" />
            )
          }
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/">
          Forgot password?
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
