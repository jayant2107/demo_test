import * as Yup from "yup";

export const bookingvalidationMyself = Yup.object().shape({
  firstName: Yup.string()
    .required("First Name is required")
    .min(2, "First Name must be at least 2 characters")
    .max(30, "First Name must be at least 30 characters"),
  lastName: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name must be at least 2 characters")
    .max(30, "Last Name must be at least 30 characters"),
  userMobile: Yup.string()
    .required("Mobile Number is required")
    .min(10, "Mobile Number must be at least 10 characters")
    .max(10, "Mobile Number must be at least 10 characters"),
  email: Yup.string().email("Invalid email").required("Email is Required"),
});

export const bookingvalidationWithchildemail = Yup.object().shape({
  childFirstName: Yup.string()
    .required("Child first Name is required")
    .min(2, "Child first Name must be at least 2 characters")
    .max(30, "Child first Name must be at least 30 characters"),
  childLastName: Yup.string()
    .required("Child last Name is required")
    .min(2, "Child last Name must be at least 2 characters")
    .max(30, "Child last Name must be at least 30 characters"),
  childEmail: Yup.string()
    .required("Child email is Required")
    .email("Invalid email"),
});
export const bookingvalidationWithchild = Yup.object().shape({
  childFirstName: Yup.string()
    .required("Child first Name is required")
    .min(2, "Child first Name must be at least 2 characters")
    .max(30, "Child first Name must be at least 20 characters"),
  childLastName: Yup.string()
    .required("Child last Name is required")
    .min(2, "Child last Name must be at least 2 characters")
    .max(30, "Child last Name must be at least 20 characters"),
  // childEmail: Yup.string()
  //   .required("Email is Required")
  //   .email("Invalid email"),
});

