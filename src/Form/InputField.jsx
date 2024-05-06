import React, { memo, useState } from "react";
import { Field } from "formik";
import styled from "styled-components";
import { IoMdEyeOff, IoIosEye } from "react-icons/io";
import { countriesCode } from "../utils/constantPath";

function InputFields({ field, errors, touched }) {
  const [eyesbtn, setEyesbtn] = useState(false);

  let type = field?.type;
  if (type === "password") {
    if (eyesbtn === true) {
      type = "text";
    }
  }

  let className = field?.className;

  const numberLength=(e) => {
    if(field?.phoneno){
      e.target.value = e.target.value.replace(/[^0-9]/g, '');
    }
    else if(field?.maxlength){
      e.target.value = e.target.value
    }
  }
   

  return (
    <InputContainer width={field?.width} height={field?.height}>
      {field?.label && <label className="label">{field?.label}</label>}

      <div className={className ? className : "icon-input-box"}>
        {field?.phoneno && (
          <div className="selecter-box">
            <select name="dialingCode" className="select-phone">
              {countriesCode?.map((el) => (
                <option  className="option-box" value={el.code}>
                  <p className="option-para">
                    {el.code} {el.name}
                  </p>
                </option>
              ))}
            </select>
          </div>
        )}
        <Field
          className="input-field"
          name={field?.name}
          type={field?.type}         
          placeholder={field?.placeholder}
          maxLength={field?.maxlength}
          onInput={numberLength}
        />
        {field?.eyes && (
          <span onClick={() => setEyesbtn(!eyesbtn)}>
            {eyesbtn ? (
              <IoIosEye className="eyes-icon" />
            ) : (
              <IoMdEyeOff className="eyes-icon" />
            )}
          </span>
        )}
      </div>
      <p className="input-error">
        {errors[field.name] && touched[field.name] && errors[field.name]}
      </p>
    </InputContainer>
  );
}
export default memo(InputFields);

const InputContainer = styled.div`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;

  .input-field {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    font-weight: 600;
    font-family: Montserrat;
  }
  .label {
    width: 100%;
  }
  .icon-input-box {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    border: 1px solid #2e3038;
    padding: 8px 16px;
    height: ${(props) => props.height || "56px"};
    outline: none;
  }

  .eyes-icon {
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .input-error {
    width: 100%;
    color: red;
    font-weight: 500;
    font-size: 13px;
    height: 23px;
    margin: 0;
    padding: 0;
  }
  .selecter-box {
    width: 115px;
    height: 40px;
    padding-right: 10px;
    margin-right: 10px;
    border-right: 1px #969bab solid;
  }
  .select-phone {
    width: 100%;
    height: 100%;
    border: none;
    background: no-repeat;
    outline: none;
    font-size: 20px;
    cursor: pointer;
  }
  option.option-box {
    font-size: 20px;
    color: black;
    font-weight: 500;
    margin: 10px 0;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
