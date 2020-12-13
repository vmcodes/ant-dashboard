import React, { useState } from "react";
import { Table, Tag } from "antd";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Tags",
    dataIndex: "tags",
    render: (tags) => (
      <>
        {tags.map((tag, index) => (
          <Tag key={index} color="blue">
            {tag}
          </Tag>
        ))}
      </>
    ),
  },
  {
    title: "Who",
    dataIndex: "persons",
    render: (persons) => (
      <>
        {persons.map((person, index) => (
          <img
            key={index}
            src={require(`assets/images/${person}`)}
            alt={person}
          />
        ))}
      </>
    ),
  },
  {
    title: "When",
    dataIndex: "when",
  },
];

const data = [
  {
    key: "1",
    name: "Interview with Club Tennis in Sidney",
    tags: ["Sports", "News"],
    persons: ["person1.png"],
    when: "Today",
  },
  {
    key: "2",
    name: "Make a report about the incident plane crash",
    tags: ["News", "Trending"],
    persons: ["person2.png"],
    when: "Today",
  },
  {
    key: "3",
    name: "Covering traditional ceremonies in Bali",
    tags: ["News", "Religon"],
    persons: ["person3.png"],
    when: "Tomorrow",
  },
]; // rowSelection object indicates the need for row selection

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === "Disabled User",
    // Column configuration not to be checked
    name: record.name,
  }),
};

const ProjectsTable = () => {
  const [selectionType] = useState("checkbox");

  return (
    <Table
      rowSelection={{
        type: selectionType,
        ...rowSelection,
      }}
      columns={columns}
      dataSource={data}
    />
  );
};

export default ProjectsTable;
