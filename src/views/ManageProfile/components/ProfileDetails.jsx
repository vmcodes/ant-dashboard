import React from 'react';
import { Typography, Row, Col } from 'antd'

const { Title, Text } = Typography

export default function ProfileDetails({ title, active, children }) {
  return (
    <Row className="profile-details">
      <Col span={24} className="profile-details-title">
        <Title level={5} type="secondary" style={{ marginBottom: 0 }}>{title}</Title>
        {active &&
          <>
            <Text className="profile-details-active" strong>
              <span style={{ margin: '0 10px' }}>&bull;</span>
              Active
          </Text>
          </>
        }
      </Col>
      <Col span={24} className="profile-details-content">
        {children}
      </Col>
    </Row>
  );
}