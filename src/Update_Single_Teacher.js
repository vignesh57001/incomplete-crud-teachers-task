import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";

function Update_Single_Teacher() {
  let history = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    idno: "",
    gender: "",
    name: "",
  });

  const { idno, name, gender } = user;
  const onInputChange = (values) => {
    setUser({ ...user, [values.target.name]: values.target.value });
  };

  // useEffect(() => {
  //   loadUser();
  // }, []);

  const formik = useFormik({
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
  });

  const onSubmit = async (values) => {
    values.preventDefault();

    const userdata = await axios.put(
      `http://localhost:3001/Teachers/${id}`,
      user
    );
    console.log(userdata);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:3001/Teachers/${id}`);
    setUser(result.data);
  };
  console.log(loadUser);

  return (
    <>
      <h2>Update Teacher</h2>

      <div className="container">
        <form onSubmit={(values) => onSubmit(values)}>
          <div className="user-card-teacher">
            <h1 className="text-center">Teacher Updating Table</h1>
            <br />
            <br />

            <div className="row">
              <div className="col-lg-5">
                <img
                  className="card-logo"
                  src="https://w7.pngwing.com/pngs/835/435/png-transparent-classroom-teacher-teacher-text-class-logo-thumbnail.png"
                  alt="single-teachers"
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
                      onChange={(values) => onInputChange(values)}
                      onBlur={formik.handleBlur}
                      value={idno}
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
                        onChange={(values) => onInputChange(values)}
                        value={gender}
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
                      onChange={(values) => onInputChange(values)}
                      onBlur={formik.handleBlur}
                      value={name}
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
                  to={"/portal/Teachers"}
                  className="d-none d-sm-inline-block btn btn-block btn-dark shadow-sm"
                >
                  Back To Teachers Table
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Update_Single_Teacher;
