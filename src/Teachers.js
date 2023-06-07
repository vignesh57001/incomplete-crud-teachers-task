import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Teachers() {
  let history = useNavigate();

  const [teachers, setTeachers] = useState([]);

  useEffect(() => {
    loadTeachers();
  }, []);

  const loadTeachers = async () => {
    const result = await axios.get("http://localhost:3001/Teachers");
    setTeachers(result.data);
  };

  let handleDelete = (idno) => {
    let index = teachers
      .map(function (e) {
        return e.idno;
      })
      .indexOf(idno);
    const result = window.confirm(`Do You Want To Delete ${idno} ?`);
    if (result) {
      teachers.splice(index, 1);
    } else {
      alert("Action Denied");
    }
    history("/Portal/Teachers");
  };

  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0" style={{ color: "blue" }}>
          <span style={{ fontSize: "60px" }}>Teachers</span>
        </h1>
        <Link
          to={"/portal/Create_Teachers"}
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          style={{
            padding: "10px 250px 10px 250px ",
            fontSize: "20px",
          }}
        >
          <i className="fas fa-envelope fa-sm text-white-50"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Create Teacher
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Teacher's DataTables
          </h6>
        </div>
        <div className="card-body text-center">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th> # </th>
                  <th>ID NO</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>SUBJECT</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                {teachers && teachers.length > 0
                  ? teachers.map((teachers, index) => {
                      return (
                        <>
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{teachers.idno}</td>
                            <td>{teachers.name}</td>
                            <td>{teachers.gender}</td>
                            <td>{teachers.subject}</td>
                            <td>
                              <Link
                                to={`/portal/Single_Teacher_Details/${teachers.idno}`}
                                className="btn btn-warning mr-1"
                              >
                                <i class="far fa-eye"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp; View
                              </Link>
                              <Link
                                to={`/portal/Update_Single_Teacher/${teachers.idno}`}
                                className="btn btn-success mr-1"
                              >
                                <i class="fas fa-edit"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp; Edit
                              </Link>
                              <button
                                onClick={() => handleDelete(teachers.idno)}
                                className="btn btn-danger mr-1"
                              >
                                <i class="fas fa-trash-alt"></i>
                                &nbsp;&nbsp;&nbsp;&nbsp; Delete
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })
                  : "No Data Found"}
              </tbody>
            </table>

            <Link
              to={"/portal/Create_Teachers"}
              className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + Add Teacher
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teachers;
