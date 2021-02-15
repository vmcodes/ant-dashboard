import React, { useState, useRef, useEffect, useContext, createContext } from 'react';

import { Row, Col, Typography, Table, Form, Input, InputNumber } from 'antd';

import CustomInput from 'components/CustomInput';

const { Title } = Typography;

const EditableContext = createContext();

const DEFAULT_COLUMNS = [
  {
    title: 'Description',
    dataIndex: 'description',
    width: '20%',
    editable: true,
    InputType: Input
  },
  {
    title: 'Subtotal',
    dataIndex: 'subtotal',
    width: '40%',
    render: (number) => <span>${number.toFixed(2)}</span>,
    editable: true,
    InputType: InputNumber
  },
  {
    title: 'Tax',
    dataIndex: 'tax',
    width: '20%',
    render: (number) => <span>${number.toFixed(2)}</span>,
    editable: true,
    InputType: InputNumber
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    width: '20%',
    render: (number) => <span>${number.toFixed(2)}</span>,
    editable: true,
    InputType: InputNumber
  }
]

const DEFAULT_DATA = [
  {
    index: 0,
    description: 'Sprite 250 ml',
    subtotal: 20,
    tax: 0,
    cost: 0
  },
  {
    index: 1,
    description: 'Mountain Dew 250 ml',
    subtotal: 20,
    tax: 0,
    cost: 0
  },
  {
    index: 2,
    description: 'Chitane cow 250 ml',
    subtotal: 50,
    tax: 0,
    cost: 0
  },
  {
    index: 3,
    description: 'Chitane cow 500 ml',
    subtotal: 100,
    tax: 0,
    cost: 0
  },
  {
    index: 4,
    description: 'Sprite 250 ml',
    subtotal: 20,
    tax: 0,
    cost: 0
  },
  {
    index: 5,
    description: 'Mountain Dew 250 ml',
    subtotal: 20,
    tax: 0,
    cost: 0
  },
  {
    index: 6,
    description: 'Chitane cow 250 ml',
    subtotal: 50,
    tax: 0,
    cost: 0
  },
]

const INPUT_NUMBER_PROPS = {
  formatter: value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
  parser: value => value.replace(/\$\s?|(,*)/g, '')
}

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();

  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  )
}

const EditableCell = ({ title, editable, children, dataIndex, record, handleSave, InputType, ...restProps }) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef();
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex]
    })
  }

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  }

  const otherProps = InputType === InputNumber ? INPUT_NUMBER_PROPS : {}

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{ margin: 0 }}
        name={dataIndex}
        rules={[{
          required: true,
          message: `${title} is required.`
        }]}
      >
        <InputType ref={inputRef} onPressEnter={save} onBlur={save} size="small" {...otherProps} />
      </Form.Item>
    ) : (
        <div
          className="add-snapshots-editable-cell"
          onClick={toggleEdit}
        >
          {children}
        </div>
      )
  }

  return <td {...restProps}>{childNode}</td>
}

const SummaryRow = (pageData) => {
  const summary = pageData.reduce((result, data) => ({
    subtotal: result.subtotal + data.subtotal,
    tax: result.tax + data.tax,
    cost: result.cost + data.cost
  })
    , { subtotal: 0, tax: 0, cost: 0 })

  return (
    <Table.Summary.Row className="add-snapshots-table-footer">
      <Table.Summary.Cell></Table.Summary.Cell>
      <Table.Summary.Cell>Total</Table.Summary.Cell>
      <Table.Summary.Cell>{`$${summary.subtotal.toFixed(2)}`}</Table.Summary.Cell>
      <Table.Summary.Cell>{`$${summary.tax.toFixed(2)}`}</Table.Summary.Cell>
      <Table.Summary.Cell>{`$${summary.cost.toFixed(2)}`}</Table.Summary.Cell>
    </Table.Summary.Row>
  )
}

export default function LineItemsTable() {
  const [data, setData] = useState(DEFAULT_DATA);

  const handleSave = (row) => {
    const newData = [...data];
    const index = newData.findIndex((item) => row.index === item.index);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    setData(newData);
  }

  const columns = DEFAULT_COLUMNS.map(col => {
    if (!col.editable) {
      return col;
    }

    return {
      ...col,
      onCell: (record) => ({
        record,
        editable: col.editable,
        dataIndex: col.dataIndex,
        title: col.title,
        InputType: col.InputType,
        handleSave
      })
    }
  })

  return (
    <Row className="add-snapshots-table">
      <Col span={24}>
        <div className="add-snapshots-table-header">
          <Title level={4}>Line Items</Title>
          <Title level={5}>( Add / Edit line items directly in table )</Title>
        </div>
      </Col>
      <Col span={24} className="add-snapshots-table-content">
        <Table
          components={{
            body: {
              row: EditableRow,
              cell: EditableCell
            }
          }}
          columns={columns}
          dataSource={data}
          rowClassName={() => 'add-snapshots-editable-row'}
          rowKey='index'
          rowSelection={{ type: 'checkbox' }}
          pagination={false}
          summary={SummaryRow}
        />
      </Col>
      <Col span={24}>
        <Row gutter={24}>
          <Col sm={24} md={12} lg={6} xl={6}>
            <CustomInput label="Description" InputType={Input} inputProps={{ value: 'Food & Snacks' }} />
          </Col>
          <Col sm={24} md={12} lg={6} xl={6}>
            <CustomInput label="Subtotal" InputType={InputNumber} inputProps={{
              value: 280,
              ...INPUT_NUMBER_PROPS,
            }} />
          </Col>
          <Col sm={24} md={12} lg={5} xl={5}>
            <CustomInput label="Tax" InputType={InputNumber} inputProps={{
              value: 0,
              ...INPUT_NUMBER_PROPS,
            }} />
          </Col>
          <Col sm={24} md={12} lg={5} xl={5}>
            <CustomInput label="Cost" InputType={InputNumber} inputProps={{
              value: 0,
              ...INPUT_NUMBER_PROPS,
            }} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

