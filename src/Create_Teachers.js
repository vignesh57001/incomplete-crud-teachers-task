// import React from "react";
// import { useFormik } from "formik";
// import { Link } from "react-router-dom";
// import axios from "axios";
// // import { useState } from "react";

// function Create_Teachers(e) {
//   const initialValues = {
//     idno: "",
//     name: "",
//     gender: "",
//   };

//   const onSubmit = async (values) => {
//     try {
//       const TeachersData = await axios.post(
//         "http://localhost:3001/Teachers_data",
//         values
//       );
//       alert("success");

//       console.log(TeachersData);
//     } catch (error) {
//       alert("error");
//     }
//   };

//   const validate = (values) => {
//     let error = {};

//     if (values.idno.toString().length !== 2) {
//       error.idno = "2 Digit number";
//     }
//     // if (!values.gender) {
//     //   error.gender = "please select your gender";
//     // }
//     if (!values.name) {
//       error.name = "please enter your name";
//     }
//     if (values.name.length <= 2 || values.name.length >= 15) {
//       error.name = "charecters must be between 3-15";
//     }
//     // if (!values.subject) {
//     //   error.subject = "please select your subject";
//     // }
//     return error;
//   };

//   const formik = useFormik({
//     initialValues,

//     validate,

//     onSubmit,
//   });

//   return (
//     <>
//       <h2>Create Teacher</h2>

//       <div className="container">
//         <form onSubmit={formik.handleSubmit}>
//           <div className="user-card">
//             <h1 className="text-center">Teacher Creating Table</h1>
//             <br />
//             <br />

//             <div className="row">
//               <div className="col-lg-5">
//                 <img
//                   className="card-logo"
//                   src="https://w7.pngwing.com/pngs/835/435/png-transparent-classroom-teacher-teacher-text-class-logo-thumbnail.png"
//                   alt=""
//                   width="100%"
//                   height="80%"
//                 />
//               </div>

//               <div className="col-lg-1"></div>
//               <div className="col-lg-6">
//                 <br />

//                 <br />
//                 <br />
//                 <div className="row">
//                   <div className="col-lg-4">
//                     <label>ID No</label>
//                     <input
//                       name="idno"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.idno}
//                       type={"number"}
//                       className={`form-control ${
//                         formik.touched.idno && formik.errors.idno
//                           ? "error-box"
//                           : ""
//                       } ${
//                         formik.touched.idno && !formik.errors.idno
//                           ? "success-box"
//                           : ""
//                       }`}
//                     />

//                     {formik.touched.idno && formik.errors.idno ? (
//                       <span style={{ color: "red" }}>{formik.errors.idno}</span>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                   <div className="col-lg-1"></div>
//                   <div className="col-lg-4">
//                     <div className="form-group">
//                       <label> Gender</label>
//                       <select
//                         name="gender"
//                         onChange={formik.handleChange}
//                         value={formik.values.gender}
//                         className="form-control"
//                       >
//                         <option>select</option>
//                         <option> Male</option>
//                         <option> Female</option>
//                         <option> Transgender</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="col-lg-9">
//                     <label>Name *</label>
//                     <input
//                       name="name"
//                       onChange={formik.handleChange}
//                       onBlur={formik.handleBlur}
//                       value={formik.values.name}
//                       type={"text"}
//                       className={`form-control ${
//                         formik.touched.name && formik.errors.name
//                           ? "error-box"
//                           : ""
//                       } ${
//                         formik.touched.name && !formik.errors.name
//                           ? "success-box"
//                           : ""
//                       }`}
//                     />

//                     {formik.touched.name && formik.errors.name ? (
//                       <span style={{ color: "red" }}>{formik.errors.name}</span>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                   {/* <div className="col-lg-9">
//                     <div className="form-group">
//                       <label>Subject</label>
//                       <select
//                         name="subject"
//                         onChange={formik.handleChange}
//                         value={formik.values.subject}
//                         className="form-control"
//                       >
//                         <option>select</option>
//                         <option>Tamil</option>
//                         <option>English</option>
//                         <option>Maths</option>
//                         <option>Social</option>
//                         <option>Science</option>
//                         <option>Biology</option>
//                         <option>Physics</option>
//                         <option>Chemistry</option>
//                         <option>History</option>
//                         <option>Civics</option>
//                         <option>Computer Science</option>
//                         <option>Economics</option>
//                         <option>Commerce</option>
//                         <option>Accounts</option>
//                       </select>
//                     </div>
//                   </div> */}

//                   <div className="col-lg-2"></div>
//                   <div className="col-lg-2"></div>
//                   <div className="col-lg-5">
//                     <br />
//                     <br />
//                     <div className="form-group">
//                       <button
//                         className="btn btn-primary btn-sm btn-block"
//                         type="submit"
//                       >
//                         SUBMIT
//                       </button>
//                     </div>
//                   </div>
//                   <div className="col-lg-2"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12">
//                 <Link
//                   to={"/portal/Teachers"}
//                   className="d-none d-sm-inline-block btn btn-block btn-dark shadow-sm"
//                 >
//                   Back To Teachers Table
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Create_Teachers;

// import React from "react";
// import { useFormik } from "formik";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Create_Teachers() {
//   let history = useNavigate();

//   const [teachers, setTeachers] = useState({
//     name: "",
//     idno: "",
//     gender: "",
//     subject: "",
//   });

//   const { name, idno, gender, subject } = teachers;
//   const handleChange = (e) => {
//     console.log(e.target.value);
//     setTeachers({ ...teachers, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const newteach = await axios.post(
//       "http://localhost:3001/Teachers",
//       teachers
//     );
//     history.push("/");
//     console.log(newteach);
//   };

//   const formik = useFormik({
//     validate: (values) => {
//       let error = {};

//       if (!values.name) {
//         error.name = "please enter your name";
//       }
//       if (values.name.length <= 2 || values.name.length >= 15) {
//         error.name = "charecters must be between 3-15";
//       }
//     },
//   });

//   return (
//     <>
//       <h2>Create User Account</h2>
//       <div className="container">
//         <form onSubmit={(e) => handleSubmit(e)}>
//           <div className="user-card">
//             <h1 className="text-center">Teacher Creating Table</h1>
//             <br />
//             <br />

//             <div className="row">
//               <div className="col-lg-5">
//                 <img
//                   className="card-logo"
//                   src="https://w7.pngwing.com/pngs/835/435/png-transparent-classroom-teacher-teacher-text-class-logo-thumbnail.png"
//                   alt="techer-img"
//                   width="100%"
//                   height="80%"
//                 />
//               </div>

//               <div className="col-lg-1"></div>
//               <div className="col-lg-6">
//                 <br />

//                 <br />
//                 <br />
//                 <div className="row">
//                   <div className="col-lg-4">
//                     <label>ID No</label>
//                     <input
//                       name="idno"
//                       onChange={(e) => handleChange(e)}
//                       // onBlur={formik.handleBlur}
//                       value={idno}
//                       type={"number"}
//                       className={`form-control ${
//                         formik.touched.idno && formik.errors.idno
//                           ? "error-box"
//                           : ""
//                       } ${
//                         formik.touched.idno && !formik.errors.idno
//                           ? "success-box"
//                           : ""
//                       }`}
//                     />

//                     {formik.touched.idno && formik.errors.idno ? (
//                       <span style={{ color: "red" }}>{formik.errors.idno}</span>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                   <div className="col-lg-1"></div>
//                   <div className="col-lg-4">
//                     <div className="form-group">
//                       <label> Gender</label>
//                       <select
//                         name="gender"
//                         onChange={(e) => handleChange(e)}
//                         value={gender}
//                         className="form-control"
//                       >
//                         <option>select</option>
//                         <option> Male</option>
//                         <option> Female</option>
//                         <option> Transgender</option>
//                       </select>
//                     </div>
//                   </div>
//                   <div className="col-lg-9">
//                     <label>Name *</label>
//                     <input
//                       name="name"
//                       onChange={(e) => handleChange(e)}
//                       // onBlur={formik.handleBlur}
//                       value={name}
//                       type={"text"}
//                       className={`form-control ${
//                         formik.touched.name && formik.errors.name
//                           ? "error-box"
//                           : ""
//                       } ${
//                         formik.touched.name && !formik.errors.name
//                           ? "success-box"
//                           : ""
//                       }`}
//                     />

//                     {formik.touched.name && formik.errors.name ? (
//                       <span style={{ color: "red" }}>{formik.errors.name}</span>
//                     ) : (
//                       ""
//                     )}
//                   </div>
//                   <div className="col-lg-9">
//                     <div className="form-group">
//                       <label>Subject</label>
//                       <select
//                         name="subject"
//                         onChange={(e) => handleChange(e)}
//                         value={subject}
//                         className="form-control"
//                       >
//                         <option>select</option>
//                         <option>Tamil</option>
//                         <option>English</option>
//                         <option>Maths</option>
//                         <option>Social</option>
//                         <option>Science</option>
//                         <option>Biology</option>
//                         <option>Physics</option>
//                         <option>Chemistry</option>
//                         <option>History</option>
//                         <option>Civics</option>
//                         <option>Computer Science</option>
//                         <option>Economics</option>
//                         <option>Commerce</option>
//                         <option>Accounts</option>
//                       </select>
//                     </div>
//                   </div>

//                   <div className="col-lg-2"></div>
//                   <div className="col-lg-2"></div>
//                   <div className="col-lg-5">
//                     <br />
//                     <br />
//                     <div className="form-group">
//                       <button
//                         className="btn btn-primary btn-sm btn-block"
//                         type="submit"
//                       >
//                         SUBMIT
//                       </button>
//                     </div>
//                   </div>
//                   <div className="col-lg-2"></div>
//                 </div>
//               </div>
//             </div>
//             <div className="row">
//               <div className="col-lg-12">
//                 <Link
//                   to={"/portal/Teachers"}
//                   className="d-none d-sm-inline-block btn btn-block btn-dark shadow-sm"
//                 >
//                   Back To Teachers Table
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// }

// export default Create_Teachers;

import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create_Teachers = () => {
  let history = useNavigate();

  const [teachers, setTeachers] = useState({
    name: "",
    gender: "",
    subject: "",
  });

  const { name, gender, subject } = teachers;

  const onInputChange = (e) => {
    console.log(e.target.value);
    setTeachers({ ...teachers, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3001/Teachers", teachers);
    history.push("/");
  };

  return (
    <>
      <h2>Create User Account</h2>
      <div className="container">
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="user-card">
            <h1 className="text-center">Teacher Creating Table</h1>
            <br />
            <br />

            <div className="row">
              <div className="col-lg-5">
                <img
                  className="card-logo"
                  src="https://w7.pngwing.com/pngs/835/435/png-transparent-classroom-teacher-teacher-text-class-logo-thumbnail.png"
                  alt="techer-img"
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
                  <div className="col-lg-1"></div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label> Gender</label>
                      <select
                        name="gender"
                        onChange={(e) => onInputChange(e)}
                        value={gender}
                        className="form-control"
                        placeholder="select your gender"
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
                      onChange={(e) => onInputChange(e)}
                      value={name}
                      type={"text"}
                      className="form-control"
                      placeholder="enter your name"
                    />
                  </div>
                  <div className="col-lg-9">
                    <div className="form-group">
                      <label>Subject</label>
                      <select
                        name="subject"
                        value={subject}
                        onChange={(e) => onInputChange(e)}
                        className="form-control"
                        placeholder="select subject"
                      >
                        <option>select</option>
                        <option>Tamil</option>
                        <option>English</option>
                        <option>Maths</option>
                        <option>Social</option>
                        <option>Science</option>
                        <option>Biology</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>History</option>
                        <option>Civics</option>
                        <option>Computer Science</option>
                        <option>Economics</option>
                        <option>Commerce</option>
                        <option>Accounts</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-2"></div>
                  <div className="col-lg-2"></div>
                  <div className="col-lg-5">
                    <br />
                    <br />
                    <div className="form-group">
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
};

export default Create_Teachers;
