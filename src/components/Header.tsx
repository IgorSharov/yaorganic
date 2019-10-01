import React from "react";

import {
  Segment,
  Container,
  Icon,
  Header as HUi,
  Button
} from "semantic-ui-react";

interface Props {
  clickSidebarMenu(): void;
}

export const Header: React.FC<Props> = ({ clickSidebarMenu }) => {
  return (
    <Segment vertical className="header-content">
      <HUi as="h1" textAlign="center" icon>
        <Icon name="leaf" />
        <span className="ya-prefix">ya</span>Organic
        <HUi.Subheader>Единый портал продуктов здорового питания</HUi.Subheader>
      </HUi>
      <Container text>
        <Button animated="vertical" onClick={clickSidebarMenu}>
          <Button.Content visible>
            <Icon name="list" />
          </Button.Content>
          <Button.Content hidden>
            <Icon name="arrow left" />
          </Button.Content>
        </Button>
      </Container>
    </Segment>
  );
};
