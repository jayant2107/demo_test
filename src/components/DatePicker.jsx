import React, { memo, useEffect } from "react";
import { ConfigProvider, DatePicker } from "antd";
import styled from "styled-components";

const DatePickerComponent = ({ childDoberror, handleSelectData }) =>{

  return (
  <DateStyle>
    <ConfigProvider
      theme={{
        components: {
          DatePicker: {
            colorTextPlaceholder: "#404041",
            activeBorderColor: "#2e3038",
            hoverBorderColor: "#2e3038",
            colorBgContainer: "transparent",
            fontWeightStrong:600
          },
        },
        token: {
          colorBorder: "#2e3038",
          fontWeightStrong: 900,
          fontSize:16
        },
      }}
    >
      <DatePicker
        style={{
          width: "100%",
          height: "48px",
        }}
        size="lagre"
        onChange={handleSelectData}
        placeholder="Select DOB"
      />
    </ConfigProvider>
    {!(childDoberror===null)&&<p className="input-error">{childDoberror}</p>}
  </DateStyle>)
}
export default memo(DatePickerComponent);

const DateStyle = styled.div`
  .input-error {
    width: 100%;
    color: red;
    font-weight: 500;
    font-size: 13px;
    height: 23px;
    margin: 0;
    padding: 0;
  }
`;
