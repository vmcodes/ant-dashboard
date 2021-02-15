import React from "react";
import { Row, Col, Progress, Tabs, Typography, Tag } from "antd";
import ProjectsTable from "./Table";

const { Text, Title } = Typography;
const { TabPane } = Tabs;

export default function Activity() {
  return (
    <React.Fragment>
      <Row justify="space-between">
        <Col xs={24} sm={24} md={24} lg={24} xl={15}>
          <Row justify="space-around" className="dashboard-content p-3 mt-5">
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <Tabs defaultActiveKey="1" className="manage-profile-tabs">
                <TabPane tab="All Projects" key="1" />
                <TabPane tab="In Progress" key="2" />
                <TabPane tab="Complete" key="3" />
                <TabPane tab="Canceled" key="4" />
              </Tabs>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
              <ProjectsTable />
            </Col>
          </Row>

          <Row justify="space-between">
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={15}
              className="dashboard-content p-3 mt-5"
            >
              <Title level={3}>Messages</Title>

              <Row justify="space-between" className="my-3">
                <Col className="mx-3" span={4}>
                  <img
                    src={require("assets/images/person7.png")}
                    alt="person"
                  />
                </Col>
                <Col span={12}>
                  <Title level={5}>Ronald Richards</Title>
                  <Text type="secondary">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </Text>
                </Col>
                <Col span={4}>
                  <Text type="secondary">Today</Text>
                </Col>
              </Row>

              <Row justify="space-between" className="my-3">
                <Col className="mx-3" span={4}>
                  <img
                    src={require("assets/images/person8.png")}
                    alt="person"
                  />
                </Col>
                <Col span={12}>
                  <Title level={5}>Albert Flores</Title>
                  <Text type="secondary">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </Text>
                </Col>
                <Col span={4}>
                  <Text type="secondary">Today</Text>
                </Col>
              </Row>

              <Row justify="space-between" className="my-3">
                <Col className="mx-3" span={4}>
                  <img
                    src={require("assets/images/person9.png")}
                    alt="person"
                  />
                </Col>
                <Col span={12}>
                  <Title level={5}>Cameron Williamson</Title>
                  <Text type="secondary">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint.
                  </Text>
                </Col>
                <Col span={4}>
                  <Text type="secondary">Today</Text>
                </Col>
              </Row>
            </Col>
            <Col
              xs={24}
              sm={24}
              md={24}
              lg={24}
              xl={8}
              className="dashboard-content p-3 mt-5 text-center"
            >
              <Title level={3}>Project Progress</Title>

              <Progress
                className="my-3"
                type="circle"
                percent={75}
                width={180}
              />
            </Col>
          </Row>
        </Col>

        <Col xs={24} sm={24} md={24} lg={24} xl={8}>
          <Row justify="space-between" className="dashboard-content p-5 mt-5">
            <Col span={24}>
              <Col span={24}>
                <Title level={3}>Recent Activities</Title>
                <Title level={4}>Today</Title>
              </Col>

              <Row justify="space-between" className="my-3">
                <Col span={4}>
                  <img
                    src={require("assets/images/person4.png")}
                    alt="person"
                  />
                </Col>
                <Col span={12}>
                  <span>
                    Esther Howard left a 5 star review on{" "}
                    <a href="#project">your project</a>
                  </span>
                </Col>
              </Row>

              <Row justify="space-between" className="my-3">
                <Col span={4}>
                  <img
                    src={require("assets/images/person5.png")}
                    alt="person"
                  />
                </Col>
                <Col span={12}>
                  <span>
                    Wade Warren left a 5 star review on{" "}
                    <a href="#project">your project</a>
                  </span>
                </Col>
              </Row>

              <Row justify="space-between" className="my-3">
                <Col span={4}>
                  <img
                    src={require("assets/images/person6.png")}
                    alt="person"
                  />
                </Col>
                <Col span={12}>
                  <span>
                    Jerome Bell requested a revision on{" "}
                    <a href="#project">your project</a>
                  </span>
                </Col>
              </Row>

              <Col span={24}>
                <Title level={4}>Yesterday</Title>
              </Col>

              <Row justify="space-between" className="mt-3">
                <Col span={4}>
                  <img
                    src={require("assets/images/person3.png")}
                    alt="person"
                  />
                </Col>
                <Col span={12}>
                  <span>
                    Marvin McKinney has added 8 new photos on
                    <a href="#project"> your project</a>
                  </span>
                </Col>
              </Row>

              <Row justify="space-between" className="mt-3">
                <Col span={4} />
                <Col span={12}>
                  <span>
                    <img
                      src={require("assets/images/square.png")}
                      alt="person"
                    />
                    <img
                      className="mx-2"
                      src={require("assets/images/square.png")}
                      alt="person"
                    />
                    <Tag className="mx-2" color="blue">
                      + 6 More
                    </Tag>
                  </span>

                  <a className="float-right ml-auto mt-5" href="#project">
                    Load more
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </React.Fragment>
  );
}
