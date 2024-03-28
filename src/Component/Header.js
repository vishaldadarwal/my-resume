import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid">
          <NavLink
            className="navbar-brand text-decoration-none text-secondary fs-3 fw-bold"
            exact
            to="/myresume"
          >
            <span className="fs-1 fw-bolder text-danger ">V</span>ishal Verma
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupported"
            aria-controls="navbarSupported"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupported">
            <ul class="navbar-nav ms-auto text-center ">
              <li class="nav-item">
                <NavLink
                  className="nav-link  text-danger fw-bold"
                  exact
                  to="/resume"
                >
                  Resume
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link text-warning fw-bold"
                  exact
                  to="/project"
                >
                  Project
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className="nav-link   text-info fw-bold "
                  exact
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
