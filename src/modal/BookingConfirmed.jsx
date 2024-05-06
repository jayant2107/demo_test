import React from "react";
import styled from "styled-components";
import { Dimond_alt } from "../utils/imageSvg";
import ButtonLoading from "../components/ButtonLoader";
import { ClosebtnX } from "../common/styleComponent";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BookingConfirmed = ({ closeModal }) => {
  const navigate = useNavigate()
  const token = useSelector((store) => store?.login?.data?.token);
  return (
    <BookConfirmedStyle>
      <ClosebtnX onClick={() => closeModal(false)}>x</ClosebtnX>
      <div className="modal-container">
        <div className="booking-complete-logo">
          <div className="complete-img">
            <img src={Dimond_alt} alt="" />
          </div>
          <p className="complete-para">Complete your booking</p>
        </div>
        <p className="modal-text">
          Thank you for booking with us! You should receive your confirmation
          email shortly!
        </p>

        <div className="btn-confrim">
          {" "}
          <ButtonLoading height="48px" width="247px" text="Confirm Booking" handleClick={()=>navigate(`/${token}`)} />
        </div>
      </div>
    </BookConfirmedStyle>
  );
};

export default BookingConfirmed;

const BookConfirmedStyle = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
    /* background-color: rgb(51, 55, 78); */
  z-index: 9999999;
  width: 100%;
  height: 100vh;

  .modal-container {
    width: 807px;
    height: 328px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: #f7f6f4;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    border-radius: 32px;
    padding: 52px;
    animation-name: set-animation;
    animation-duration: 0.7s;
    @media (max-width: 730px) {
      width: 95%;
      margin: auto;
    }
    @media (min-width: 730px) {
      @keyframes set-animation {
        from {
          top: 0;
          opacity: 0;
        
        }
        to {
          opacity: 1;
          visibility: visible;
          top: ${(props) => props.top || "50%"};

        }
      }
    }
  }

  .booking-complete-logo {
    display: flex;
    gap: 16px;
    justify-content: start;
    align-items: center;
  }
  .complete-img {
    padding: 8px;
    background: white;
    border: 2px solid #192d5f;
    width: fit-content;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .complete-para {
    color: #333333;
    font-family: Montserrat;
    font-weight: 700;
    line-height: 28px;
    font-size: 24px;
  }
  .modal-text {
    font-family: Montserrat;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    margin: 35px;
  }
  .btn-confrim {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
