import React from "react";

import { Segment, Icon, Header as HUi } from "semantic-ui-react";

interface Props {}

export const Header: React.FC<Props> = () => {
  return (
    <Segment vertical className="header-content">
      <HUi as="h1" textAlign="center" icon>
        <Icon name="leaf" />
        <span className="ya-prefix">ya</span>Organic
        <HUi.Subheader>Единый портал продуктов здорового питания</HUi.Subheader>
      </HUi>
    </Segment>
  );
};
