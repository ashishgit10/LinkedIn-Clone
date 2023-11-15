import React from "react";
import styled from "styled-components";
import Ibtn from "../assets/images/feed-icon.svg";

const RightSide = () => {
  return (
    <Rightside>
      <div>
        <span>Add your feed</span>
        <img src={Ibtn}></img>
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
`;

export default RightSide;
