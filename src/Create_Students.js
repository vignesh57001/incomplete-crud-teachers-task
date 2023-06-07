import React from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";

function Create_Users() {
  const formik = useFormik({
    initialValues: {
      rollno: "",
      gender: "",
      name: "",
    },
    validate: (values) => {
      let error = {};

      if (values.rollno.toString().length !== 2) {
        error.rollno = "2 Digit Number";
      }
      if (!values.name) {
        error.name = "please enter your name";
      }
      if (values.name.length <= 2 || values.name.length >= 15) {
        error.name = "charecters must be between 3-15";
      }
      // if (!values.email) {
      //   error.email = "please enter email address";
      // }
      // if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      //   error.email = "please enter a valid email address";
      // }
      // if (values.phone.toString().length !== 10) {
      //   error.phone = "please enter a valid number";
      // }

      return error;
    },

    onSubmit: async (values) => {
      try {
        const userdata = await axios.post(
          "https://635914fdc27556d2894b2f63.mockapi.io/api/user",
          values
        );
        alert("success");
      } catch (error) {
        alert("error");
      }
    },
  });

  return (
    <>
      <h2>Create Students</h2>
      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="user-card1">
            <h1 className="text-center">Student Creating Table</h1>
            <br />
            <br />
            <div className="row">
              <div className="col-lg-5">
                <img
                  className="card-logo"
                  src="https://p.kindpng.com/picc/s/24-248528_internet-user-png-person-in-charge-icon-transparent.png"
                  width="100%"
                  height="80%"
                />
              </div>
              <div className="col-lg-1"></div>
              <div className="col-lg-6">
                <br />
                <br />
                <br />

                <div className="row">
                  <div className="col-lg-4">
                    <label>Roll No</label>
                    <input
                      name="rollno"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.rollno}
                      type={"number"}
                      className={`form-control ${
                        formik.touched.rollno && formik.errors.rollno
                          ? "error-box"
                          : ""
                      } ${
                        formik.touched.rollno && !formik.errors.rollno
                          ? "success-box"
                          : ""
                      }`}
                    />

                    {formik.touched.rollno && formik.errors.rollno ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.rollno}
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label> Gender</label>
                      <select
                        name="gender"
                        onChange={formik.handleChange}
                        value={formik.values.gender}
                        className="form-control"
                      >
                        <option>select</option>
                        <option> Male</option>
                        <option> Female</option>
                        <option> Transgender</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <label>Name *</label>
                    <input
                      name="name"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.name}
                      type={"text"}
                      className={`form-control ${
                        formik.touched.name && formik.errors.name
                          ? "error-box"
                          : ""
                      } ${
                        formik.touched.name && !formik.errors.name
                          ? "success-box"
                          : ""
                      }`}
                    />

                    {formik.touched.name && formik.errors.name ? (
                      <span style={{ color: "red" }}>{formik.errors.name}</span>
                    ) : (
                      ""
                    )}
                  </div>

                  <div className="col-lg-2"></div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-5">
                    <div className="form-group">
                      <br />
                      <br />

                      <button
                        className="btn btn-primary btn-sm btn-block"
                        type="submit"
                      >
                        SUBMIT
                      </button>
                    </div>
                  </div>
                  <div className="col-lg-2"></div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <Link
                  to={"/portal/Students"}
                  className="d-none d-sm-inline-block btn btn-block btn-dark shadow-sm"
                >
                  Back To Students Table
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      ;
    </>
  );
}

export default Create_Users;
