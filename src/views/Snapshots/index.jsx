import React from "react";

import { Row, Col, Typography, Button, Grid, Table } from "antd";
import {
  DownloadOutlined,
  DeleteOutlined,
  FilterOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { columns, data } from "./data";

const { Text, Title } = Typography;
const { useBreakpoint } = Grid;

export default function Snapshots() {
  const screens = useBreakpoint();

  return (
    <Row className="dashboard-content snapshots">
      <Col span={24} className="snapshots-header snapshots-pd">
        <Row justify="space-between">
          <Col sm={24} md={24} lg={12}>
            <Row align="middle">
              <Col className="snapshots-header-title">
                <Title level={3} style={{ marginRight: "12px" }}>
                  Snapshots
                </Title>
              </Col>
              <Col className="snapshots-header-title" md={24} lg={12}>
                <Text>( 82 items Snapshots )</Text>
              </Col>
            </Row>
          </Col>
          <Col md={24} lg={12}>
            <Row
              gutter={12}
              justify={screens.lg ? "end" : "center"}
              align="middle"
              style={{ height: "100%" }}
            >
              <Col>
                <Button>Select All</Button>
              </Col>
              <Col>
                <Button icon={<DownloadOutlined />} className="snapshots-btn">
                  Download
                </Button>
              </Col>
              <Col>
                <Button icon={<DeleteOutlined />} className="snapshots-btn">
                  Delete
                </Button>
              </Col>
              <Col>
                <Button
                  icon={<FilterOutlined />}
                  className="snapshots-btn"
                ></Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24} className="snapshots-content snapshots-pd">
        <div className="snapshots-content-container">
          <Table
            columns={columns}
            dataSource={data}
            rowKey="id"
            rowSelection={{ type: "checkbox" }}
            pagination={{
              position: ["none", screens.lg ? "bottomLeft" : "bottomCenter"],
              defaultCurrent: 1,
              total: 50,
              showSizeChanger: true,
              pageSizeOptions: [10, 20, 50],
            }}
          />
          <Button
            type="primary"
            icon={<PlusOutlined />}
            className="snapshots-btn snapshots-content-add-btn pt-2"
            size="large"
            href="/snapshots/add"
          >
            Add Snapshots
          </Button>
        </div>
      </Col>
    </Row>
  );
}
