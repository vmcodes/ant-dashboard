import React from "react";
import { Row, Col, Button, Form, Select, Input } from "antd";
import { DownloadOutlined, DeleteOutlined } from "@ant-design/icons";

import CustomInput from "components/CustomInput";

const { Option } = Select;

export default function EntityDetails() {
  const [form] = Form.useForm();

  return (
    <Form form={form} layout="vertical" size="large">
      <Row className="entity-details">
        <Col span={24} className="entity-details-buttons">
          <Button icon={<DownloadOutlined />}>Download</Button>
          <Button icon={<DeleteOutlined />}>Delete</Button>
        </Col>
        <Col span={24} className="entity-details-content">
          <Row gutter={24}>
            <Col sm={24} md={12} lg={7}>
              <CustomInput label="Entity Name" InputType={Input} />
            </Col>
            <Col sm={24} md={12} lg={7}>
              <CustomInput
                label="Entity Type"
                InputType={Select}
                inputProps={{ defaultValue: "partnership" }}
              >
                <Option value="partnership">Partnership</Option>
              </CustomInput>
            </Col>
          </Row>
        </Col>
        <Col span={24} className="entity-details-content">
          <Row gutter={24}>
            <Col sm={24} md={12} lg={7}>
              <CustomInput label="Address Line 1" InputType={Input} />
            </Col>
            <Col sm={24} md={12} lg={7}>
              <CustomInput label="Address Line 2" InputType={Input} />
            </Col>
            <Col sm={24} md={8} lg={3}>
              <CustomInput label="City" InputType={Input} />
            </Col>
            <Col
              sm={24}
              md={{ span: 12, offset: 4 }}
              lg={{ span: 6, offset: 0 }}
            >
              <CustomInput label="State" InputType={Input} />
            </Col>
          </Row>
        </Col>
        <Col span={24} className="entity-details-content">
          <Row gutter={24}>
            <Col sm={24} md={8} lg={3}>
              <CustomInput label="Country" InputType={Input} />
            </Col>
            <Col
              sm={24}
              md={{ span: 8, offset: 4 }}
              lg={{ span: 3, offset: 4 }}
            >
              <CustomInput label="PIN Code" InputType={Input} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Form>
  );
}
