import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <ul
      className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="#"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">VIGNESH</div>
      </a>

      <hr className="sidebar-divider my-0" />

      <hr className="sidebar-divider" />

      <div className="sidebar-heading">Interface</div>

      <li className="nav-item active">
        <Link to={"/portal/Teachers"} className="nav-link">
          <i className="fas fa-fw fa-pen-nib"></i>
          <span>TEACHERS-CRUD</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to={"/portal/Students"} className="nav-link">
          <i className="fas fa-fw fa-pen-nib"></i>
          <span>STUDENTS-CRUD</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link to={"/portal/AssigningTeachers"} className="nav-link">
          <i className="fas fa-fw fa-pen-nib"></i>
          <span>CRUD-ASSIGNING TEACHER to STUDENTS</span>
        </Link>
      </li>
    </ul>
  );
}

export default SideBar;
