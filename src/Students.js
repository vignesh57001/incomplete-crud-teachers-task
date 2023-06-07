import React from "react";
import { Link } from "react-router-dom";

function Students() {
  let deleteStudents = () => {
    const result = window.confirm("Are you sure do you want to delete..?");
    if (result) {
      alert("deleted..!");
    }
  };
  return (
    <div className="container-fluid">
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0" style={{ color: "green" }}>
          <span style={{ fontSize: "60px" }}>Students</span>
        </h1>
        <Link
          to={"/portal/Create_Students"}
          className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm"
          style={{
            padding: "10px 200px 10px 200px ",
            fontSize: "20px",
          }}
        >
          <i className="fas fa-envelope fa-sm text-white-50"></i>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Create Student
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </Link>
      </div>

      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-success">
            Students's DataTables
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
                  <th>ROLL NO</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>ACTION</th>
                </tr>
              </thead>
              <tbody>
                <td>
                  <Link
                    to={`/portal/Single_Student_Details`}
                    className="btn btn-warning mr-1"
                  >
                    View
                  </Link>
                  <Link
                    to={`/portal/Update_Single_Student`}
                    className="btn btn-success mr-1"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteStudents()}
                    className="btn btn-danger mr-1"
                  >
                    Delete
                  </button>
                </td>
              </tbody>
            </table>

            <Link
              to={"/portal/Create_Students"}
              className="d-none d-sm-inline-block btn btn-sm btn-success shadow-sm"
            >
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; + Add Students
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
