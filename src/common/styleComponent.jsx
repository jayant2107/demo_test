import styled from "styled-components";
import { fathflower } from "../utils/imageSvg";


export const colorslotCondition= {
  availableColor: "#3EB888",
  fullColor: "#FFBD12",
  waitColor: "#969BAB",
};

export const VerticalLine = styled.div`
  width: ${(props) => props.width || "2px"};
  height: ${(props) => props.height || "100%"};
  background: ${(props) => props.color || "#dcdceb"};
  margin: ${(props) => props.margin || "0"};
`;
export const HorizontaLine = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "2px"};
  background: ${(props) => props.color || "#dcdceb"};
  margin: ${(props) => props.margin || "0"};
`;

export const AppWarpper = styled.div`
  background-color: rgb(51, 55, 78);
  padding: 32px 80px;
  width: 100%;
  min-height: 100vh;
  position: relative;
  @media (max-width: 1000px) {
    padding: 15px 40px;
  }
  @media (max-width: 600px) {
    padding: 15px;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: -32px;
    width: 200px;
    height: 200px;
    background-image: url(${fathflower});
    background-position: 100%;
    background-size: contain;
  }
`;

export const ClosebtnX = styled.div`
  width: 30px;
  height: 30px;
  padding-bottom: 3px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 46px;
  right: 46px;
  cursor: pointer;
`;

export const SmoothOpen = styled.span`
  width: 100%;
  height: ${(props) => props.height || "0"};
  animation-name: set-animation;
  animation-duration: 0.5s;

  @keyframes set-animation {
    from {
      opacity: 0;
      height: 0;
      /* transform: scale(0); */
      visibility: hidden;
    }
    to {
      opacity: 1;
      visibility: visible;
      width: ${(props) => props.width || "100%"};
      height: ${(props) => props.height || "100px"};
      /* transform: scale(1); */
    }
  }
`;
