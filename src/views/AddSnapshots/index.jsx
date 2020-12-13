import React from 'react';

import { Row, Typography, Grid, Col, Button, Radio, Form } from 'antd';
import { StarOutlined, DownloadOutlined, DeleteOutlined } from '@ant-design/icons';

import InfoForm from './components/Info';
import LineItemsTable from './components/Table';

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

export default function AddSnapshots() {
  const screens = useBreakpoint();
  const [form] = Form.useForm();

  return (
    <Row className="dashboard-content add-snapshots">
      <Col span={24} className="add-snapshots-header add-snapshots-pd">
        <Row justify="space-between" align="middle">
          <Col sm={24} md={24} lg={12}>
            <Title level={3}>Add Snapshots</Title>
          </Col>
          <Col md={24} lg={12}>
            <Row gutter={12} justify={screens.lg ? 'end' : 'center'} align="middle" style={{ height: '100%' }}>
              <Col>
                <Button icon={<StarOutlined />} className="add-snapshots-btn">Stars</Button>
              </Col>
              <Col>
                <Button icon={<DownloadOutlined />} className="add-snapshots-btn">Download</Button>
              </Col>
              <Col>
                <Button icon={<DeleteOutlined />} className="add-snapshots-btn">Delete</Button>
              </Col>
              <Col>
                <Radio.Group defaultValue="next" buttonStyle="solid">
                  <Radio.Button value="previous">Previous</Radio.Button>
                  <Radio.Button value="next">Next</Radio.Button>
                </Radio.Group>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={24} className="add-snapshots-content">
        <Form form={form} layout="vertical" size="large">
          <Row>
            <Col span={24}>
              <InfoForm />
            </Col>
            <Col span={24}>
              <LineItemsTable />
            </Col>
          </Row>
        </Form>
      </Col>
      <Col span={24} className="add-snapshots-footer add-snapshots-pd">
        <Button size="large"><Text type="secondary" strong>Save as Review</Text></Button>
        <Button size="large" type="primary"><strong>Save as Ready</strong></Button>
      </Col>
    </Row>
  )
}