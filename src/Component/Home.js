import React from "react";
import developer from "../assest/developer.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section>
        <div class="container">
          <div
            className="row d-flex align-items-center"
            style={{ height: "799px" }}
          >
            <div className="col-12 col-md-6">
              <div
                className="text-center float-md-end"
              // style={{ width: "450px", height: "450px" }}
              >
                <img
                  src={developer}
                  class="img-fluid rounded-circle"
                  alt="Developer"
                  width="450px"
                  height="450px"
                />
              </div>
            </div>
            <div className="col-12 col-md-6">
              <h1 className="fs-1">Hello....</h1>
              <h5>A Bit About Me</h5>
              <p>
                I'm a Software Engineer. last one year and eight months i am
                working in a IT sector. In this period i am worked with
                JavaScript, Reactjs , React Native, Redux, HTML5, CSS3, SCSS,
                bootstrap.
              </p>
              <Link to="/resume" class="btn btn-danger shadow m-1 btn-lg text-light">Resume</Link>
              <Link to="/project" class="btn btn-warning shadow m-1 btn-lg text-light">Project</Link>
              <Link to="/contact" class="btn btn-info shadow m-1 btn-lg text-light">Contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
