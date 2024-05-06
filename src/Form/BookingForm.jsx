import { memo, useRef, useState } from "react";
import styled from "styled-components";
import { Formik } from "formik";
import InputFields from "./InputField";
import ButtonLoading from "../components/ButtonLoader";
import Checkboxs from "../components/Checkbox";
import { bookingvalidationMyself } from "./formValidation";
import { Dimond_alt } from "../utils/imageSvg";
import BookingForCard from "../components/BookingForCard";
import { AppWarpper, ClosebtnX, SmoothOpen } from "../common/styleComponent";
import BookingConfirmed from "../modal/BookingConfirmed";
import {
  postBookingApiChild,
  postBookingMyselfApi,
} from "../services/Collection";
import { useLocation, useNavigate } from "react-router-dom";
import ChildForm from "./ChildForm";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const checkBoxValues = {
  label:
    "I agree to the Terms and Conditions set by the business that I am booking with. I can request a copy of the Terms and Conditions by contacting the business",
  value: "Argree",
  checkColor: "#000",
};
const FormikFieldMyself = [
  {
    name: "firstName",
    type: "text",
    placeholder: "First Name",
    // className: "input-class-name",
    // eyes:true,
  },
  {
    name: "lastName",
    type: "text",
    placeholder: "Last Name",

  },
  {
    phoneno: true,
    name: "userMobile",
    type: "text",
    placeholder: "Mobile",
    maxlength:"10",
  },
  {
    name: "email",
    type: "email",
    placeholder: "Email",
  
  },
];

const initialValue1 = {};
for (let i = 0; i < FormikFieldMyself?.length; i++) {
  initialValue1[FormikFieldMyself[i]?.name] = "";
}

const BookingForm = () => {
  const data = useLocation()?.state;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [confirmModal, setFirmModal] = useState(false);
  const [termCondition, seTtermCondition] = useState(false);
  const [selectChild, setSelectChild] = useState("myself");
  const [selectchildEmail, setSelectChildEamil] = useState("yes");
  const [valueOfpersent, setValueOfpersent] = useState({});
  const [childDob, setChildDob] = useState(null);
  const [childDoberror, setChildDoberror] = useState(null);
  const formRef = useRef();
  const token = useSelector((store) => store?.login?.data?.token);

  const submitHandleChild = () => {
    if (childDob === null) {
      setChildDoberror("DOB is required");
    }
    if (formRef.current) {
      setTimeout(() => {
        formRef.current.handleSubmit();
      }, 300);
    }
  };
  const handleSelectData = (value, string) => {
    setChildDob(string);
    setChildDoberror(null);
  };
  const submitChild = async (child) => {
    const childValue= child;
    if (null === childDob) {
      setChildDoberror("DOB is required");
    } else {
      if(selectchildEmail==='no'){
        delete childValue["childEmail"];
      }
      const childPersent = {
        clubId: data?.clubId,
        eventId: data?.scheduleEvents[0]?.eventId,
        parentFirstName: valueOfpersent?.firstName,
        parentLastName: valueOfpersent?.lastName,
        parentMobile: valueOfpersent?.userMobile,
        dialingCode: valueOfpersent?.dialingCode,
        parentEmail: valueOfpersent?.email,
        ...childValue,
        dob: childDob,
      };
      setLoading(true);
      if (data?.clubId) {
        const res = await postBookingApiChild(childPersent);
        if (res?.status == 200) {
          setFirmModal(true);
        } else {
          toast.error(res?.message || "Something went wrong");
        }
        setLoading(false);
      } else {
        toast.error("Club Id NOT FOUND!");
      }
    }
  };

  const submitHandle = async (values) => {

    const persent = {
      ...values,
      clubId: data?.clubId,
      eventId: data?.scheduleEvents[0]?.eventId,
    };
    setValueOfpersent(persent);
    if (selectChild === "child") {
      submitHandleChild();
    } else {
      if (data?.clubId) {
        setLoading(true);
        const res = await postBookingMyselfApi(persent);
        if (res?.status == 200) {
          setFirmModal(true);
        } else {
          toast.error(res?.message || "Something went wrong");
        }
        setLoading(false);
      }else{
        toast.error("Club Id NOT FOUND!");
      }
    }
  };
  const navigateBack =()=>{
    if(data?.pathlocation==="/"){
      navigate(`/${token}`)
    }else{
      navigate(data?.pathlocation)
    }
  }

  return (
    <>
      {confirmModal && <BookingConfirmed closeModal={setFirmModal} />}
      <AppWarpper>
        <BookingFormStyle>
          <ClosebtnX onClick={navigateBack}>x</ClosebtnX>
          <div className="booking-complete-logo">
            <div className="complete-img">
              <img src={Dimond_alt} alt="" />
            </div>
            <p className="complete-para">Complete your booking</p>
          </div>

          <div className="container-from-card">
            <BookingForCard data={data} />
            <Formik
              validationSchema={bookingvalidationMyself}
              initialValues={{
                ...initialValue1,
                dialingCode: "+91",
              }}
              onSubmit={submitHandle}
            >
              {({ errors, touched, handleSubmit }) => (
                <form noValidate onSubmit={handleSubmit}>
                  <div className="form-container">
                    <div className="radio-btn-container">
                      <div className="radio-box">
                        <input
                          type="radio"
                          name="selectchild"
                          value="myself"
                          className="radio-btn"
                          defaultChecked={true}
                          onChange={(e) => setSelectChild(e.target.value)}
                        />
                        <p className="radio-label">For myself</p>
                      </div>
                      <div className="radio-box">
                        <input
                          type="radio"
                          name="selectchild"
                          value="child"
                          className="radio-btn"
                          onChange={(e) => setSelectChild(e.target.value)}
                        />
                        <p className="radio-label">For my child</p>
                      </div>
                    </div>

                    <p className="form-header">Your details</p>
                    {FormikFieldMyself?.map((fieldValue, index) => {
                      return (
                        <InputFields
                          key={index}
                          field={fieldValue}
                          errors={errors}
                          touched={touched}
                        />
                      );
                    })}
                    {selectChild === "child" && (
                      <SmoothOpen height="440px">
                        <ChildForm
                          formRef={formRef}
                          data={data}
                          setLoading={setLoading}
                          submitChild={submitChild}
                          handleSelectData={handleSelectData}
                          childDoberror={childDoberror}
                          selectchildEmail={selectchildEmail}
                          setSelectChildEamil={setSelectChildEamil}
                        />
                      </SmoothOpen>
                    )}
                    <Checkboxs
                      onChange={(e) => seTtermCondition(e?.target?.checked)}
                      checkBoxValues={checkBoxValues}
                    />
                    {termCondition ? (
                      <ButtonLoading
                        // handleClick={submitHandleChild}
                        loading={loading}
                        text="Book"
                      />
                    ) : (
                      <ButtonLoading
                        type="disabled"
                        bgColor="#b3b3b3"
                        text="Book"
                      />
                    )}
                  </div>
                </form>
              )}
            </Formik>
          </div>
        </BookingFormStyle>
      </AppWarpper>
    </>
  );
};

export default memo(BookingForm);

const BookingFormStyle = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .booking-complete-logo {
    display: flex;
    gap: 16px;
    justify-content: start;
    align-items: center;
  }
  .complete-img {
    padding: 8px;
    background: white;
    width: fit-content;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .complete-para {
    color: #fff;
    font-family: Montserrat;
    font-weight: 700;
    line-height: 28px;
    font-size: 24px;
  }

  .container-from-card {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    @media (max-width: 900px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  .form-container {
    background: #f7f6f4;
    max-width: 743px;
    height: fit-content;
    border-radius: 16px;
    padding: 48px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
  }
  .form-container2 {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 16px;
  }
  .form-header {
    color: #333333;
    font-weight: 700;
    line-height: 28px;
    font-size: 20px;
    margin: 10px 0;
  }
  .radio-btn-container {
    width: 100%;
    display: flex;
    gap: 32px;
  }
  .radio-box {
    display: flex;
    justify-content: start;
    align-items: center;
    gap: 16px;
    width: fit-content;
  }
  .radio-btn {
    accent-color: #28a3a9;
    width: 20px;
    height: 20px;
  }
  .radio-label {
    font-family: "Inter";
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
  }
`;
