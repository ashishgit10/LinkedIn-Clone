import React from "react";
import styled from "styled-components";
import proImg from "../assets/images/user.svg";
import post from "../assets/images/post-photo.svg";
import eventImg from "../assets/images/event.svg";
import article from "../assets/images/article.svg";
import dots from "../assets/images/dots.svg";
import like from "../assets/images/like.svg";
import comment from "../assets/images/comment.svg";
import repost from "../assets/images/repost.svg";
import send from "../assets/images/send.svg";
import postpic from "../assets/images/post.jpeg";
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
      <Article>
        <ArtCont>
          <div className="topCont">
            <div className="proImg">
              <img src={proImg}></img>
              <div className="details">
                <div>name</div>
                <div>info</div>
                <div>date</div>
              </div>
            </div>
            <div>
              <img src={dots}></img>
            </div>
          </div>
          <div style={{ marginTop: "8px" }}>Description</div>
          <div className="postImg">
            <div>
              <img src={postpic}></img>
            </div>
          </div>
        </ArtCont>
        <ReactCont>
          <div>
            <div className="reactIcon flex">
              <img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb"></img>
              <span>75</span>
            </div>
            <div className="reactSec">
              <a className="flex">
                <img src={like}></img>
                <span>Like</span>
              </a>
              <a className="flex">
                <img src={comment}></img>
                <span>Comment</span>
              </a>
              <a className="flex">
                <img src={repost}></img>
                <span>Repost</span>
              </a>
              <a className="flex">
                <img src={send}></img>
                <span>Send</span>
              </a>
            </div>
          </div>
        </ReactCont>
      </Article>
    </Middleside>
  );
};
const Middleside = styled.div`
  max-width: 540px;
  @media (max-width: 768px) {
    max-width: 100% !important;
  }
  .container {
    background-color: #fff;
    border: none;
    transition: box-shadow 83ms;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%);
    border-radius: 8px;
    padding: 12px;
    margin: 6px 0px;
  }
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
const Article = styled.div`
  background-color: #fff;
  border: none;
  transition: box-shadow 83ms;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%);
  border-radius: 8px;
  padding: 12px;
  margin: 6px 0px;
`;
const ArtCont = styled.div`
  .topCont {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .proImg {
    display: flex;
    align-items: center;

    img {
      width: 40px;
      border-radius: 50%;
    }
    .details {
      margin-left: 10px;
    }
    .details > div:first-child {
      font-weight: bold;
    }
    .details > div:nth-child(2),
    .details > div:nth-child(3) {
      color: grey;
      font-size: 12px;
    }
  }
  .postImg {
    width: 100%;
    display: block;
    /*     background-color: #eef3f8; */
    position: relative;
    margin-top: 10px;
    img {
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

const ReactCont = styled.div`
  .flex {
    display: flex;
    align-items: center;
    span {
      color: grey;
      font-size: 15px;
      margin-left: 5px;
    }
  }
  .reactIcon {
    padding: 5px;
    border-bottom: 1px solid gray;
    span {
      font-size: 12px;
    }
  }
  .reactSec {
    margin-top: 10px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export default Middle;
