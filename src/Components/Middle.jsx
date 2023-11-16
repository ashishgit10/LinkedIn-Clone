import React from "react";
import styled from "styled-components";
import proImg from "../assets/images/user.svg";
import post from "../assets/images/post-photo.svg";
import eventImg from "../assets/images/event.svg";
import article from "../assets/images/article.svg";

const Middle = () => {
  return (
    <Middleside>
      <div className="container">
        <div className="topCont">
          <div>
            <img className="user" src={proImg}></img>
          </div>
          <div className="flex-grow">
            <input type="text" placeholder="Start a post"></input>
          </div>
        </div>
        <div className="imgList">
          <a>
            <img style={{ color: "#368fe8ff" }} src={post}></img>
            <span>Media</span>
          </a>
          <a>
            <img src={eventImg}></img>
            <span>Event</span>
          </a>
          <a>
            <img src={article}></img>
            <span>Write Article</span>
          </a>
        </div>
      </div>
    </Middleside>
  );
};
const Middleside = styled.div`
  background-color: #fff;
  border: none;
  transition: box-shadow 83ms;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%);
  border-radius: 8px;
  padding: 12px;
  margin: 6px 0px;
  .flex-grow {
    display: flex;
    flex: 1;
  }
  .topCont {
    display: flex;
    justify-content: flex-start;
    align-items: center;

    input {
      flex-grow: 1;
      line-height: 40px;
      border-radius: 20px;
      padding-left: 10px;
      margin-left: 15px;
      max-width: 100%;
      @media (max-width: 768px) {
      }
    }
  }
  .user {
    width: 50px;
    border-radius: 50%;
  }
  .imgList {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    a {
      display: flex;
      align-items: center;
      span {
        padding-left: 8px;
      }
    }
  }
`;
export default Middle;
