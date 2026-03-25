import { useEffect, useRef } from "react";

const Banner = () => {
  const clickSoundRef = useRef(null);

  useEffect(() => {
    clickSoundRef.current = new Audio("/assets/sc_sound.mp3");
    clickSoundRef.current.volume = 1;
  }, []);
  const playClickSound = () => {
    if (clickSoundRef.current) {
      clickSoundRef.current.currentTime = 0;
      clickSoundRef.current.play().catch(() => {});
    }
  };

  return (
    <>
      <section className="d-flex text-white banner-bg mb-5">
        <video className="bg-video" autoPlay loop muted playsInline>
          <source src="/assets/hero-vid.mp4" type="video/mp4" />
        </video>
        {/* Background Overlay/Gradient */}
        <div className="container position-relative mt-3 pt1">
          <div className="row mb-5">
            <div className="d-flex align-items-center justify-content-between">
              <img src="assets/images/btn-banner.svg" alt="logo" />
              <div className="d-flex align-items-center gap-2 banner-cta-group">
                <a
                  onClick={() => {
                    playClickSound();
                  }}
                  href="/dapp"
                  target="_blank"
                >
                  <button className="custom-btn banner-cta-btn">
                    Enter Dapp
                  </button>
                </a>
                <a
                  href="https://docs.empx.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="custom-btn banner-cta-btn">
                    Enter Docs
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-between">
            {/* Left Content */}
            <div className="col-md-4">
              <h4 className="text-white fw-semibold text-uppercase mb-3">
                Trade Smarter Across Chains with EMPX
              </h4>
              <p className="text-white fw-500 font-14">
                The Ultimate Multi-Chain DEX Aggregator
              </p>

              {/* Stats */}
            </div>
            <div className="col-md-3">
              <h1 className="text-white fw-semibold text-uppercase mb-3">
                100+
              </h1>
              <p className="text-white fw-500 font-14">
               Advanced smart routing scans 100+ DEXs for the lowest fees and minimal slippage on every trade.
              </p>
            </div>
            <div className="col-12">
              <h1
                data-aos="zoom-in-up"
                className="banner-title fw-bold text-center mll"
              >
                EMPX
              </h1>
            </div>

            {/* Right Content */}
          </div>
          <div className="row align-items-center flex-column flex-md-row gy-4">
            <div className="col-12 col-md-4">
              <div className="d-flex mt-0  bg-box px-4 py-3 rounded-4 w-fit">
                <div className="me-4 font-red-hat red-hat">
                  <h4 className="mb-0 text-white">100+</h4>
                  <small className="text-white">DEXs</small>
                </div>
                <div className="me-4 font-red-hat red-hat">
                  <h4 className="mb-0 text-white">99%</h4>
                  <small className="text-white">Uptime</small>
                </div>
                <div className="font-red-hat red-hat">
                  <h4 className="mb-0 text-white">20+</h4>
                  <small className="text-white">Networks</small>
                </div>
              </div>
            </div>
            <div className="col-4 d-md-block d-none">
              <div className="">
                <img
                  alt="line"
                  className="w-100 ms-negative"
                  src="assets/images/line.svg"
                />
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex align-items-center gap-3">
                <img
                  className="w-arrow"
                  src="assets/images/arrow.svg"
                  alt="down arrow"
                />
                <h5 className="mb-0">
                  One platform to swap, bridge, and explore the Web3 with
                  speed
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
