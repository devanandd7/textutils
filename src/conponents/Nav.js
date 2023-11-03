import React from "react";
import PropTypes from "prop-types";
import {Link} from 'react-router-dom'


export default function Nav(props) {
  return (
    <>



      {/* * here including navabar in main page .  */}
     
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            {props.title}
            {/* here,we using (props),here passing value from app.js file by using props. */}
          </a>{" "}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
            </ul>
            
            {/* toggle button */}
            <div
              className={`form-check form-switch text-${
                props.mode === "white" ? "dark" : "white"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label class="form-check-label mx-1" for="flexSwitchCheckDefault">
                dark
              </label>
            </div>

            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-
                label="Search"
              />

              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      


    </>
  );
}


Nav.propTypes = {
  title: PropTypes.string.isRequired,
  // * PropTypes checking the types of passing value type are matching with types condision are not
  // *isRequired considered that anyhow you pass the value ,you can leave that props without passing value
};

Nav.defaultProps = {
  title: "enter title here",
  // *when you not passing any value in props then defaultProps pass own value provided by programmer default.
};
