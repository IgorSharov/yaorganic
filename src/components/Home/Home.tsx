import React from "react";
import "./Home.scss";

import { Container } from "semantic-ui-react";

const Home: React.FC<{}> = () => (
  <Container fluid className="main-advertisement">
    <div className="main-advertisement-text">Блок рекламы</div>
  </Container>
);

export default Home;
