import React from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Dropdown, Input, Row, Col, Typography } from "antd";
import {
  FlagOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  BellOutlined,
  DownOutlined,
  MessageOutlined,
  SettingOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Routes } from "routes";

const { Header, Sider, Content } = Layout;
const { Search } = Input;
const { Text } = Typography;

const menu = (
  <Menu className="mt-3">
    <Menu.Item />
    <Menu.Item>
      <Link to="/">
        <SettingOutlined className="m-1" style={{ fontSize: "20px" }} />{" "}
        Settings
      </Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/">
        <LogoutOutlined className="m-1" style={{ fontSize: "20px" }} /> Sign Out
      </Link>
    </Menu.Item>
  </Menu>
);

const renderNav = () => {
  return Routes.map((route) => {
    if (route.Layout === "dashboard-nav") {
      return (
        <Menu.Item key={route.Location} icon={route.Icon}>
          <Link to={route.Location}>{route.Name}</Link>
        </Menu.Item>
      );
    } else {
      return null;
    }
  });
};

export default function Dashboard(props) {
  let [collapsed, setCollapsed] = React.useState(false);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const onSearch = (value) => console.log(value);

  return (
    <Layout className="dashboard">
      <Sider
        className="dashboard-sider"
        trigger={null}
        collapsible
        collapsed={collapsed}
      >
        <Menu
          className="dashboard-nav fixed-side"
          mode="inline"
          defaultSelectedKeys={[window.location.pathname]}
        >
          <Menu.ItemGroup key="g1" title="Main Navigation">
            {renderNav()}
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Support">
            <Menu.Item
              key="6"
              icon={<FlagOutlined style={{ fontSize: "24px" }} />}
            >
              <a
                href="https://ant.design/components/overview/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Help
              </a>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>

      <Layout>
        <Header className="dashboard-header fixed-top">
          <Row justify="space-between">
            <Col xs={2} sm={2} md={3} lg={3} xl={3} className="text-left">
              <Link to="/">
                <img
                  src={require("assets/images/logo-light.png")}
                  className="dashboard-logo"
                  alt="logo"
                />
              </Link>{" "}
            </Col>

            <Col xs={2} sm={2} md={3} lg={3} xl={3} className="text-left">
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger",
                  onClick: toggle,
                }
              )}
            </Col>

            <Col xs={0} sm={0} md={0} lg={6} xl={8} className="mt-3">
              <Search
                placeholder="Search..."
                allowClear
                onSearch={onSearch}
                size="large"
              />
            </Col>

            <Col xs={0} sm={0} md={4} lg={4} xl={4} />

            <Col xs={0} sm={0} md={6} lg={4} xl={3} className="text-right">
              <MessageOutlined className="dashboard-icon" />
              <BellOutlined className="dashboard-icon mx-3" />
            </Col>

            <Col xs={8} sm={6} md={4} lg={4} xl={3} className="text-left">
              <Link to="/">
                <img
                  src={require("assets/images/user-icon.png")}
                  className="dashboard-user"
                  alt="icon"
                />
              </Link>{" "}
              <Dropdown
                className="px-3"
                overlay={menu}
                trigger={["click"]}
                placement="bottomCenter"
              >
                <DownOutlined />
              </Dropdown>
            </Col>
          </Row>
        </Header>
        <Header className="dashboard-inner" />
        <Text type="secondary dashboard-subheader">{props.location}</Text>
        <Content className="m-5">{props.component}</Content>
      </Layout>
    </Layout>
  );
}
