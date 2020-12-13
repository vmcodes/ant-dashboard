import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// imports
import ScrollToTop from "components/ScrollToTop";
import Dashboard from "components/Dashboard";
import { Routes } from "routes";
import "assets/css/bootstrap.min.css";
import "assets/less/antMotionStyle.less";

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
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Views />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
