import React, { Component } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch } from "react-router-dom";

import Header from "components/Header";
import Pusher from "components/Pusher";
import routes from "routes";
import RouteWithSubRoutes from "helpers/RouteWithSubRoutes";

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
              <RouteWithSubRoutes key={i} {...route} />
            ))}
          </Switch>
        </Pusher>
      </Router>
    );
  }
}
