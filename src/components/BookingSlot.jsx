import React, { useState } from "react";
import styled from "styled-components";
import Days from "../common/Days";
import ButtonLoading from "../components/ButtonLoader";
import { colorslotCondition } from "../common/styleComponent";
import SlotCondition from "../common/SlotCondition";

let timeaviable = {
  label: "6:00 PM - 6:45 PM",
  color: colorslotCondition.availableColor,
};

const BookingSlot = () => {
  const [loading, setLoading] = useState(false);
  return (
    <BookingSlotStyle boxcolor={colorslotCondition.availableColor}>
      <div>
        <SlotCondition conditions={timeaviable} />
        <Days />
      </div>
      <p className="para-heading">Dolphins 10-12 Years </p>
      <div className="key-value-container">
        <p className="key-heading">Coach:</p>
        <p className="value-heading">Roy Woods, Stefan Surande...</p>
      </div>
      <div className="key-value-container">
        <p className="key-heading">Price:</p>
        <p className="value-heading"> AUD 250</p>
      </div>
      <div className="btn-container" onClick={() => setLoading(true)}>
        <ButtonLoading width="243px" loading={loading} text="Book" />
      </div>
    </BookingSlotStyle>
  );
};

export default BookingSlot;

const BookingSlotStyle = styled.div`
  background: #f4f5f7;
  max-width: 411px;
  padding: 8px 16px 16px 16px;
  border-radius: 16px;
  border-left: ${(props) => `8px solid ${props.boxcolor}`};

  display: flex;
  flex-direction: column;
  gap: 16px;
  .range-time-container {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 12px;
  }
  .color-box {
    width: 30px;
    height: 30px;
    background: ${(props) => props.boxcolor || "gray"};
    border-radius: 8px;
  }
  .time-range {
    margin: 16px 0;
    font-weight: 700;
    font-family: Montserrat;
    font-size: 20px;
    line-height: 28px;
    color: #444a69;
  }
  .para-heading {
    font-weight: 700;
    font-family: Montserrat;
    font-size: 20px;
    line-height: 28px;
    color: #0b1e61;
  }
  .key-value-container {
    display: flex;
    gap: 5px;
    justify-content: start;
    align-items: center;
  }
  .key-heading {
    font-weight: 700;
    font-family: Montserrat;
    font-size: 20px;
    line-height: 32px;
  }
  .value-heading {
    font-weight: 400;
    font-family: Montserrat;
    font-size: 16px;
    line-height: 32px;
    color: #0b1e61;
  }
  .btn-container {
    width: fit-content;
    margin: auto;
    padding: 10px 0;
  }
`;
