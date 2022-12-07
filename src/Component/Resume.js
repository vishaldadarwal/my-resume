import React from "react";

const Resume = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-4 mb-4">
              <h3>Resume</h3>
            </div>
            <div className="col-12 col-md-3">
              <h5>Work Experience</h5>
            </div>
            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-12 col-md-3">Apirl 2022 - Nov 2022</div>
                <div className="col-12 col-md-9">
                  <h6>React Native Developer</h6>
                  <ul>
                    <li>
                      Developed front-end user interface using React Native and
                      JavaScript for iOS and Android mobile applications.
                    </li>
                    <li>
                      Developed and maintained React Native components, screens,
                      and features for the mobile app.
                    </li>
                    <li>
                      Collaborated with other developers to implement new
                      features in a way that is consistent with existing
                      codebase conventions.
                    </li>
                    <li>
                      Participated in design discussions regarding application
                      architecture, feature implementation, or any other
                      relevant topic as required.
                    </li>
                    <li>Integrated state management with redux.</li>
                    <li>API integration with Axios</li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-3">Apirl 2022 - Nov 2022</div>
                <div className="col-12 col-md-9">
                  <h6>UI Developer</h6>
                  <ul>
                    <li>
                      Improved and expanded project platforms using JavaScript
                      to develop rich User Interfaces.
                    </li>
                    <li>
                      Communicated with product managers and UX designers to
                      translate project requirements and business objectives
                      into polished user interfaces.
                    </li>
                    <li>
                      Standardized all output with a new, responsive,
                      mobile-first approach and strategy.
                    </li>
                    <li>
                      Collaborated with product team members to implement new
                      feature developments.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-12 col-md-3">
              <h5>Education</h5>
            </div>
            <div className="col-12 col-md-9">
              <div className="row">
                <div className="col-12 col-md-3">2017 - 2020</div>
                <div className="col-12 col-md-9">
                  <h6>Master Degree</h6>
                  <p>
                    MASTER OF COMPUTER SCIENCE MSC (CS)
                    <br />
                    MGSU Bikaner, August 2020 <br />
                    6.9/10
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="col-12 col-md-3">2013 - 2016</div>
                <div className="col-12 col-md-9">
                  <h6>Beachler Degree</h6>
                  <p>
                    BACHELOR OF COMPUTER APPLICATION BCA
                    <br />
                    MGSU Bikaner, June 2016 <br />
                    6.6/10
                  </p>
                </div>
              </div>
            </div>
            <hr />
            <div className="col-12 col-md-5">
              <h5>Skill</h5>
            </div>
            <div className="col-12 col-md-7">
              <div className="row">
                <div className="col-6">
                  <ul>
                    <li>JavaScript</li>
                    <li>React Js</li>
                    <li>React Native</li>
                    <li>Redux</li>
                    <li>HTML 5</li>
                  </ul>
                </div>
                <div className="col-6">
                  <ul>
                    <li>CSS 3</li>
                    <li>SASS</li>
                    <li>Bootstrap</li>
                    <li>JQuery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
