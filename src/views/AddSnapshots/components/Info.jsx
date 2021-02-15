import React from 'react';

import { Row, Col, Upload, Input, Select, DatePicker } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import CustomInput from 'components/CustomInput';

const { Dragger } = Upload;
const defaultFileList = [
  {
    uid: '-1',
    name: 'Food_payment.png',
    status: 'done',
  },
  {
    uid: '-2',
    name: 'Checkout_struck.png',
    status: 'done',
  }
]

export default function InfoForm() {
  return (
    <Row>
      <Col span={24}>
        <Row gutter={24}>
          <Col sm={24} md={12} lg={4} xl={4}>
            <CustomInput label="ID" inputProps={{ disabled: true, placeholder: 'New' }} InputType={Input} />
          </Col>
          <Col sm={24} md={12} lg={4} xl={4}>
            <CustomInput label="Purpose" inputProps={{ disabled: true, placeholder: 'Not defined' }} InputType={Input} />
          </Col>
          <Col sm={24} md={12} lg={6} xl={5}>
            <CustomInput label="Income / Expense" inputProps={{ disabled: true, placeholder: 'Not defined' }} InputType={Input} />
          </Col>
          <Col sm={24} md={12} lg={6} xl={5}>
            <CustomInput label="Payment Status" inputProps={{ disabled: true, placeholder: 'Not defined' }} InputType={Input} />
          </Col>
          <Col sm={24} md={12} lg={4} xl={5}>
            <CustomInput label="Status" inputProps={{ disabled: true, placeholder: 'New Snapshots' }} InputType={Input} />
          </Col>
        </Row>
      </Col>
      <Col span={24} className="add-snapshots-content-info">
        <Row gutter={24}>
          <Col md={24} lg={8} style={{ height: '100%' }}>
            <Dragger
              multiple
              listType="picture"
              defaultFileList={defaultFileList}
            >
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">
                Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                band files
              </p>
            </Dragger>
          </Col>
          <Col sm={24} md={12} lg={5}>
            <Row gutter={24}>
              <Col span={24}>
                <CustomInput label='Purpose' itemProps={{ required: true }} InputType={Select} />
              </Col>
              <Col span={24}>
                <CustomInput label='Invoice #' InputType={Input} inputProps={{ placeholder: 'Type here' }} />
              </Col>
              <Col span={24}>
                <CustomInput label='Company' itemProps={{ required: true }} InputType={Select} />
              </Col>
              <Col span={24}>
                <CustomInput label='Category' InputType={Select} />
              </Col>
            </Row>
          </Col>
          <Col sm={24} md={12} lg={5}>
            <Row gutter={24}>
              <Col span={24}>
                <CustomInput label='Income or Expense' itemProps={{ required: true }} InputType={Select} />
              </Col>
              <Col span={24}>
                <CustomInput label='Date' itemProps={{ required: true }} InputType={DatePicker} inputProps={{ style: { width: '100%' } }} />
              </Col>
              <Col span={24}>
                <CustomInput label='GST' itemProps={{ required: true }} inputProps={{ placeholder: 'Type here' }} InputType={Input} />
              </Col>
              <Col span={24}>
                <CustomInput label='Tag' InputType={Select} />
              </Col>
            </Row>
          </Col>
          <Col sm={24} md={12} lg={5}>
            <Row gutter={24}>
              <Col span={24}>
                <CustomInput label='Type' itemProps={{ required: true }} InputType={Select} />
              </Col>
              <Col span={24}>
                <CustomInput label='Due Date' itemProps={{ required: true }} InputType={DatePicker} inputProps={{ style: { width: '100%' } }} />
              </Col>
              <Col span={24}>
                <CustomInput label='Pan #' inputProps={{ placeholder: 'Type here' }} InputType={Input} />
              </Col>
              <Col span={24}>
                <CustomInput label='Payment Status' itemProps={{ required: true }} InputType={Select} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}