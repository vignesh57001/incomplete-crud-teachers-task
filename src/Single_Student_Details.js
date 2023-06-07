import React from "react";
import { Link } from "react-router-dom";

function Single_Student_Details() {
  return (
    <div className="container-fluid">
      <div class="container">
        <h1 class="text-center text-success" style={{ fontWeight: "800" }}>
          Single Student Info:
        </h1>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <br />
            <br />

            <br />
            <img
              src="https://picsum.photos/1000/1000"
              alt="student-image"
              height="350px"
              width="400px"
              style={{ borderRadius: "40px" }}
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <br />
            <br />
            <br />
            <br />
            <br />
            <h1> name : menon</h1>
            <h4> ID No : 13</h4>
            <h4> Gender: Male</h4>
            <h5> Subject : Tamil,Hindi</h5>

            <br />
            <br />
            <br />
            <div className="col-lg-6">
              <Link
                to={"/portal/Students"}
                className="d-none d-sm-inline-block btn btn-lg btn-success shadow-sm"
              >
                Back To Table
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Single_Student_Details;
