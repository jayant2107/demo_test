import React, { memo } from "react";
import styled from "styled-components";
import ShowText from "./ShowText";

const SlotCondition = ({ conditions }) => {
  return (
    <SlotConditionStyle style={conditions}>
      <div className="color-box"></div>
      <p className="box-lebel">
        <ShowText text={conditions?.label} />
      </p>
    </SlotConditionStyle>
  );
};

export default memo(SlotCondition);

const SlotConditionStyle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 12px;

  .color-box {
    width: ${(props) => props.style.boxSize || "35px"};
    height: ${(props) => props.style.boxSize || "35px"};
    background: ${(props) => props.style.color || "gray"};
    border-radius: 8px;
  }
  .box-lebel {
    margin: 16px 0;
    font-weight: ${(props) => props.style.fontWeight || "700"};
    font-family: Montserrat;
    font-size: ${(props) => props.style.fontSize || "20px"};
    line-height: 22px;
    color: #444a69;
  }
`;


