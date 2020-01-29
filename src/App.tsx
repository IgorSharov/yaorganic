import React, { Component } from "react";
import "./App.scss";

import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";

import Header from "components/Header";
import Pusher from "components/Pusher";
import routes from "routes";
import RouteWithSubRoutes from "helpers/RouteWithSubRoutes";

export type userRoles = "admin" | "shop" | "user" | "none";

interface State {
  sidebarVisible: boolean;
  userRole: userRoles;
}

export default class App extends Component<{}, State> {
  state: State = { sidebarVisible: false, userRole: "none" };

  sidebarToggleShow = () => this.setState({ sidebarVisible: true });
  sidebarToggleHide = () => this.setState({ sidebarVisible: false });

  setUserRole = (role: userRoles) => {
    this.setState({ userRole: role });
  };

  render() {
    return (
      <Router>
        <Pusher
          sidebarVisible={this.state.sidebarVisible}
          sidebarToggleHide={this.sidebarToggleHide}
          userRole={this.state.userRole}
          setUserRole={this.setUserRole}
        >
          <Header sidebarToggleShow={this.sidebarToggleShow} />
          <Container className="body-content">
            <Switch>
              {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
              ))}
            </Switch>
          </Container>
        </Pusher>
      </Router>
    );
  }
}
