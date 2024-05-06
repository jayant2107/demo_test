import { ConfigProvider, Checkbox } from "antd";
import { memo } from "react";

import styled from "styled-components";

const Checkboxs = memo(({onChange, checkBoxValues }) => {

  return (
    <CheckboxStyle>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: checkBoxValues?.checkColor,
            controlInteractiveSize: checkBoxValues?.checkBoxSize || 24,
            fontSize: checkBoxValues?.fontSize || 14,
            colorText: checkBoxValues?.fontColor || "#000",
          },
        }}
      >
        <div className="checkbox-boxes">
          <Checkbox
            onChange={onChange}
            style={{
              fontWeight: checkBoxValues?.fontWight || 400,
            }}
            value={checkBoxValues?.value}
          >
            {checkBoxValues?.label}
          </Checkbox>
          {/* <p className="check-box-lebel">{checkBoxValue?.label}</p> */}
        </div>
      </ConfigProvider>
    </CheckboxStyle>
  );
});

export default Checkboxs;

const CheckboxStyle = styled.div`
    margin: 10px 0;
  .checkbox-boxes {
    width: fit-content;
    display: flex;
    gap: 16px;
  }
  .check-box-lebel {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
  }
`;
