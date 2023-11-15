import React from "react";
import styled from "styled-components";
import LeftSide from "./LeftSide";
import Middle from "./Middle";
import RightSide from "./RightSide";
const Home = (props) => {
  return (
    <Container>
      <Content>
        <LeftSide />
        <Middle />
        <RightSide />
      </Content>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 60px;
  max-width: 1128px;
  margin-inline: auto;
  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;
const Content = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 15px;
  
  }
`;

export default Home;
