// import React, { useEffect, useState, useRef } from "react";
// import Elogo from "../../public/assets/images/e-logo.svg"
const Manifest = () => {
  return (
    <div className="radial-bg my-5">
      <img src="assets/images/e-logo.svg" alt="Elogo" className="e-logo" />
      <div className="container-fluid">
        <div className="bg-rad"></div>
        <div data-aos="fade-up" className="line">
          Manage{" "}
          <span className="shape-box">
            <div>
              <img alt="title1" src="assets/images/control.svg" />
            </div>
          </span>{" "}
          Your
        </div>
        <div data-aos="zoom-in" className="line my-4 translate-mid svw">
          Assets{" "}
          <span className="shape-box">
            <div>
              <img alt="title1" src="assets/images/mind.svg" />
            </div>
          </span>{" "}
          <span className="word-orange">Efficiently</span>
        </div>
        <div data-aos="fade-down" className="line left12w">
          across{" "}
          <span className="shape-box">
            <div>
              <img alt="title1" src="assets/images/reality.svg" />
            </div>
          </span>{" "}
          Web3
        </div>
      </div>
    </div>
  );
};

export default Manifest;
