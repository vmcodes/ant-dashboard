import React from "react";
import { Row, Col, Typography, Timeline } from "antd";
import { ClockCircleOutlined, CheckCircleOutlined } from "@ant-design/icons";
const { Title } = Typography;

export default function TimeLine() {
  return (
    <React.Fragment>
      <Row className="dashboard-content snapshots">
        <Col span={24} className="snapshots-header snapshots-pd">
          <Row justify="space-between">
            <Col sm={24} md={24} lg={12}>
              <Row align="middle">
                <Col className="snapshots-header-title">
                  <Title level={3} style={{ marginRight: "12px" }}>
                    Time Line
                  </Title>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>

        <Col span={24} className="snapshots-pd">
          <Row align="left">
            <Col span={6}>
              <Title level={4} type="secondary" className="my-5">
                Make a Website UI Design
              </Title>

              <Timeline>
                <Timeline.Item
                  className="my-3"
                  dot={<CheckCircleOutlined style={{ fontSize: "16px" }} />}
                >
                  Looking for solutions to optimize the UI on the website
                  <br />[ 27 Oct 2020 ]{" "}
                </Timeline.Item>
                <Timeline.Item className="my-3">
                  Create UX wireframes for website platforms
                  <br />[ 28 Oct 2020 ]{" "}
                </Timeline.Item>
                <Timeline.Item className="my-3">
                  Authoritatively leverage other's user friendly architectures
                  and e-business value. Seamlessly conceptualize compelling
                  solutions whereas front-end technologies.
                </Timeline.Item>
                <Timeline.Item className="my-3">
                  Authoritatively leverage other's user friendly architectures
                  and e-business value. Seamlessly conceptualize compelling
                  solutions whereas front-end technologies.{" "}
                </Timeline.Item>
                <Timeline.Item
                  className="my-3"
                  dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                >
                  Finish project make Website UI Design
                </Timeline.Item>
              </Timeline>
            </Col>
          </Row>

          <Row align="left">
            <Col span={6}>
              <Title level={4} type="secondary" className="my-5">
                Make a Mobile App UI Design{" "}
              </Title>

              <Timeline>
                <Timeline.Item
                  className="my-3"
                  dot={<CheckCircleOutlined style={{ fontSize: "16px" }} />}
                >
                  Looking for solutions to optimize the UI on the website
                  <br />[ 27 Oct 2020 ]
                </Timeline.Item>
                <Timeline.Item className="my-3">
                  Create UX wireframes for website platforms
                  <br />[ 28 Oct 2020 ]
                </Timeline.Item>
                <Timeline.Item className="my-3">
                  Authoritatively leverage other's user friendly architectures
                  and e-business value. Seamlessly conceptualize compelling
                  solutions whereas front-end technologies.
                </Timeline.Item>
                <Timeline.Item className="my-3">
                  Authoritatively leverage other's user friendly architectures
                  and e-business value. Seamlessly conceptualize compelling
                  solutions whereas front-end technologies.
                </Timeline.Item>
                <Timeline.Item
                  className="my-3"
                  dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
                >
                  Finish project make Mobile App UI Design{" "}
                </Timeline.Item>
              </Timeline>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
