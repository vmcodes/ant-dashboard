import React from "react";
import { Row, Col, Typography } from "antd";
import {
  BellOutlined,
  MessageOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { SiteVisits, SiteAudience, TotalRevenue, Growth } from "./Charts";
const { Title } = Typography;

export default function Welcome() {
  return (
    <React.Fragment>
      <Row justify="space-around" className="dashboard-content">
        <Col xs={22} sm={22} md={22} lg={22} xl={4}>
          <div
            className="p-3"
            style={{
              minWidth: "300px",
            }}
          >
            <Title level={2}>
              Welcome
              <br />
              Rifqi!
            </Title>
            <Title className="my-3" level={3}>
              You Have:
            </Title>
            <Title className="my-1" level={4}>
              <MessageOutlined className="mr-2" /> 5 Messages
            </Title>{" "}
            <Title className="my-1" level={4}>
              <AuditOutlined className="mr-2" /> 3 Projects
            </Title>
            <Title className="my-1" level={4}>
              <BellOutlined className="mr-2" /> 7 Notifications
            </Title>
          </div>
        </Col>
        <Col xs={22} sm={22} md={22} lg={22} xl={6}>
          <div
            className="p-3"
            style={{
              minWidth: "300px",
            }}
          >
            <Title level={3}>Site Visits</Title>
            <SiteVisits />
          </div>
        </Col>
        <Col xs={22} sm={22} md={22} lg={22} xl={6}>
          <div
            className="p-3"
            style={{
              minWidth: "300px",
            }}
          >
            <Title level={3}>Site Audience</Title>
            <SiteAudience />
          </div>
        </Col>
      </Row>

      <Row justify="space-between">
        <Col xs={24} sm={24} md={24} lg={24} xl={11}>
          <Row justify="space-around" className="dashboard-content p-3 mt-5">
            <Col xs={24} sm={24} md={24} lg={10} xl={11}>
              <Title level={3}>Total Revenue</Title>
              <Title level={1}>$ 2,158</Title>
              <Title level={4}>YTD Revenue</Title>
            </Col>

            <Col xs={24} sm={24} md={24} lg={10} xl={11}>
              <TotalRevenue />
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={11}>
          <Row justify="space-around" className="dashboard-content p-3 mt-5">
            <Col xs={24} sm={24} md={24} lg={10} xl={11}>
              <Title level={3}>Growth</Title>
              <Title level={1}>37 %</Title>
              <Title level={4}>This Year</Title>
            </Col>

            <Col xs={24} sm={24} md={24} lg={10} xl={11}>
              <Growth />
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
