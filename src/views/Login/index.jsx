import React from "react";
import { Row, Col, Typography, Radio } from "antd";
import LoginForm from "./components/Login";
import RegisterForm from "./components/Register";

const { Title } = Typography;

export default function Login() {
  const [login, setLogin] = React.useState(true);

  const handleForm = (e) => {
    setLogin(e.target.value);
  };

  return (
    <React.Fragment>
      <Row>
        <Col
          xs={0}
          sm={0}
          md={14}
          lg={14}
          xl={14}
          className="login-img-wrapper text-center"
        >
          <img
            src={require("assets/images/login-logo.png")}
            className="login-logo img-fluid float-left m-3"
            alt="Object Press"
          />
          <div className="login-wrapper">
            <img
              src={require("assets/images/login-zoomed.png")}
              className="login-zoomed img-fluid mx-auto"
              alt="zoomed"
            />
          </div>
        </Col>
        <Col
          xs={24}
          sm={24}
          md={10}
          lg={10}
          xl={10}
          className="login text-center"
        >
          <Row justify="center">
            <Col span={4} className="text-center">
              <img
                src={require("assets/images/login-icon.png")}
                className="login-icon mx-auto my-3"
                alt="Object Press"
              />
            </Col>
          </Row>
          <div className="login-wrapper">
            <Row justify="center">
              <Col span={24} className="login-title text-center my-1">
                <Title level={1}>
                  Sign in to
                  <br />
                  Object Press
                </Title>
              </Col>
            </Row>
            <Row justify="center">
              <Col span={24} className="my-1 text-center">
                <Radio.Group
                  name="radio"
                  defaultValue={login}
                  onChange={handleForm}
                >
                  <Radio value={true} className="mx-3">
                    Login
                  </Radio>
                  <Radio value={false} className="mx-3">
                    Register
                  </Radio>
                </Radio.Group>
              </Col>
            </Row>

            <Row justify="center">
              <Col className="text-left mx-auto">
                {login ? <LoginForm /> : <RegisterForm />}
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
