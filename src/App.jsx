import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
// imports
import ScrollToTop from "components/ScrollToTop";
import "assets/css/bootstrap.min.css";
import "assets/less/antMotionStyle.less";
import { Spin } from "antd";
import { Routes } from "routes";

const LandingPage = lazy(() => import("views/LandingPage"));
const Login = lazy(() => import("views/Login"));
const Dashboard = lazy(() => import("layout/Dashboard"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spin className="load-center" size="large" />}>
        <ScrollToTop />

        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/login" component={Login} />

          {Routes.map((route) => {
            return (
              <Route
                exact
                path={route.Location}
                children={
                  <Dashboard component={<route.View />} location={route.Name} />
                }
              />
            );
          })}

          <Redirect to="/" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
