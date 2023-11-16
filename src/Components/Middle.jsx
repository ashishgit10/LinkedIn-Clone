import React from "react";
import styled from "styled-components";
const Middle = () => {
  return (
    <Middleside>
      <div>Share</div>
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
`;
export default Middle;
