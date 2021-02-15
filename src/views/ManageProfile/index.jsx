import React from "react";
import { Row, Col, Typography, Tabs, Form, Button, Input, Select } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import ProfileDetails from "./components/ProfileDetails";
import EntityDetails from "./components/EntityDetails";
import CustomInput from "components/CustomInput";

const { Title, Text } = Typography;
const { TabPane } = Tabs;

export default function ManageProfile() {
  const [accountForm] = Form.useForm();
  const [entityForm] = Form.useForm();

  return (
    <Row className="dashboard-content manage-profile">
      <Col span={24} className="manage-profile-header manage-profile-pd">
        <Row justify="space-between">
          <Col xs={24} sm={24} md={12} lg={12} xl={16}>
            <Title level={3}>Manage Profile</Title>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12} xl={8}>
            <Tabs defaultActiveKey="1" className="manage-profile-tabs">
              <TabPane tab="General" key="1" />
              <TabPane tab="License" key="2" />
              <TabPane tab="Entities" key="3" />
              <TabPane tab="Users" key="4" />
            </Tabs>
          </Col>
        </Row>
      </Col>
      <Col span={24} className="manage-profile-content manage-profile-pd">
        <Row>
          <Col span={24}>
            <ProfileDetails title="ACCOUNT DETAILS" active>
              <Form form={accountForm} layout="vertical" size="large">
                <Row gutter={48}>
                  <Col sm={24} md={12} lg={6}>
                    <CustomInput label="Account Code" InputType={Input} />
                  </Col>
                  <Col sm={24} md={12} lg={6}>
                    <CustomInput label="Account Name" InputType={Input} />
                  </Col>
                  <Col sm={24} md={12} lg={6}>
                    <CustomInput label="Account Email" InputType={Input} />
                  </Col>
                  <Col sm={24} md={12} lg={4}>
                    <CustomInput label="Valid From" InputType={Input} />
                  </Col>
                </Row>
              </Form>
            </ProfileDetails>
          </Col>
          <Col span={24}>
            <ProfileDetails title="ENTITY DETAILS">
              <Form
                form={entityForm}
                className="manage-profile-entity"
                size="large"
              >
                <Row gutter={24}>
                  <Col sm={24} md={12} lg={6}>
                    <CustomInput label="Entity" InputType={Select} />
                  </Col>
                  <Col sm={24} md={12} lg={6}>
                    <Button icon={<PlusOutlined />}>Add New Entity</Button>
                  </Col>
                </Row>
              </Form>
            </ProfileDetails>
          </Col>
          <Col span={22} offset={1}>
            <EntityDetails />
          </Col>
        </Row>
      </Col>
      <Col span={24} className={"manage-profile-footer manage-profile-pd"}>
        <Button type="primary" size="large">
          <Text strong style={{ color: "white" }}>
            SAVE
          </Text>
        </Button>
      </Col>
    </Row>
  );
}
