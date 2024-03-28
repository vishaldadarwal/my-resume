import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container-fluid">
        <hr />
        <div className="row mt-5 mb-2 text-center">
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Phone no.</h6>
            <p>+91 8302735591</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Email</h6>
            <p>Vishalvermahmh@gmail.com</p>
          </div>
          <div className="col-12 col-sm-6 col-md-3">
            <h6>Follow me</h6>
            <p>instagram</p>
          </div>
          <div className="col-12 col-md-3">
            <p>@copyright 2024 by Vishal Verma</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
