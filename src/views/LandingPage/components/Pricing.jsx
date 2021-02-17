import React from "react";
import { Row, Col, Typography, Button } from "antd";

const { Title } = Typography;

const Pricing = () => {
  return (
    <React.Fragment>
      <Row justify="center" className="mt-5">
        <Col span={18} className="text-center">
          <Title type="secondary" level={2}>
            Find a plan that’s right for you.
          </Title>
          <Title type="secondary" level={4}>
            Easy plan comes with 30 days free trial
          </Title>
        </Col>
      </Row>

      <Row justify="center" className="text-center my-5">
        <Col md={3} className="pricing-block mx-2 my-5">
          <Title type="secondary" level={3} className="my-3">
            Bronze
          </Title>
          <Title type="secondary" level={3} className="my-3">
            $10<small>/Month</small>
          </Title>
          <h5 className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/storage-icon.png")} />{" "}
            Unlimited storage
          </h5>
          <h5 level={5} className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/support-icon.png")} />{" "}
            Full support 3 days
          </h5>
          <h5 level={5} className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/security-icon.png")} />{" "}
            Security guaranteed
          </h5>

          <Button href="/login" className="pricing-button mt-5">
            Get started
          </Button>
        </Col>

        <Col md={3} className="pricing-gold mx-2 mt-3 mb-5">
          <Title type="secondary" level={3} className="my-3">
            Gold
          </Title>
          <Title type="secondary" level={3} className="my-3">
            $30<small>/Month</small>
          </Title>
          <h5 className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/storage-icon.png")} />{" "}
            Unlimited storage
          </h5>
          <h5 level={5} className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/support-icon.png")} />{" "}
            Full support 30 days
          </h5>
          <h5 level={5} className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/security-icon.png")} />{" "}
            Security guaranteed
          </h5>
          <h5 level={5} className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/cloud-icon.png")} />{" "}
            Additional cloud storage
          </h5>
          <h5 level={5} className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/email-icon.png")} />{" "}
            Email support
          </h5>

          <Button href="/login" className="pricing-button mt-5">
            Get started
          </Button>
        </Col>

        <Col md={3} className="pricing-block mx-2 my-5">
          <Title type="secondary" level={3} className="my-3">
            Silver
          </Title>
          <Title type="secondary" level={3} className="my-3">
            $20<small>/Month</small>
          </Title>
          <h5 className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/storage-icon.png")} />{" "}
            Unlimited storage
          </h5>
          <h5 level={5} className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/support-icon.png")} />{" "}
            Full support 14 days
          </h5>
          <h5 level={5} className="pricing-info my-3">
            <img alt="icon" src={require("assets/images/security-icon.png")} />{" "}
            Security guaranteed
          </h5>

          <Button href="/login" className="pricing-button mt-5">
            Get started
          </Button>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Pricing;
