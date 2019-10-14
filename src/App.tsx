import React, { Component } from "react";
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
      <Pusher
        sidebarVisible={this.state.sidebarVisible}
        sidebarToggleHide={this.sidebarToggleHide}
      >
        <Header sidebarToggleShow={this.sidebarToggleShow} />
      </Pusher>
    );
  }
}
