import React, { ReactNode } from "react";
import "./Pusher.scss";
import { Segment, Sidebar, Menu, Icon, Image, Button } from "semantic-ui-react";

interface Props {
  sidebarVisible: boolean;
  sidebarToggleHide(): void;
  children: ReactNode;
}

const Pusher: React.FC<Props> = ({
  sidebarVisible,
  sidebarToggleHide,
  children
}) => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      className="secondary"
      animation="overlay"
      icon="labeled"
      vertical
      visible={sidebarVisible}
      onHide={sidebarToggleHide}
      width="wide"
    >
      <Button
        onClick={sidebarToggleHide}
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

    <Sidebar.Pusher dimmed={sidebarVisible}>{children}</Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default Pusher;