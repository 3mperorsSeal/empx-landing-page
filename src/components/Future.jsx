const Future = () => {
  return (
    <div className="future-bg my-5 position-relative">
      <div className="container">
        <div data-aos="fade-right" data-aos-duration="2000" className="box">
          <span></span>
          <div className="content f_main">
            <img src="assets/images/l-fav.svg" alt="F1" />
            <img src="assets/images/stars.svg" alt="F1" className="s-tars" />
            <div className="">
              <h2>Superior Swap Efficiency</h2>
              <p className="font-red-hat">
                Lightning-fast token swaps with intelligent aggregation
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="box box-2">
          <span></span>
          <div className="content f_main">
            <img src="assets/images/l-fav.svg" alt="F1" />
            <div className="">
              <h2>Multi-Chain Coverage</h2>
              <p className="font-red-hat">
                Bridge and Cross Chain interoperability make EMPX experience
                seamless
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="box box-3"
        >
          <span></span>
          <div className="content f_main">
            <img src="assets/images/l-fav.svg" alt="F1" />
            <div className="">
              <h2>Limit Orders for Pro Traders</h2>
              <p className="font-red-hat">
                Place conditional orders that trigger at your target price.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Future;
