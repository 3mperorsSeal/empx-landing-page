// import React, { useEffect, useState, useRef } from "react";
// import CircleAnimation from "./CircleAnimation";
// import CircleAnimationMobile from "./CircleAnimation Mobile";

const BuySell = () => {
  return (
    <section className="container mybuy">
      <div className="row">
        <div className="col-md-9 col-12">
          <h5 className="text-white mb-0">
            Best rates + low fees + full decentralization
          </h5>
          <div className="typing-wrapper w-100">
            <div className="typing line1">Buy, sell, and manage</div>
            <div className="typing line2">digital assets securely on</div>
            <div className="typing line3">the most efficient</div>
            <div className="typing line4">blockchain platform.</div>
          </div>
        </div>
        {/* d-md-block d-none */}
        <div className="col-md-3 col-12">
          <img
            alt="sell"
            className="position-absolute end-0 mx20"
            src="assets/images/half.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default BuySell;
