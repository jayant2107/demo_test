import React from "react";
import { ConfigProvider, Select } from "antd";
import styled from "styled-components";
import vectrdropdown from "../assets/Vector11.svg";

function Searchdropdown({width, data, placeholder, handleclick,
  defaultValue 
}) {
  
  const vectoricon = () => {
    return (
      <Iconwrap>
        <img className="icon-arrow" src={vectrdropdown} alt="" />
      </Iconwrap>
    );
  };
  const loadingCheck = data===null?true:false
  return (
    <>
      <SelecterStyle width={width}>
        <ConfigProvider
          theme={{
            components: {
              Select: {
                colorTextPlaceholder: "#2E3038",
                optionSelectedFontWeight: 600,
                fontSize: "16px",
              },
            },
            token: {
              controlHeight: "48",
              colorBorder: "#2E3038",
              colorPrimary: "#2E3038",
              borderRadius: 5,
            },
          }}
        >
          <Select
            style={{
              width: "100%",
              height: "48px",
            }}
            defaultValue={defaultValue}
            options={data}
            placeholder={placeholder}
            onChange={(e,label) => handleclick(e,label)}
            loading={loadingCheck}
            suffixIcon={loadingCheck ? undefined : vectoricon()}
          />
        </ConfigProvider>
       
      </SelecterStyle>
    </>
  );
}

export default Searchdropdown;

const SelecterStyle = styled.div`
  width: ${(props) => props.width || "728px"};
  height: 48px;

`;

const Iconwrap = styled.div`
  width: 42px;
  height: 48px;
  background: #d9dbe1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  outline: none;
  border-bottom-right-radius: 5px;
  border-top-right-radius: 5px;
  border: 1px solid #2e3038;
  margin-right: -11px;


`;
