import React from "react";
import styled from "styled-components";
import Cardimg from "../assets/images/card-bg.svg";
import Proimg from "../assets/images/photo.svg";
import connect from "../assets/images/widget-icon.svg";
import itemsImg from "../assets/images/item-icon.svg";
import plus from "../assets/images/plus-icon.svg";
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
        <ConnectCard>
          <a>
            <div className="connect">
              <div className="connect-flex">
                <span style={{ fontColor: "grey" }}>Connections</span>
                <span style={{ fontWeight: "bold" }}>Grow your network</span>
              </div>
              <div>
                <img style={{ width: "20px" }} src={connect}></img>
              </div>
            </div>
          </a>
        </ConnectCard>
        <Items>
          <img style={{ width: "20px" }} src={itemsImg}></img>
          <span> My items</span>
        </Items>
      </Cards>
      <Group>
        <div className="group">
          <div className="group-flex">
            <span>Groups</span>
            <span>Events</span>
            <span>Follow Hashtags</span>
          </div>
          <div>
            <img src={plus}></img>
          </div>
        </div>
        <div className="discover">
          <span>Discover more</span>
        </div>
      </Group>
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
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%);
  border-radius: 8px;
`;

const UserInfo = styled.div`
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding: 12px 12px 16px;
  word-wrap: break-word;
  word-break: break-word;
  border-bottom: 1px solid #d6d6d6;
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
  margin: -38px auto -15px;
  background-color: white;
  border-radius: 50%;
  background-size: 45px;
`;
const Link = styled.div`
  padding-top: 55px;
  font-weight: bold;
  padding-bottom: 7px;
`;
const Addpic = styled.div`
  font-size: 13px;
  color: #0a66c2;
`;
const ConnectCard = styled.div`
  padding: 18px;
  border-bottom: 1px solid #d6d6d6;
  .connect {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .connect-flex {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    & span {
      font-size: 14px;
    }
  }
`;
const Items = styled.div`
  padding: 18px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-weight: bold;
`;
const Group = styled.div`
  background-color: #fff;
  border: none;
  transition: box-shadow 83ms;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%);
  border-radius: 8px;
  line-height: 30px;
  .group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #d6d6d6;
    padding: 15px 18px 5px 18px;
  }
  .group-flex {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
  }
  .discover {
    color: grey;
    padding: 12px;
    font-weight: bold;
  }
`;
export default LeftSide;
