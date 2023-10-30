import React from "react";
import styled from "styled-components";
import Cardimg from "../assets/images/card-bg.svg";
import Proimg from "../assets/images/photo.svg";
const LeftSide = () => {
  return (
    <Container>
      <Cards>
        <UserInfo>
          <CardBg />
          <a>
            <Propic />
            <Link>Welcome, there!</Link>
          </a>
          <a>
            <Addpic>Add a photo</Addpic>
          </a>
        </UserInfo>
      </Cards>
    </Container>
  );
};
const Container = styled.div``;
const Cards = styled.div`

  background-color: #fff;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  border: none;
  transition: box-shadow 83ms;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 /20%);
`;

const UserInfo = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
`;
const CardBg = styled.div`
  background-image: url(${Cardimg});
  height: 70px;
  background-position: center;
  background-size: 463px;
  margin: -12px -12px 0px;
`;
const Propic = styled.div`
  background-image: url(${Proimg});
  width: 72px;
  height: 72px;
  border: none;
  box-sizing: border-box;
  background-clip: content-box;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
`;
const Link = styled.div`
  padding-top: 55px;
`;
const Addpic = styled.div``;

export default LeftSide;
