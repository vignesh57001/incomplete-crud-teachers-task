import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserCreate";

function TopBar() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      <button
        id="sidebarToggleTop"
        className="btn btn-link d-md-none rounded-circle mr-3"
      >
        <i className="fa fa-bars"></i>
      </button>

      <ul className="navbar-nav ml-auto">
        <button onClick={handleLogout} className="btn1 btn-sm btn-danger">
          Logout
        </button>

        <div className="topbar-divider d-none d-sm-block"></div>

        <li className="nav-item dropdown no-arrow">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">
              {user.username}
            </span>
            <img
              className="img-profile rounded-circle"
              src="https://picsum.photos/100/100"
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default TopBar;
