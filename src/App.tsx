import React, { Component } from "react";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as routesHelpers from "routes/helpers";
import routes from "routes";

import "./App.scss";

import Pusher from "components/Pusher";
import Header from "components/Header";

interface Props {}
interface State {
  sidebarVisible: boolean;
}

export default class App extends Component<Props, State> {
  state = { sidebarVisible: false };

  sidebarToggleShow = () => this.setState({ sidebarVisible: true });
  sidebarToggleHide = () => this.setState({ sidebarVisible: false });

  render() {
    return (
      <Router>
        <Pusher
          sidebarVisible={this.state.sidebarVisible}
          sidebarToggleHide={this.sidebarToggleHide}
        >
          <Header sidebarToggleShow={this.sidebarToggleShow} />
          <Switch>
            {routes.map((route, i) => (
              <routesHelpers.RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Pusher>
      </Router>
    );
  }
}
