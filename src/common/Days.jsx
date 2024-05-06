
import moment from "moment";
import React, { memo } from "react";
import styled from "styled-components";

const DaysArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Days = ({ data }) => {
  const runsEvery = data?.runsEvery;

  return (
    <DayStyle>
      {data?.recurrance === "2" && (
        <>
          {" "}
          <p className="days-label">Days</p>
          {DaysArray.map((el, index) => (
            <p
              className={runsEvery.includes(index) ? "not-active day-active" : "not-active"}
            >
              {el?.slice(0, 1)}
            </p>
          ))}
        </>
      )}
      {data?.recurrance === "1" && (
        <>
          {" "}
          <p className="days-label">Date</p>
          <p className="data-para">
            {moment(data?.createdAt).format("MMM Do YY")}
          </p>
        </>
      )}
    </DayStyle>
  );
};

export default memo(Days);

const DayStyle = styled.div`
  display: flex;
  gap: 8px;
  justify-content: start;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;

  .days-label {
    font-size: 16px;
    font-weight: 700;
    font-family: Montserrat;
    line-break: 32px;
  }

  .not-active {
    width: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    font-weight: 600;
    font-family: Inter;
    font-size: 22px;
    line-height: 24px;
    color: #0b1e61;
    text-align: center;
  }
  .day-active {
    background: #b3e5d1;
  }
  .data-para{
    font-weight: 600;
    font-family: Inter;
    padding: 3px 6px;
    border-radius: 8px;
    background: #E8EDFC;
    font-size: 18px!important;
    color: #0b1e61;
    text-align: center;
  }
`;
