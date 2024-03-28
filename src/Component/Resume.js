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
                <h6 className="col-12 col-md-3">{`Techerudite`}
                  <h6 className="" >
                    (Ahmedabad,India)
                  </h6>
                </h6>
                <div className="col-12 col-md-9">
                  <div className="row" >
                    <h6 className="col-12 col-lg-6">React Native Developer</h6>
                    <p className="col-12 col-lg-6 text-lg-end">Jan 2023 - March 2024</p>
                  </div>
                  <ul>
                    <li>
                      Proficiently integrated RESTful APIs and GraphQL APIs into React Native applications, tailoring solutions to the specific
                      requirements of each technology.
                    </li>
                    <li>
                      Spearheaded the iterative refinement process for React Native components, screens, and features, playing a pivotal role in
                      elevating mobile app functionality.
                    </li>
                    <li>
                      Achieved an enhanced user experience through iterative enhancements and user-centric updates.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <h6 className="col-12 col-md-3">Gts Infosoft LLP
                  <h6 className="" >
                    (Jodhpur, India)
                  </h6>
                </h6>                
                <div className="col-12 col-md-9">
                  <div className="row" >
                    <h6 className="col-12 col-lg-6">React Native Developer</h6>
                    <p className="col-12 col-lg-6 text-lg-end">Apirl 2022 - Nov 2022</p>
                  </div>
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
              <h6 className="col-12 col-md-3">W3CTRL
                  <h6 className="" >
                    (Delhi, India)
                  </h6>
                </h6>   
                <div className="col-12 col-md-9">
                <div className="row" >
                    <h6 className="col-12 col-lg-6">ReactJs UI Developer</h6>
                    <p className="col-12 col-lg-6 text-lg-end">March 2021 – Feb 2022</p>
                  </div>
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
                    BCA {`(BACHELOR OF COMPUTER APPLICATION)`} 
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
                    <li>TypeScript</li>
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
                    <li>GraphQL</li>
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
