import React, { memo } from "react";
import styled from "styled-components";
import AppLoader from "../Loader/AppLoader";

const ButtonLoading = ({
  type,
  bgColor,
  onlyLoading,
  text,
  loading,
  width,
  height,
  padding,
  handleClick,
}) => {
  if (type === "disabled") {
    return (
      <LoadingBtnStyle
        bgColor={bgColor}
        width={width}
        height={height}
        padding={padding}
        type={type}
      >
        <div className="buttonSave">{text}</div>
      </LoadingBtnStyle>
    );
  }
  return (
    <LoadingBtnStyle
      bgColor={bgColor}
      width={width}
      height={height}
      padding={padding}
    >
      {loading || onlyLoading ? (
        <AppLoader loadingSize="45px" border="6px" />
      ) : (
        <button
          type="submit"
          className="buttonSave acitveBtn"
          onClick={handleClick}
        >
          {text}
        </button>
      )}
    </LoadingBtnStyle>
  );
};

export default memo(ButtonLoading);

const LoadingBtnStyle = styled.div`
  .buttonSave {
    width: ${(props) => props.width || "100%"};
    height: ${(props) => props.height || "fit-content"};
    padding: ${(props) => props.padding || "12px 20px"};
    font-family: Montserrat;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    line-height: 36px;
    border-radius: 30px;
    background: ${(props) => props.bgColor || "#28a3a9"};
    letter-spacing: 1px;
    border: none;
    outline: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.5s ease-in-out;
    gap: 5px;

    &:hover {
      background: ${(props) => (props.type==="disabled")?props?.bgColor:"#0c6569"};
    }
    @media (max-width: 1200px) {
      font-size: 15px;
    }
 
  }
`;
