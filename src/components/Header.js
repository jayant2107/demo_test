import React from "react";
import styled from "styled-components";
import shareandroid from "../assets/share-android.svg";
import fblogo from "../assets/facebook.svg";
import linkdinlogo from "../assets/linkedin.svg";
import googlelogo from "../assets/google-circled.svg";
import grouplogo from "../assets/Group 1597882914.svg";
import telegramlogo from "../assets/telegram.svg";
import patternupperimage from "../assets/Pattern13.png";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { imageBaseURL } from "../utils/constantPath";

let socialmedialink = [
  {
    id: "1",
    logo: fblogo,
  },
  {
    id: "2",
    logo: linkdinlogo,
  },
  {
    id: "3",
    logo: googlelogo,
  },
  {
    id: "4",
    logo: grouplogo,
  },
  {
    id: "5",
    logo: telegramlogo,
  },
];

function Header() {
  const clubDetails = useSelector((state) => state?.login?.data);
  const location = useLocation()?.pathname;

  return (
    <>
      <HeaderWrapper>
        <div>
          {location === "/" ? null : (
            <img
              className="pattern-upper-image"
              src={patternupperimage}
              alt=""
            />
          )}
        </div>
        <div className="main-wraper">
          <div className="header-left-side">
            <div className="header-log-container">
              <img
                className="header-logo"
                src={imageBaseURL + clubDetails?.clubLogo}
                alt=""
              />
            </div>
            <p className="header-haiding">{clubDetails?.clubName}</p>
          </div>

          <div className="main-wrap-right-side">
            <div className="wraper-right-side">
              <p className="header-link">Share Bookings Link</p>
              <img className="share-android-logo" src={shareandroid} alt="" />
            </div>
            <div className="social-media-logo-wrap">
              {socialmedialink?.length > 0 &&
                socialmedialink.map((ele) => (
                  <img className="all-logo-class" src={ele.logo} alt="socialmedialink" />
                ))}
            </div>
          </div>
        </div>
      </HeaderWrapper>
    </>
  );
}

export default Header;

const HeaderWrapper = styled.div`
  .main-wraper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 26px 40px 26px 40px;
  }

  .header-haiding {
    width: fit-content;
    height: 40px;
    font-weight: 700;
    size: 32px;
    display: flex;
    align-items: center;
  }

  .header-left-side {
    width: fit-content;
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
  }
  .header-log-container {
    width: 44px;
    height: 44px;
    border-radius: 100%;
    background: #2e3038;
    padding: 2px;
  }

  .header-logo {
    height: 100%;
    width: 100%;
    border-radius: 100%;
    object-fit: cover;
    background: #fff;
    padding: 2px;
  }
  .header-link {
    font-size: 20px;
    font-weight: 700;
  }

  .share-android-logo {
    width: 25px;
    height: 25px;
  }

  .social-media-logo-wrap {
    width: 219px;
    height: 41px;
    border-radius: 10px;
    border: 1px 0px 0px 0px;
    border: 1px solid #000000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16.21px;
  }

  .all-logo-class {
    width: 25.43px;
    height: 28.63px;
  }

  .wraper-right-side {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
  }

  .main-wrap-right-side {
    display: flex;
    align-items: center;
    gap: 13px;
  }
  .pattern-upper-image {
    width: 100%;
    height: 16px;
  }

  @media (max-width: 940px) {
    .main-wraper {
      flex-direction: column;
    }
  }

  @media (max-width: 600px) {
    .main-wrap-right-side {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
    }

    .wraper-right-side {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  @media (max-width: 409px) {
    .header-haiding {
      font-size: 15px;
      font-weight: 700;
    }
  }

  @media (max-width: 394px) {
    .header-haiding {
      font-size: 10px;
      font-weight: 700;
    }
  }

  @media (max-width: 601px) {
    .header-link {
      font-size: 14px;
    }
  }

  @media (max-width: 409px) {
    .header-link {
      font-size: 14px;
    }
  }

  @media (max-width: 394px) {
    .header-link {
      font-size: 9px;
    }
  }
`;
