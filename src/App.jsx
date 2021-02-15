import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// redux
import { useDispatch } from "react-redux";
import { maintainSession } from "slices/token";
// imports
import ScrollToTop from "components/ScrollToTop";
import Dashboard from "components/Dashboard";
import { Routes } from "routes";
import "assets/css/bootstrap.min.css";
import "assets/less/antMotionStyle.less";
import "services";

function Views() {
  let routes = [];

  Routes.forEach((Path, index) => {
    if (Path.Layout.includes("dashboard")) {
      routes.push(
        <Route
          key={index}
          exact={true}
          path={Path.Location}
          children={
            <Dashboard Location={Path.Name} ChildComponent={<Path.View />} />
          }
        />
      );
    } else {
      routes.push(
        <Route
          key={index}
          exact={true}
          path={Path.Location}
          component={Path.View}
        />
      );
    }
  });
  routes.push(<Redirect key="redirect" to="/" />);

  return <Switch>{routes}</Switch>;
}

const App = () => {
  const dispatch = useDispatch();
  dispatch(maintainSession());

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Views />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
