import React from "react";
import { Row, Col, Typography } from "antd";
import {
  BellOutlined,
  MessageOutlined,
  AuditOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";

const { Title } = Typography;

export default function Rectangles() {
  return (
    <React.Fragment>
      <Row justify="space-between">
        <Col
          className="dashboard-rect-ylo p-3 mt-5"
          xs={24}
          sm={24}
          md={10}
          lg={10}
          xl={5}
        >
          <div className="p-3">
            <Title
              className="text-light text-center d-flex justify-content-center"
              level={2}
            >
              <AuditOutlined className="mr-5" /> 3
            </Title>
            <Title className="text-light text-center" level={3}>
              Projects
            </Title>
          </div>
        </Col>

        <Col
          className="dashboard-rect-grn p-3 mt-5"
          xs={24}
          sm={24}
          md={10}
          lg={10}
          xl={5}
        >
          <div className="p-3">
            <Title
              className="text-light text-center d-flex justify-content-center"
              level={2}
            >
              <BellOutlined className="mr-5" /> 7
            </Title>
            <Title className="text-light text-center" level={3}>
              Notifications
            </Title>
          </div>
        </Col>

        <Col
          className="dashboard-rect-org p-3 mt-5"
          xs={24}
          sm={24}
          md={10}
          lg={10}
          xl={5}
        >
          <div className="p-3">
            <Title
              className="text-light text-center d-flex justify-content-center"
              level={2}
            >
              <FileDoneOutlined className="mr-5" /> 129
            </Title>
            <Title className="text-light text-center" level={3}>
              Posts
            </Title>
          </div>
        </Col>

        <Col
          className="dashboard-rect-blu p-3 mt-5"
          xs={24}
          sm={24}
          md={10}
          lg={10}
          xl={5}
        >
          <div className="p-3">
            <Title
              className="text-light text-center d-flex justify-content-center"
              level={2}
            >
              <MessageOutlined style={{ fontSize: "36px" }} className="mr-5" />{" "}
              5
            </Title>
            <Title className="text-light text-center" level={3}>
              Messages
            </Title>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  );
}
