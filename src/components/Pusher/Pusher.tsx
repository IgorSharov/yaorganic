import React, { ReactNode } from "react";
import "./Pusher.scss";
import {
  Button,
  Divider,
  Flag,
  Icon,
  Image,
  Label,
  Menu,
  Segment,
  Sidebar
} from "semantic-ui-react";

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
      vertical
      visible={sidebarVisible}
      onHide={sidebarToggleHide}
      width="wide"
    >
      <Button
        onClick={sidebarToggleHide}
        size="big"
        icon={{ name: "close", size: "small" }}
        className="menu-button-close"
      />
      <Menu.Item className="ui menu icon labeled">
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
      <Divider />
      <Menu.Item as="a">
        <Icon name="qrcode" />
        Каталог
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="chart line" />
        Популярные товары
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="camera" />
        Рецепты
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="th list" />
        Программы питания
      </Menu.Item>
      <Divider />
      <Menu.Item as="a">
        <Icon name="vk" />
        Группа ВКонтакте
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="youtube" />
        Youtube
      </Menu.Item>
      <Menu.Item as="a">
        <Icon name="instagram" />
        Instagram
      </Menu.Item>
      <Divider />
      <Label as="a" className="item">
        <Icon name="map marker alternate" />
        Москва
      </Label>
      <Label as="a" className="item">
        <Flag name="russia" />
        Русский язык
      </Label>
      <Divider />
      <Menu.Item as="a">
        <Icon name="fork" />
        Обратная связь
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher dimmed={sidebarVisible}>{children}</Sidebar.Pusher>
  </Sidebar.Pushable>
);

export default Pusher;
