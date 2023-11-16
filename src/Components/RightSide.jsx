import React from "react";
import styled from "styled-components";
import Ibtn from "../assets/images/feed-icon.svg";
const RightSide = () => {
  const Data = {
    Products: [
      {
        id: "1",
        title: "India’s insurtech boom",
        time: "1d ago",
      },
      {
        id: "2",
        title: "Luxury malls drive retail growth",
        time: "3d ago",
      },
      {
        id: "3",
        title: "Firms hire more women in tech",
        time: "5d ago",
      },
      {
        id: "4",
        title: "How tech can aid climate action",
        time: "2d ago",
      },
      {
        id: "5",
        title: "India Inc rehires former CXOs",
        time: "4d ago",
      },
      {
        id: "6",
        title: "Trends shaping tech hiring",
        time: "6d ago",
      },
      {
        id: "7",
        title: "The top MBA in the US for career growth",
        time: "1d ago",
      },
      {
        id: "8",
        title: "Job market sizzles for chefs",
        time: "4d ago",
      },
      {
        id: "9",
        title: "Public banks woo CXOs",
        time: "3d ago",
      },
      {
        id: "10",
        title: "Manufacturing needs more freshers",
        time: "2d ago",
      },
    ],
  };

  return (
    <Rightside>
      <div>
        <div className="flex-title">
          <span>Linkedin News</span>
          <img src={Ibtn}></img>
        </div>
        <div className="newsSec">
          <div className="data">
            <ul>
              {Data.Products.map((product) => (
                <li key={product.id}>
                  <div className="title">{product.title}</div>
                  <div className="time">{product.time}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Rightside>
  );
};
const Rightside = styled.div`
  background-color: #fff;
  border: none;
  transition: box-shadow 83ms;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%);
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 60px;
  .flex-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .newsSec {
    padding:8px 0px 8px  8px;
  }
  .data {
    padding-left: 12px;
  }
  .title {
    margin-top: 7px;
    font-weight: bold;
    font-size: 14px;
  }
  .time {
    color: grey;
    font-size: 13px;
  }
  li:hover {
    background-color: #f4f3efff;
  }
`;

export default RightSide;
