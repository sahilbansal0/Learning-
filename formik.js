import React from "react";
import { useFormik } from "formik";
// import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      search: "",
    },

    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values));
    },
    validate: (values) => {
      let errors = {};
      if (!values.lastName) {
        errors.lastName = "lastname chahiye bhai";
      }
      if (!values.firstName) {
        errors.firstName = "firstname chahiye ";
      }
      return errors;
    },
  });

  console.log(formik.touched.firstName);
  console.log(formik.touched.lastName);

  // useEffect(() => {
  //   console.log(formik.values.firstName);
  // }, [formik.values]);
  // console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <img src="/Search.svg" alt="s"></img>
        <input type="search"></input>
      </div>
      <br></br>
      <label htmlFor="firstName">First Name</label>
      <input
        id="firstName"
        name="firstName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.firstName}
        onBlur={formik.handleBlur}
      />
      {formik.errors.firstName ? <div>{formik.errors.firstName}</div> : null}
      <label htmlFor="lastName">Last Name</label>
      <input
        id="lastName"
        name="lastName"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.lastName}
        onBlur={formik.handleBlur}
      />
      {formik.errors.lastName && formik.touched.lastName ? (
        <div>{formik.errors.lastName}</div>
      ) : null}
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
      {/* <input
        id="search"
        name="search"
        type="search"
        onChange={formik.handleChange}
        value={formik.values.search}
      /> */}
      <button type="submit" disabled={!formik.values.firstName}>
        Submit
      </button>
    </form>
  );
};
export default SignupForm;
