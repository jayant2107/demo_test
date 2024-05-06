import React, { memo } from "react";
import styled from "styled-components";

const AppLoader = ({loadingSize,border}) => {
  const borderset = border?`${border} solid transparent`:"8px solid transparent"
  return (
    <LoadingWarpper>
      <LoadingBox border={borderset}  width={loadingSize} height={loadingSize}>
        <div className="box-loader1"></div>
        <div className="box-loader2"></div>
        <div className="box-loader3"></div>
      </LoadingBox>
    </LoadingWarpper>
  );
};

export default memo(AppLoader);

const LoadingWarpper = styled.div`
  width: 100%;
  /* min-height: 100vh; */
  position: relative;
  /* left: 0;
  right: 0;
  bottom: 00;
  top: 0; */
  z-index: 999999;
  /* background-color: rgba(0, 0, 0, 0.5); */
  display: flex;
  justify-content: center;
  align-items: center;

`;

const LoadingBox = styled.div`
  margin: auto;
  height: ${(props) => props.height || "60px"};
  width: ${(props) => props.width || "60px"};
  position: relative;
  animation: rotate2Sm 1.5s linear infinite;

  @keyframes rotate2Sm {
    to {
      transform: rotate(360deg);
    }
  }

  .box-loader1 {
    position: absolute;
    height: ${(props) => props.height || "60px"};
    width: ${(props) => props.width || "60px"};
    border: ${(props) => props.border};
    border-radius: 100%;
    border-top-color: #33374e;
    border-bottom-color: #28a3a9;
  }
  .box-loader2 {
    position: absolute;
    height: ${(props) => props.height || "60px"};
    width: ${(props) => props.width || "60px"};
    border-radius: 100%;
    border: ${(props) => props.border};
    border-bottom-color: #28a3a9;
    rotate: 75deg;
  }
  .box-loader3 {
    position: absolute;
    height: ${(props) => props.height || "60px"};
    width: ${(props) => props.width || "60px"};
    border-radius: 100%;
    border: ${(props) => props.border};
    border-top-color: #28a3a9;
    rotate: 109deg;
  }
`;
