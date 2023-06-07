import React from "react";
import { Link, useParams } from "react-router-dom";
// import { useEffect, useState } from "react";

function Single_Teacher_Details(item) {
  const params = useParams();

  return (
    <div className="container-fluid">
      <div class="container">
        <h1 class="text-center text-primary" style={{ fontWeight: "800" }}>
          Single Teacher Info:
        </h1>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12">
            <br />
            <br />

            <br />
            <img
              src="https://picsum.photos/1000/1000"
              alt=""
              height="350px"
              width="400px"
              style={{ borderRadius: "42px" }}
            />
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12">
            <br />
            <br />
            <br />
            <br />
            <br />
            {/* <h1> Name :{item.Name} </h1> */}
            <h4> ID No :{params.id} </h4>

            {/* <h4> Gender:{item.Gender}</h4>
            <h5> Subject : Tamil,English,Malayalam</h5>    */}

            <br />
            <br />
            <br />
            <div className="col-lg-6">
              <Link
                to={"/portal/Teachers"}
                className="d-none d-sm-inline-block btn btn-lg btn-primary shadow-sm"
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

export default Single_Teacher_Details;
