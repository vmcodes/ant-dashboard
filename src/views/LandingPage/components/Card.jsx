import React from "react";
import { Col, Typography } from "antd";

const { Title } = Typography;

const Card = (props) => {
  return (
    <React.Fragment>
      <Col className="m-5 description-card text-center">
        <Title type="secondary" level={4} className="my-5">
          {props.text}
        </Title>
        <img src={props.image} alt={props.text} />
      </Col>
    </React.Fragment>
  );
};

export default Card;
