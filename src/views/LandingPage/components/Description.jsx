import React from "react";
import { Row, Typography } from "antd";
import Card from "./Card";
import Support from "assets/images/support.png";
import Storage from "assets/images/storage.png";
import Security from "assets/images/security.png";
import Speed from "assets/images/speed.png";

const { Title } = Typography;

const Description = () => {
  return (
    <React.Fragment>
      <div className="py-5">
        <div className="text-center">
          <Title type="secondary" level={2}>
            Why Us?
          </Title>
        </div>
        <div className="text-center">
          <Title type="secondary" level={4}>
            Gold plan comes with 30 days Free trial!
          </Title>
        </div>
        <Row justify="center" className="my-5">
          <Card image={Support} text="Full Support" />
          <Card image={Storage} text="Unlimited Storage" />
          <Card image={Security} text="Security Guaranteed" />
          <Card image={Speed} text="Speed Up to 10 Gb/s" />
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Description;
