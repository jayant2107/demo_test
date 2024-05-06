import { memo, useEffect, useState } from "react";
import { Formik } from "formik";
import InputFields from "./InputField";
import {
  bookingvalidationWithchild,
  bookingvalidationWithchildemail,
} from "./formValidation";
import { SmoothOpen } from "../common/styleComponent";
import DatePickerComponent from "../components/DatePicker";

const FormikFieldChild = [
  {
    name: "childFirstName",
    type: "text",
    placeholder: "First Name",
  },
  {
    name: "childLastName",
    type: "text",
    placeholder: "Last Name",
  },
  // {
  //   name: "child_dob",
  //   type: "text",
  //   placeholder: "Date of Birth",
  // },
];
const childemail = {
  name: "childEmail",
  type: "email",
  placeholder: "Email",
};
const initialValue2 = {};
for (let i = 0; i < FormikFieldChild?.length; i++) {
  initialValue2[FormikFieldChild[i]?.name] = "";
}

const ChildForm = ({
  setSelectChildEamil,
  selectchildEmail,
  submitChild,
  formRef,
  handleSelectData,
  childDoberror,
}) => {
  let validations = bookingvalidationWithchild;
  let initialValue = {
    ...initialValue2,
  };
  if (selectchildEmail === "yes") {
    initialValue = {
      ...initialValue2,
      childEmail: null,
    };
    validations = bookingvalidationWithchildemail;
  }

  return (
    <Formik
      innerRef={formRef}
      validationSchema={validations}
      initialValues={initialValue}
      onSubmit={submitChild}
    >
      {({ errors, touched, handleSubmit }) => (
        <form noValidate onSubmit={handleSubmit}>
          <div className="form-container2">
            <p className="form-header">Child details</p>
            {FormikFieldChild?.map((fieldValue, index) => {
              return (
                <InputFields
                  key={index}
                  field={fieldValue}
                  errors={errors}
                  touched={touched}
                />
              );
            })}
            <DatePickerComponent
              childDoberror={childDoberror}
              handleSelectData={handleSelectData}
            />

            <div className="radio-btn-container">
              <div className="radio-box">
                <input
                  type="radio"
                  name="childemail"
                  value="yes"
                  className="radio-btn"
                  defaultChecked={true}
                  onChange={(e) => setSelectChildEamil(e.target.value)}
                />
                <p className="radio-label">Has Email</p>
              </div>
              <div className="radio-box">
                <input
                  type="radio"
                  name="childemail"
                  value="no"
                  className="radio-btn"
                  onChange={(e) => setSelectChildEamil(e.target.value)}
                />
                <p className="radio-label">Doesn’t have email</p>
              </div>
            </div>
            {selectchildEmail === "yes" && (
              <InputFields
                field={childemail}
                errors={errors}
                touched={touched}
              />
            )}
          </div>
        </form>
      )}
    </Formik>
  );
};

export default memo(ChildForm);
