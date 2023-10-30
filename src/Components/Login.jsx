import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import loginlogo from "../assets/images/login-logo.svg";
import herologo from "../assets/images/login-hero.svg";
import googleicon from "../assets/images/google.svg";
const Login = () => {
  return (
    <Container>
      <Nav>
        <NavLink to="/">
          <img className="logo" src={loginlogo}></img>
        </NavLink>
        <div className="log">
          <NavLink to='/home'>
            <div className="loginbtn">Join now</div>
          </NavLink>
          <div className="signupbtn">Sign in</div>
        </div>
      </Nav>
      <Section>
        <div className="div">
          <div className="title">
            <div>
              <span>Welcome to your professional community</span>
              <div className="googlebtn id">
                <img src={googleicon}></img>Sign in with Google
              </div>
            </div>
          </div>
          <div className="herologo">
            <img src={herologo}></img>
          </div>
        </div>
        <div className="googlebtn idd">
          <img src={googleicon}></img>Sign in with Google
        </div>
      </Section>
    </Container>
  );
};
const Container = styled.div`
  padding: 0;
  margin-block: 12px;
  padding-inline: 15px;
  max-width: 1100px;
  margin-inline: auto;
`;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .logo {
    min-width: 150px;
    @media (max-width: 768px) {
      min-width: 120px;
    }
  }
  .log {
    display: flex;
  }
  .loginbtn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
  }
  .signupbtn {
    border: 1px solid #0a66c2;
    font-weight: bold;
    color: #0a66c2;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    padding: 10px;
  }
`;

const Section = styled.section`
  .div {
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
    align-items: center;
    padding-top: 40px;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
  .id {
    @media (max-width: 769px) {
      display: none !important;
    }
  }
  .idd {
    @media (min-width: 767px) {
      display: none !important;
    }
  }
  .title {
    font-size: 60px;
    padding-right: 80px;
    width: 50%;
    font-weight: lighter;
    @media (max-width: 768px) {
      width: 100%;
      font-size: 30px;
      padding-right: 0px;
    }
  }
  .herologo {
    width: 30%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .herologo > img {
    width: 550px;
    height: 550px;
    @media (max-width: 768px) {
      width: 100%;
      height: 100%;
      margin-top: 40px;
    }
  }
  .googlebtn {
    margin-top: 65px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    border-radius: 25px;
    padding: 10px;
  }
`;

export default Login;
