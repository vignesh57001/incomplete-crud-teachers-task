import React from "react";

import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";

function Update_Single_Student() {
  const formik = useFormik({
    initialValues: {
      idno: "",
      gender: "",
      name: "",
    },
    validate: (values) => {
      let error = {};

      if (values.idno.toString().length !== 2) {
        error.idno = "2 Digit number";
      }
      if (!values.name) {
        error.name = "please enter your name";
      }
      if (values.name.length <= 2 || values.name.length >= 15) {
        error.name = "charecters must be between 3-15";
      }
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
      <h2>Update Student</h2>

      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="user-card-student">
            <h1 className="text-center">Student Updating Table</h1>
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
                    <label>ID No</label>
                    <input
                      name="idno"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.idno}
                      type={"number"}
                      className={`form-control ${
                        formik.touched.idno && formik.errors.idno
                          ? "error-box"
                          : ""
                      } ${
                        formik.touched.idno && !formik.errors.idno
                          ? "success-box"
                          : ""
                      }`}
                    />

                    {formik.touched.idno && formik.errors.idno ? (
                      <span style={{ color: "red" }}>{formik.errors.idno}</span>
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
                  {/* <div className="col-lg-9">
                    <label>Email *</label>
                    <input
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.email}
                      type={"text"}
                      className={`form-control ${
                        formik.touched.email && formik.errors.email
                          ? "error-box"
                          : ""
                      } ${
                        formik.touched.email && !formik.errors.email
                          ? "success-box"
                          : ""
                      }`}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <span style={{ color: "red" }}>
                        {formik.errors.email}
                      </span>
                    ) : null}
                  </div>
                  <div className="col-lg-9">
                    <div className="form-group">
                      <label> Subjects</label>
                      <select
                        name="city"
                        onChange={formik.handleChange}
                        value={formik.values.city}
                        className="form-control"
                      >
                        <option>select</option>
                        <option> Tamil </option>
                        <option> English </option>
                        <option> Maths </option>
                        <option> History </option>
                        <option> Physics </option>
                        <option> Civics </option>
                        <option> Geography </option>
                        <option> Chemistry </option>
                        <option> Botony </option>
                        <option> Zoology </option>
                      </select>
                    </div>
                  </div> */}

                  <div className="col-lg-2"></div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-5">
                    <br />
                    <br />
                    <div className="form-group">
                      <button className="btn btn-primary btn-sm btn-block">
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
    </>
  );
}

export default Update_Single_Student;
