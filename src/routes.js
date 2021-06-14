import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/Landing";
import { HashRouter } from "react-router-dom";
import HomepageLayout from "./components/HomeLayout";
import Dashboard from "./pages/Dashboard";
import DashboardMain from "./pages/Dashboardmain";
/**
 * @author
 * @function BaseRoute
 **/

const BaseRoute = props => {

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={HomepageLayout} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/dashboard/main" component={DashboardMain} />
      </Switch>
    </HashRouter>
  );
};

export default BaseRoute;
