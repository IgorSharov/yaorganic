import React, { Component } from "react";

import { Header } from "./components/Header";
import { Segment, Sidebar, Menu, Icon, Divider } from "semantic-ui-react";
// import logo from "./logo.svg";
import "./App.scss";

interface Props {}
interface State {
  visible: boolean;
}

export default class App extends Component<Props, State> {
  // state = { visible: true };
  state = { visible: false };

  toggleVisible = () => this.setState(state => ({ visible: !state.visible }));

  render() {
    const { visible } = this.state;

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          className="secondary"
          animation="overlay"
          icon="labeled"
          vertical
          visible={visible}
          onHide={this.toggleVisible}
          width="wide"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Каталог
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Калькулятор калорий
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Рецепты
          </Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={visible}>
          <Header clickSidebarMenu={this.toggleVisible} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
