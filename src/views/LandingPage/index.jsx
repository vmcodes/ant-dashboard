import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import Pricing from "./components/Pricing";
import Description from "./components/Description";
import Info from "./components/Info";
const { Title } = Typography;

const LandingPage = () => {
  return (
    <React.Fragment>
      <Row className="landing-banner">
        <Col xs={24} sm={24} md={14} lg={14} xl={10}>
          <Row>
            <Col className="float-left mr-auto">
              <img
                src={require("assets/images/login-logo.png")}
                className="login-logo img-fluid m-3"
                alt="Object Press"
              />
            </Col>

            <Col xs={24} sm={24} md={0} lg={0} xl={0}>
              <div className="text-center">
                <Link to="/login">
                  <Button className="landing-signup m-3">Sign up</Button>
                </Link>{" "}
                <Link to="/login">
                  <Button className="landing-login m-3">Login</Button>
                </Link>
              </div>
            </Col>
          </Row>

          <Row justify="center" className="login-wrapper">
            <Col span={12}>
              <Title className="text-light" level={1}>
                Join and Start 30 Days Free Trial Now{" "}
              </Title>
              <Button className="landing-join-now mt-3">Join now</Button>
            </Col>
          </Row>
        </Col>

        <Col xs={0} sm={0} md={10} lg={10} xl={14} className="text-center">
          <div className="float-right ml-auto">
            <Link to="/login">
              <Button className="landing-signup m-3">Sign up</Button>
            </Link>{" "}
            <Link to="/login">
              <Button className="landing-login m-3">Login</Button>
            </Link>
          </div>
          <div className="login-wrapper mt-5">
            <img
              src={require("assets/images/login-zoomed.png")}
              className="login-zoomed img-fluid mx-auto"
              alt="zoomed"
            />
          </div>
        </Col>
      </Row>
      <Pricing />
      <Info />
      <Description />
    </React.Fragment>
  );
};

export default LandingPage;
