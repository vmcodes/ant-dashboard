import React from "react";
// Views
import Login from "views/Login";
import Home from "views/Home";
import ManageProfile from "views/ManageProfile";
import Snapshots from "views/Snapshots";
import AddSnapshots from "views/AddSnapshots";

// Icons
import {
  AppstoreOutlined,
  CameraOutlined,
  LineChartOutlined,
  UserOutlined,
} from "@ant-design/icons";

// Routes
export const Routes = [
  {
    View: Login,
    Name: "Login",
    Location: "/",
    Layout: "home",
  },
  {
    View: Home,
    Icon: <AppstoreOutlined style={{ fontSize: "24px" }} />,
    Name: "Dashboard",
    Location: "/dashboard",
    Layout: "dashboard-nav",
  },
  {
    View: Snapshots,
    Icon: <CameraOutlined style={{ fontSize: "24px" }} />,
    Name: "Snapshots",
    Location: "/snapshots",
    Layout: "dashboard-nav",
  },
  {
    View: AddSnapshots,
    Icon: <CameraOutlined style={{ fontSize: "24px" }} />,
    Name: "Add Snapshots",
    Location: "/snapshots/add",
    Layout: "dashboard-page",
  },
  {
    View: ManageProfile,
    Icon: <UserOutlined style={{ fontSize: "24px" }} />,
    Name: "Manage Profile",
    Location: "/manage-profile",
    Layout: "dashboard-nav",
  },
  {
    View: Home,
    Icon: <LineChartOutlined style={{ fontSize: "24px" }} />,
    Name: "Time Line",
    Location: "/timeline",
    Layout: "dashboard-nav",
  },
];
