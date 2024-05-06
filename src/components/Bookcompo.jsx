import React from "react";
import moment from "moment";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ButtonLoading from "./ButtonLoader";
import Days from "../common/Days";
import { colorslotCondition } from "../common/styleComponent";
import ShowText from "../common/ShowText";


function Bookcompo({ data }) {
  const pathlocation = useLocation()?.pathname;

  const navigate = useNavigate();
  const endData = moment(data?.endTime).format('h:mm:ss A');
  const startTime = moment(data?.startTime).format('h:mm:ss A');

  const handlebook = () => {
    if (pathlocation === "/" || pathlocation === "/searchMelbourne") {
      navigate("/complitebooking", { state:{...data ,pathlocation:pathlocation }});
    } else if (pathlocation === "/oneoffevent") {
      navigate("/complitebooking",{state:{...data ,pathlocation:pathlocation  }});
    }
  };
  const backgroundcolor = colorslotCondition?.fullColor;


  return (
    <>
    
      <Boookbox backgroundcolor={backgroundcolor}>
        <div className="book-compo-wrap">
          <div>
            <div className="wraper-box-timming">
              <div className="mini-circle"></div>
              <p className="timming">{endData } - {startTime}</p>
            </div>
            <div className="wraper-days">
              <Days data={data}  />
            </div>
            <div className="dolphins-year"><ShowText text={data?.scheduleEvents[0]?.eventName}/></div>
            <div className="wrapper-venue">
              <h3 className="venue">Venue:</h3>
              <p className="melbourne-swimming">
                {data?.scheduleEvents[0]?.venue?.venueName}
              </p>
            </div>
            <div className="wrapper-coach">
              <h3>Coach:</h3>
              <p className="melbourne-swimming">
              <ShowText text={["Roy Woods", "Stefan Surande", "Stefan Surande"]}/>
                </p>
            </div>
          </div>

          <div className="wrapper-button-book">
            <ButtonLoading
              handleClick={handlebook}
              height="48px"
              width="243px"
              text="Book"
            />
          </div>
        </div>
      </Boookbox>
    </>
  );
}

export default Bookcompo;

const Boookbox = styled.div`
  .book-compo-wrap {
    width: 100%;
    min-height: 341px;
    height: 100%;
    padding: 24px;
    border-radius: 16px;
    background: ${({ backgroundcolor }) =>
      backgroundcolor ? "#F4F5F7" : "#fff"};
    border-left: ${({ backgroundcolor }) =>
      backgroundcolor ? "8px solid #969BAB;" : "none"};
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
  .wraper-box-timming {
    display: flex;
    gap: 16px;
  }

  .mini-circle {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    background: #969bab;
  }
  .days-label {
    font-size: 16px;
    font-weight: 700;
    font-family: Montserrat;
    line-break: 32px;
  }

  .not-active {
    padding: 3px 6px;
    border-radius: 8px;
    font-weight: 600;
    font-family: Inter;
    font-size: 26px;
    line-height: 24px;
    color: #0b1e61;
    text-align: center;
  }
  .timming {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 28px;
    text-align: left;
  }
  .days {
    font-family: Montserrat;
    font-size: 16px;
    font-weight: 700;
    line-height: 32px;
    text-align: left;
  }
  .days-words p {
    font-family: Inter;
    font-size: 20px;
    font-weight: 600;
    text-align: center;
  }
  .days-words {
    display: flex;
    gap: 15px;
  }
  .wraper-days {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 23px;
  }

  .melbourne-swimming {
    font-size: 15px;
  }
  .dolphins-year {
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 700;
    margin-top: 19px;
  }
  .wrapper-venue {
    display: flex;
    align-items: center;
    font-family: Montserrat;
    font-size: 16px;
    gap: 6px;
    margin-top: 19px;
  }
  .wrapper-coach {
    display: flex;
    align-items: center;
    font-family: Montserrat;
    font-size: 16px;
    gap: 6px;
    margin-top: 19px;
  }
  .wrapper-button-book {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 480px) {
    .book-compo-wrap {
      padding: 14px;
    }
    .days-words {
      gap: 4px;
    }
    .wrapper-venue {
      flex-direction: column;
      align-items: start;
    }
    .wrapper-coach {
      flex-direction: column;
      align-items: start;
    }
  }

  @media (max-width: 1297px) {
    .melbourne-swimming {
      font-size: 13px;
    }
  }

  @media (max-width: 365px) {
    .melbourne-swimming {
      font-size: 12px;
    }
  }

  @media (max-width: 380px) {
    .timming {
      font-size: 14px;
    }
  }

  @media (max-width: 380px) {
    .dolphins-year {
      font-size: 16px;
    }
  }
`;
