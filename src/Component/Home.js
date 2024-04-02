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
              <h5>A Brief Introduction</h5>
              <p>
                I am an experienced Software Engineer with two years and ten months of dedicated experience in the IT industry. During this time, I have developed expertise in various technologies, including JavaScript, React.js, React Native, Redux, HTML5, CSS3, SCSS, Bootstrap, RestApi, GraphQL, Typescript and Git.
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
