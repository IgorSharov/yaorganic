import React, { Component } from "react";

import { Header } from "./components/Header";
import { Segment, Sidebar, Menu, Icon, Image, Button } from "semantic-ui-react";
import "./App.scss";

interface Props {}
interface State {
  visible: boolean;
}

export default class App extends Component<Props, State> {
  // state = { visible: true }; //TODO: clean up
  state = { visible: false };

  toggleVisibleShow = () => this.setState({ visible: true });
  toggleVisibleHide = () => this.setState({ visible: false });

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
          onHide={this.toggleVisibleHide}
          width="wide"
        >
          <Button
            onClick={this.toggleVisibleHide}
            size="big"
            icon={{ name: "close", size: "large" }}
            className="menu-button-close"
          />
          <Menu.Item>
            <Image
              src="https://static.wixstatic.com/media/a4894d_bc50df6799ad42e9aba766682c827da3~mv2.png/v1/fill/w_427,h_427,al_c,q_80,usm_0.66_1.00_0.01/blank.webp"
              size="small"
              centered
              circular
            />
            <Button basic size="big">
              Войти
            </Button>
          </Menu.Item>
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
          <Header clickSidebarMenu={this.toggleVisibleShow} />
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
