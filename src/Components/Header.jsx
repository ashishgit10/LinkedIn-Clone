import React from "react";
import styled from "styled-components";
import logo from "../assets/images/home-logo.svg";
import search from "../assets/images/search-icon.svg";
import home from "../assets/images/nav-home.svg";
import network from "../assets/images/nav-network.svg";
import job from "../assets/images/nav-jobs.svg";
import msg from "../assets/images/nav-messaging.svg";
import notify from "../assets/images/nav-notifications.svg";
import me from "../assets/images/user.svg";
import work from "../assets/images/nav-work.svg";
import down from "../assets/images/down-icon.svg";
import post from "../assets/images/post.svg";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Container>
      <Content>
        <Logo className="logo">
          <img src={logo}></img>
        </Logo>
        <User className="usertop">
          <a>
            <img src={me}></img>
            {/* <span>Me</span> */}
            {/*   */}
          </a>
          <Signoutphn>
            <a>Sign Out</a>
          </Signoutphn>
        </User>
        <Search>
          <div>
            <input type="search" placeholder="Search"></input>
          </div>
          <img src={search}></img>
        </Search>
        <Navbar>
          <NavList>
            <Navcont>
              <NavLink className="link" to="/home">
                <img className="Navlogo" src={home}></img>
                <span>Home</span>
              </NavLink>
            </Navcont>
            <Navcont>
              <NavLink className="link" to="/home">
                <img className="Navlogo" src={network}></img>
                <span>My Networks</span>
              </NavLink>
            </Navcont>
            <Navcont>
              <NavLink className="post" to="/home">
                <img className="Navlogo" src={post}></img>
                <span>Post</span>
              </NavLink>
            </Navcont>
            <Navcont>
              <NavLink className="link" to="/home">
                <img className="Navlogo" src={notify}></img>
                <span>Notification</span>
              </NavLink>
            </Navcont>
            <Navcont>
              <NavLink className="msg" to="/home">
                <img className="Navlogo" src={msg}></img>
                <span>Messaging</span>
              </NavLink>
            </Navcont>
            <Navcont>
              <NavLink className="link" to="/home">
                <img className="Navlogo" src={job}></img>
                <span>Jobs</span>
              </NavLink>
            </Navcont>
            <User className="userdown">
              <a>
                <img style={{ borderRadius: "50%" }} src={me}></img>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <span>Me</span>
                  <img src={down}></img>
                </div>
              </a>
              <Signout>
                <a>Sign Out</a>
              </Signout>
            </User>
            <Work>
              <img src={work}></img>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <span style={{ fontSize: "12px", marginLeft: "4px" }}>
                  For Business
                </span>
                <img src={down}></img>
              </div>
            </Work>
          </NavList>
        </Navbar>
        <Navcont>
          <NavLink className="msg2" to="/home">
            <img className="Navlogo" src={msg}></img>
            <span>Messaging</span>
          </NavLink>
        </Navcont>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  position: fixed;
  top: 0;
  left: 0;
  padding: 0 24px;
  width: 100vw;
  height: 60px;
  z-index: 100;
  @media (max-width: 768px) {
    padding: 0 12px;
    height: 50px;
    .userdown {
      display: none;
    }
    .usertop a {
      margin-inline: 0px;
    }

    .usertop a img {
      display: flex;
      width: 37px;
      height: 37px;
      border-radius: 50px !important;
    }
  }
`;

const Content = styled.div`
  display: flex;
  min-height: 100%;
  margin: 0px auto;
  max-width: 1128px;
  align-items: center;
`;

const Logo = styled.div`
  & img {
    height: 35px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Search = styled.div`
  margin-left: 8px;
  & > div {
    display: flex;
    width: 390px;
    input {
      border: none;
      background-color: #eef3f8;
      width: 270px;
      line-height: 2;
      border-radius: 4px;
      padding: 0px 10px 0px 30px;
      height: 38px;
      @media (max-width: 768px) {
        flex-grow: 4;
        width: 220px;
      }
    }
    @media (max-width: 768px) {
      width: 635px;
    }
    @media (max-width: 428px) {
      width: 290px;
    }
    @media (max-width: 377px) {
      width: 240px;
    }
  }
  img {
    position: absolute;
    top: 21px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 5px;
  }
  @media (max-width: 768px) {
    img {
      top: 18px;
    }
  }
`;
const Navbar = styled.nav`
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    bottom: 0;
    left: 0;
    background: white;
    width: 100%;
    padding: 3px 0px;
  }
`;

const NavList = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
  @media (max-width: 768px) {
    justify-content: space-around;
  }
`;

const Signoutphn = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  font-size: 14px;
  padding: 0px 0px;
  border-radius: 0px 0px 5px 5px;
  display: none;
`;
const Signout = styled.div`
  position: absolute;
  top: 50px;
  background-color: white;
  padding: 10px;
  border-radius: 0px 0px 5px 5px;
  display: none;
`;
const Navcont = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  & > a {
    text-decoration: none;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: transparent;
    min-height: 60px;
    margin-inline: 10px;
    line-height: 1.5;
    span {
      font-size: 12px;
    }
    /*   &.active {
      span:after {
        content: "";
        border-bottom: 2px solid red;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: scaleX(1);
        transition: transform 0.2s;
        width: 50%;
      }
    } */
    @media (max-width: 768px) {
      .Navlogo {
        min-width: 15px;
      }
      & span {
        font-size: 11px;
      }
      &.link {
        min-width: 60px !important;
        margin-inline: 0px !important;
      }
    }
  }
  .Navlogo {
    width: 25px;
  }
  .msg {
    @media (max-width: 768px) {
      display: none;
    }
  }
  .msg2 {
    display: none;
    @media (max-width: 768px) {
      display: flex;
    }
  }
  .post {
    display: none;
  }
  .post {
    @media (max-width: 768px) {
      display: flex;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgba(0, 0, 0, 0.6);
      }
    }
  }
  &:hover {
    ${Signoutphn} {
      display: flex;
    }
  }
  &:hover {
    ${Signout} {
      display: flex;
    }
  }
`;

const User = styled(Navcont)``;

const Work = styled(User)`
  display: "flex";
  justify-content: center;
  align-items: center;
  border-left: 0.5px solid black;
  @media (max-width: 768px) {
    display: none;
  }
`;

export default Header;
