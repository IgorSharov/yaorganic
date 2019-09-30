import React from "react";

import { Header } from "./components/Header";
import { Segment, Sidebar, Menu, Icon, Ref } from "semantic-ui-react";
// import logo from "./logo.svg";
import "./App.scss";

const App: React.FC = () => {
  const segmentRef = React.useRef();

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation="overlay"
        icon="labeled"
        vertical
        target={segmentRef}
        visible
        width="thin"
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

      <Ref innerRef={segmentRef}>
        <Sidebar.Pusher>
          <Header />
        </Sidebar.Pusher>
      </Ref>
    </Sidebar.Pushable>
  );
};

export default App;
