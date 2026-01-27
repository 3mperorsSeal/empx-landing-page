// import React, { useEffect, useState, useRef } from "react";
import Counter from "./Counter";

const Build = () => {
  return (
    <div className="position-relative mybuild">
      <section className="container py-md-5">
        <div className="row text-center text-md-start">
          <div className="col-md-5 col-12 mb-4 mb-md-0 d-flex justify-content-center">
            <img
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              alt="build"
              className="build-img"
              src="assets/images/build.svg"
            />
          </div>

          <div className="col-md-7 col-12">
            <h2 className="fw-bold font-build text-white pl-9">
              Ready to <br /> Build with <span className="highlight">EMPX</span>
              ?
            </h2>
          </div>
        </div>
      </section>
      <div className="bg-build py-4">
        <div className="container">
          <div className="row mt-4">
            <div className="col-md-6 col-12">
              <p className="mb-0 subtext font-red-hat">
                Our documentation covers User guide and Developer guide. We have
                an in-depth description on how EMPX works as well as safety and
                efficiency practices. Join our Telegram and Twitter/X for up to
                date news and developments. Build with EMPX and reach out to us
                for integrations.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <div className="row ps-md-4 ms-md-1 mt-4 mt-md-0">
                <div className="col-6">
                  <Counter end={20} suffix="+" />
                  <h4 className="highlight font-red-hat font-1rem">
                   Networks
                  </h4>
                </div>
                <div className="col-6">
                  <Counter end={99.9} suffix="%" />
                  <h4 className="highlight font-red-hat font-1rem">
                    Uptime
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Build;
