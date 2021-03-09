import React from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import {
  UserOutlined,
  MailOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";

const { Text } = Typography;

const RegisterForm = () => {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  const onFinish = () => {
    let user = { name: name, email: email, password: password };
    console.log(JSON.stringify(user));
  };

  return (
    <Form name="login" className="login-form" onFinish={onFinish}>
      <Form.Item>
        <Text>Name</Text>

        <Input
          placeholder="Name"
          prefix={<UserOutlined className="site-form-item-icon" />}
          onChange={(e) => setName(e.target.value)}
          type="text"
          required
        />
      </Form.Item>

      <Form.Item>
        <Text>Email</Text>

        <Input
          placeholder="Email"
          prefix={<MailOutlined className="site-form-item-icon" />}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          required
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
          required
        />
      </Form.Item>

      <Form.Item>
        <Form.Item valuePropName="checked" noStyle>
          <Checkbox>
            I agree with the{" "}
            <a className="login-form-forgot" href="/">
              Terms of Service
            </a>
          </Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item className="text-center">
        <Button type="primary" href="/dashboard" className="login-form-button">
          Sign up
        </Button>
        <p>OR</p>
        <Button href="/" className="bg-success text-light login-form-button">
          Back To Home
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
