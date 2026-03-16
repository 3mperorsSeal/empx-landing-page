import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function WeDo() {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <div className="container-fluid ps-md-5 pe-md-0 mt-5 pt-5 service position-relative">
      <div className="d-flex flex-md-row flex-column align-items-center justify-content-md-between pe-md-5">
        <h2 className={`text-white ${swiperRef}`}>
          WHAT WE DO{" "}
          <img
            alt="line"
            className="d-md-inline d-none"
            src="assets/images/line.svg"
          />
        </h2>
        <div className="d-flex gap-2 pt-md-0 pt-3">
          <button className="custom-prev">←</button>
          <button className="custom-next">→</button>
        </div>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        loop={true}
        modules={[Pagination, Navigation]}
        className="mySwiper position-static wwd"
      >
        <SwiperSlide>
          <div className="sliding slide-1">
            <div className="py-5 px-md-5 px-3">
              <div className="mb-5 pb-4">
                <img
                  alt="sliding1"
                  className="mb-2 ring-updown"
                  src="assets/images/slide1.svg"
                />
              </div>
              <h3 className="text-white">Instant Swaps</h3>
              <p className="text-white font-red-hat mb-4 mt-3">
                EMPX DEX Aggregator scans multiple liquidity sources in
                real-time to deliver the absolute best swap rates with minimal
                gas and zero hidden fees.{" "}
              </p>
              <a href="/dapp" target="_blank">
                <button className="custom-btn">Explore</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliding slide-2">
            <div className="py-5 px-md-5 px-3">
              <div className="mb-5 pb-4">
                <img
                  className="mb-2 ring-updown"
                  alt="sliding2"
                  src="assets/images/slide2.svg"
                />
              </div>
              <h3 className="text-white">Smart Limit Orders</h3>
              <p className="text-white font-red-hat mb-4 mt-3">
                Set and forget precise limit orders that execute automatically
                when prices hit your target. Advanced DeFi tool for better
                control and strategy execution.
              </p>
              <a href="/dapp" target="_blank">
                <button className="custom-btn">Explore</button>
              </a>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliding slide-3">
            <div className="py-5 px-md-5 px-3">
              <div className="mb-5 pb-4">
                <img
                  className="mb-2 ring-spin"
                  alt="sliding3"
                  src="assets/images/slide3.svg"
                />
              </div>
              <h3 className="text-white">Cross-Chain Bridge</h3>
              <p className="text-white font-red-hat mb-4 mt-3">
                Securely transfer assets between multiple chains with trusted
                and secure infrastructure. Fast, affordable bridging with full{" "}
                <br />
                transparency.
              </p>
              <a href="/dapp" target="_blank">
                <button className="custom-btn">Explore</button>
              </a>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliding slide-4">
            <div className="py-5 px-md-5 px-3">
              <div className="mb-5 pb-4">
                <img
                  alt="widget"
                  className="mb-2 ring-updown"
                  src="assets/images/slide4.svg"
                />
              </div>
              <h3 className="text-white">Widget Integration</h3>
              <p className="text-white font-red-hat mb-4 mt-3">
                Seamlessly integrate EMPX DeFi functionality into your platform.
                Our customizable widget allows integrators to embed swaps with
                custom branding and earn fees.
              </p>
              <a
                href="https://widget.empx.io/builder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="custom-btn">Explore</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliding slide-1">
            <div className="py-5 px-md-5 px-3">
              <div className="mb-5 pb-4">
                <img
                  className="mb-2 ring-updown"
                  alt="slide1"
                  src="assets/images/slide1.svg"
                />
              </div>
              <h3 className="text-white">Instant Swaps</h3>
              <p className="text-white font-red-hat mb-4 mt-3">
                EMPX DEX Aggregator scans multiple liquidity sources in
                real-time to deliver the absolute best swap rates with minimal
                gas and zero hidden fees.{" "}
              </p>
              <a href="/dapp" target="_blank">
                <button className="custom-btn">Explore</button>
              </a>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliding slide-2">
            <div className="py-5 px-md-5 px-3">
              <div className="mb-5 pb-4">
                <img
                  className="mb-2 ring-updown"
                  alt="slide1"
                  src="assets/images/slide2.svg"
                />
              </div>
              <h3 className="text-white">Smart Limit Orders</h3>
              <p className="text-white font-red-hat mb-4 mt-3">
                Set and forget precise limit orders that execute automatically
                when prices hit your target. Advanced DeFi tool for better
                control and strategy execution.
              </p>
              <a href="/dapp" target="_blank">
                <button className="custom-btn">Explore</button>
              </a>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliding slide-3">
            <div className="py-5 px-md-5 px-3">
              <div className="mb-5 pb-4">
                <img
                  className="mb-2 ring-spin"
                  alt="slide1"
                  src="assets/images/slide3.svg"
                />
              </div>
              <h3 className="text-white">Cross-Chain Bridge</h3>
              <p className="text-white font-red-hat mb-4 mt-3">
                Securely transfer assets between multiple chains with trusted
                and secure infrastructure. Fast, affordable bridging with full{" "}
                <br />
                transparency.
              </p>
              <a href="/dapp" target="_blank">
                <button className="custom-btn">Explore</button>
              </a>{" "}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="sliding slide-4">
            <div className="py-5 px-md-5 px-3">
              <div className="mb-5 pb-4">
                <img
                  alt="widget"
                  className="mb-2 ring-updown"
                  src="assets/images/slide4.svg"
                />
              </div>
              <h3 className="text-white">Widget Integration</h3>
              <p className="text-white font-red-hat mb-4 mt-3">
                Seamlessly integrate EMPX DeFi functionality into your platform.
                Our customizable widget allows integrators to embed swaps with
                custom branding and earn fees.
              </p>
              <a
                href="https://widget.empx.io/builder"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="custom-btn">Explore</button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
