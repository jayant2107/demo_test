import React from "react";
import moment from "moment";
import styled from "styled-components";
import { HorizontaLine } from "../common/styleComponent";
import Days from "../common/Days";
import { colorslotCondition } from "../common/styleComponent";
import SlotCondition from "../common/SlotCondition";
import ShowText from "../common/ShowText";

const Available = {
  label: "Available",
  boxSize: "25px",
  color: colorslotCondition.availableColor,
  fontSize: "12px",
  fontWight: 600,
};

const almostFull = {
  label: "Almost full",
  boxSize: "25px",
  color: colorslotCondition.fullColor,
  fontSize: "12px",
  fontWight: 600,
};
const waitList = {
  label: "Wait list",
  boxSize: "25px",
  color: colorslotCondition.waitColor,
  fontSize: "12px",
  fontWight: 600,
};

const BookingForCard = ({ data }) => {
  console.log(data, "ssssssssssssssfdfdff");

  const endData = moment(data?.endTime).format("h:mm:ss A");
  const startTime = moment(data?.startTime).format("h:mm:ss A");

  const DolphinsYears = {
    label: data?.scheduleEvents[0]?.eventName,
    boxSize: "28px",
    checkColor: "#969BAB",
    fontSize: "20px",
    fontWight: 700,
    fontColor: "#0B1E61",
  };
  return (
    <BookingCardStyle>
      <h1 className="for-booking-heading">You are booking for</h1>
      <SlotCondition conditions={DolphinsYears} />
      <div className="key-value-container">
        <p className="key-heading">Venue:</p>
        <p className="value-heading">
          <ShowText text={data?.scheduleEvents[0]?.venue?.venueName} />
        </p>
      </div>
      <div className="key-value-container">
        <p className="key-heading">Coach:</p>
        <p className="value-heading">
        <ShowText text={["Roy Woods", "Stefan Surande", "Stefan Surande"]}/>
        </p>
      </div>
      <div className="key-value-container">
        <p className="key-heading">Price:</p>
        <p className="value-heading"> AUD 250</p>
      </div>
      <p className="time-range">
        {endData} - {startTime}
      </p>
      <Days data={data} />
      {data?.recurrance === "2" && <p className="recurring-para">Recurring</p>}
      {data?.recurrance === "1" && <p className="recurring-para">One off</p>}
      <HorizontaLine color="#C4C4C4" height="1px" />
      <div className="check-box-container">
        <SlotCondition conditions={Available} />
        <SlotCondition conditions={almostFull} />
        <SlotCondition conditions={waitList} />
      </div>
    </BookingCardStyle>
  );
};

export default BookingForCard;

const BookingCardStyle = styled.div`
  padding: 48px;
  max-width: 480px;
  height: fit-content;
  border-radius: 16px;
  background: #f7f6f4;
  display: flex;
  flex-direction: column;
  gap: 8px;

  .for-booking-heading {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: 700;
    font-family: Montserrat;
    line-height: 32px;
  }
  .key-value-container {
    display: flex;
    gap: 5px;
    justify-content: start;
    align-items: baseline;
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
  .time-range {
    margin: 16px 0;
    font-weight: 700;
    font-family: Montserrat;
    font-size: 20px;
    line-height: 28px;
    color: #444a69;
  }

  .recurring-para {
    font-family: Inter;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    color: #0b1e61;
    border-radius: 8px;
    padding: 4px 16px;
    background: #ffffff;
    width: 100px;
  }

  .check-box-container {
    display: flex;
    justify-content: start;
    gap: 16px;
    margin-top: 30px;
  }

  @media (max-width: 1000px) {
  }
`;
