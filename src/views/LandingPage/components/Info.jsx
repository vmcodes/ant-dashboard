import React from "react";
import { Row, Col, Typography } from "antd";

const { Title, Text } = Typography;

const Info = () => {
  return (
    <React.Fragment>
      <Row justify="space-around" className="my-5">
        <Col md={4} className="my-5">
          <img
            src={require("assets/images/agency.png")}
            alt="people"
            className="info-image"
          />
        </Col>

        <Col md={6} className="my-5">
          <Title type="secondary" level={2} className="my-3 text-center">
            We are a digital creative agency
          </Title>
          <Text type="secondary" className="my-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            molestie, quam ac tincidunt sollicitudin, leo massa sollicitudin
            eros, et placerat diam eros imperdiet dui. Nunc vestibulum
            ullamcorper odio.
            <br /> <br />
            In porta ex varius at. Sed vitae lorem a magna hendrerit feugiat.
            Proin mollis posuere neque, eu vulputate ante maximus ac. Aliquam ut
            mollis erat. Vestibulum ultricies urna eget euismod varius. Mauris
            elementum congue velit eget egestas.
          </Text>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Info;
