import React from "react";

const Contact = () => {
  return (
    <>
      <section>
        <div
          className="container d-flex align-items-center jsutify-content-center"
          style={{ height: "799px" }}
        >
          <div className="row">
            <div className="col-12 col-md-6">
              <h3>Contact</h3>
              <h6>Phone</h6>
              <p>+91 8302735591</p>
              <h6>Email</h6>
              <p>Vishalvermahmh@gmail.com</p>
            </div>
            <div className="col-12 col-md-6">
              <form
                action="https://formspree.io/f/xnqrezlz"
                method="POST"
                class="row g-3"
              >
                <div class="col-12 col-lg-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    class="form-control btn-outline-danger"
                    id="exampleFormControlInput1"
                    placeholder="Enter your first name"
                    name="First name"
                    required
                  />
                </div>
                <div className="col-12 col-lg-6 ">
                  <label for="exampleFormControlInput2" class="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    class="form-control "
                    id="exampleFormControlInput2"
                    placeholder="Enter your last name"
                    name="Last name"
                    required
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <label for="exampleFormControlInput3" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput3"
                    placeholder="name@example.com"
                    name="Email"
                    required
                  />
                </div>
                <div className="col-12 col-lg-6">
                  <label for="exampleFormControlInput4" class="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput4"
                    placeholder="Subject"
                    name="Subject"
                    required
                  />
                </div>
                <div class="col-12 col-lg-6">
                  <label for="exampleFormControlTextarea1" class="form-label">
                    Example textarea
                  </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                    required
                  ></textarea>
                </div>
                <div class="col-12 col-lg-6 d-flex align-items-center  justify-content-center ">
                  <button
                    type="submit"
                    class="btn btn-warning shadow btn-lg text-light rounded-circle"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
