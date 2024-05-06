import React, { memo } from "react";
import { ConfigProvider, Tooltip } from "antd";

const ShowText = ({ text }) => {


    // Tooltip for Array of string---//
  if (Array.isArray(text)) {
    const showtextArray = text
      ? text
      : ["Roy Woods", "Stefan Surande", "Stefan Surande"];
    const title = showtextArray.toString();
    const color = "#f4f5f7";
    return showtextArray?.length <= 2 ? (
      <p>{title}</p>
    ) : (
      <ConfigProvider
        theme={{
          token: {
            colorText: "rgba(0, 0, 0, 0.88)",
            colorTextLightSolid: "rgba(0, 0, 0, 0.88)",
            fontSize: 18,
            motionDurationFast: "0.5s",
          },
        }}
      >
        <Tooltip title={title} color={color}>
          {showtextArray[0]}, {showtextArray[1]}...
        </Tooltip>
      </ConfigProvider>
    );
  // Tooltip for string text ---//
  } else {
    const texter = text ? text : "";
    const showText = texter?.slice(0, 20);
    const color = "#f4f5f7";
    return (
      <>
        {texter?.length <= 20 ? (
          <p>{texter}</p>
        ) : (
          <ConfigProvider
            theme={{
              token: {
                colorText: "rgba(0, 0, 0, 0.88)",
                colorTextLightSolid: "rgba(0, 0, 0, 0.88)",
                fontSize: 18,
                motionDurationFast: "0.5s",
              },
            }}
          >
            <Tooltip title={texter} color={color}>
              {showText}...
            </Tooltip>
          </ConfigProvider>
        )}
      </>
    );
  }
};

export default memo(ShowText);
