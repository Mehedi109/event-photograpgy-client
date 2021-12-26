import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-dark text-center text-white">
        <div className="container p-4">
          <section className="mb-5">
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              className="btn btn-outline-light btn-floating m-1"
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>

          <section className="">
            <div className="row">
              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Menu</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Service
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Login
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Social Links</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Facrbook
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Twiter
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                <h5 className="text-uppercase">Categories</h5>

                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="#!" className="text-white">
                      Weeding
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Birthday
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Concert
                    </a>
                  </li>
                  <li>
                    <a href="#!" className="text-white">
                      Farewell
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2021 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Event Photography
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
