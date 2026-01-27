import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid px-0 pb-0 bg-white">
      <div className="container position-relative pt-md-5 pb-md-0 pb-5">
        <div className="row">
          <div className="col-md-6">
            <h2>
              Come Join Us at  <br />
               <span className="highlight">EMPX</span>
            </h2>
          </div>
          <div className="col-md-6 d-flex gap-md-5 gap-4 pt-4 ps-md-5 d-md-flex-nowrap flex-wrap">
            <div className="contact-info font-red-hat">
              <h6 className="fw-bold">Contact Us</h6>
              <p className="mb-0">
                <a
                  href="https://x.com/EmpXio"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Twitter/X
                </a>
              </p>
            </div>
            <div className="location font-red-hat">
              <h6 className="fw-bold">Integration Support</h6>
              <p className="mb-0">
                <a
                  href="mailto:Support@EMPX.io"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Support @EMPX.io
                </a>
              </p>
            </div>
            <div className="location font-red-hat">
              <h6 className="fw-bold">Documentation</h6>
              <p className="mb-0">
                <a
                  href="https://docs.empx.io/"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Documentation
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-6 d-md-block d-none">
            <div className="bg-text">
              <img
                alt="footer-bg"
                className="w-100"
                src="assets/images/footer1.svg"
              />
            </div>
          </div>
          <div className="col-md-6 col-12 ps-md-5">
            <div className="social-icons d-flex align-items-center gap-md-5 gap-2 mt-md-0 mt-4">
              <a href="https://docs.empx.io/" target="_blank" rel="noreferrer">
                <img alt="social1" src="assets/images/doc.svg" />
              </a>
              {/* <Link href="#">
                <img alt="social2" src="assets/images/git.svg" />
              </Link> */}
              {/* <a href="#">
                <img alt="social3" src="assets/images/insta.svg" />
              </a> */}
              <a href="https://x.com/EmpXio" target="_blank" rel="noreferrer">
                <img alt="social4" src="assets/images/twitter.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
