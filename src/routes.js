import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./pages/Landing";
import { HashRouter } from "react-router-dom";
import HomepageLayout from "./components/HomeLayout";
import Dashboard from "./pages/Dashboard";
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
      </Switch>
    </HashRouter>
  );
};

export default BaseRoute;
