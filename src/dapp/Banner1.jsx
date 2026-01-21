import { useEffect, useRef, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
const MENU_CONFIG = [
  {
    key: "bridge",
    left: {
      title: "Bridge",
    },
    right: {
      title: "EMPX Bridge",
      subtitle:
        "Bridge seamlessly across multipulse block chains Native Bridge and Assets",
      buttonText: "Enter Dapp",
      buttonLink: "https://swap-ui-green.vercel.app/bridge",
      extra: {
        title: "Hyperlane",
        subtitle: "Warp Routes by Hyperlane",
        buttonText: "Enter Dapp",
        buttonLink: "https://www.empseal.xyz/bridge/via-brdige",
      },
    },
  },

  {
    key: "trade",
    left: {
      title: "Trade",
    },
    right: {
      title: "Trade",
      // subtitle: "Optimized Onchain Aggregation Best swap trades and routes",
      subtitle: (
        <>
          Optimized Onchain Aggregation <br /> Best swap trades and routes
        </>
      ),
      buttonText: "Enter Dapp",
      buttonLink: "https://swap-ui-green.vercel.app/swap",
    },
  },

  {
    key: "dapp",
    left: {
      title: "Cross Chain",
    },
    right: {
      title: "Cross Chain Swap",
      // subtitle: "Cross chain swap to 30+ chains Smart cross chain Router",
      subtitle: (
        <>
          Cross chain swap to 30+ chains <br /> Smart cross chain Router
        </>
      ),
      buttonText: "Enter Dapp",
      buttonLink: "https://swap-ui-green.vercel.app/bridge",
    },
  },
  {
    key: "gas",
    left: {
      title: "Gas",
    },
    right: {
      title: "GAS",
      // subtitle:
      //   "Out of gas or exploring a new ecosystem? Get gas on over 60+ chains",
      subtitle: (
        <>
          Out of gas or exploring a new ecosystem? <br /> Get gas on over 60+
          chains
        </>
      ),
      buttonText: "Enter Dapp",
      buttonLink: "https://swap-ui-green.vercel.app/gas",
    },
  },
  {
    key: "chain",
    left: {
      title: "Limit Orders",
    },
    right: {
      title: "Limit Orders",
      // subtitle:
      //   "Accumulation & Exit trading strategies Smart solvers and optimized routes Place Limit Orders",
      subtitle: (
        <>
          Accumulation & Exit trading strategies <br /> Smart solvers and
          optimized routes <br /> Place Limit Orders
        </>
      ),
      buttonText: "Enter Dapp",
      buttonLink: "https://swap-ui-green.vercel.app/swap?tab=limit",
    },
  },

  {
    key: "socials",
    left: {
      title: "Socials",
    },
    right: {
      title: "Socials",
      // subtitle:
      //   "Follow us on X Documentation on Medium Join our Telegram Reach out for Integrations and support .",
      subtitle: (
        <>
          Follow us on X <br /> Documentation on Medium <br /> Join our Telegram <br /> Reach
          out for Integrations and support
        </>
      ),
      // buttonText: "Start Staking",
      // buttonLink: "https://swap-ui-green.vercel.app/swap",
    },
  },
];

export default function MPXBridgeUI() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = MENU_CONFIG[activeIndex];
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Audio("/assets/s_sound.mp3");
    soundRef.current.volume = 0.6;
  }, []);
  const playSound = () => {
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.play().catch(() => {});
    }
  };

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

  /* FIXED KEYBOARD NAV + SOUND */
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowDown") {
        setActiveIndex((prev) => {
          playSound();
          return (prev + 1) % MENU_CONFIG.length;
        });
      } else if (e.key === "ArrowUp") {
        setActiveIndex((prev) => {
          playSound();
          return prev === 0 ? MENU_CONFIG.length - 1 : prev - 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  /* FIXED POSITION LOGIC */
  const getPosition = (i) => {
    let pos = i - activeIndex;
    if (pos < -2) pos += MENU_CONFIG.length;
    if (pos > 2) pos -= MENU_CONFIG.length;
    return pos;
  };
  // Mouse Wheel
  useEffect(() => {
    let isScrolling = false;

    const handleWheel = (e) => {
      if (isScrolling) return;

      isScrolling = true;
      playSound();

      if (e.deltaY > 0) {
        // scroll down
        setActiveIndex((prev) => (prev + 1) % MENU_CONFIG.length);
      } else {
        // scroll up
        setActiveIndex((prev) =>
          prev === 0 ? MENU_CONFIG.length - 1 : prev - 1
        );
      }

      // throttle scroll
      setTimeout(() => {
        isScrolling = false;
      }, 600);
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // Mouse Wheel

  return (
    <div className="mpx-container relative">
      <div className="mpx-logo">
        <a href="/">
          <img src="assets/images/emp.svg" alt="MPX Logo" />
        </a>
      </div>

      {/* LEFT SLIDER */}
      <div className="mpx-left z10">
        <div
          className="mpx-slider"
          style={{ overflow: "hiddens", height: "600px", position: "relative" }}
        >
          <AnimatePresence>
            {MENU_CONFIG.map((item, i) => {
              const position = getPosition(i);
              if (position < -2 || position > 2) return null;

              let color;
              switch (position) {
                case -2:
                case 2:
                  // color = "#37260C";
                  color = "#4C320B";
                  break;
                case -1:
                case 1:
                  // color = "#4C320B";
                  color = "#4C320B";
                  break;
                case 0:
                  color = "#FF9900";
                  break;
                default:
                  color = "#4C320B";
                // color = "#4C320B";
              }

              const scale =
                position === 0
                  ? 1
                  : position === 1 || position === -1
                  ? 0.7
                  : 0.45;

              const opacity =
                position === 0
                  ? 1
                  : position === 1 || position === -1
                  ? 1
                  : 0.7;

              let yOffsetBase = 120;
              if (window.innerWidth < 480) {
                yOffsetBase = 65;
              } else if (window.innerWidth < 1700) {
                yOffsetBase = 90;
              } else if (window.innerWidth < 1300) {
                yOffsetBase = 60;
              }

              const yOffset = position * yOffsetBase;

              return (
                <motion.div
                  key={i}
                  initial={{
                    y: position === 2 ? 360 : -360,
                    opacity: 0,
                  }}
                  animate={{ y: yOffset, scale, opacity, color }}
                  exit={{
                    y: position === -2 ? -360 : 360,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.43, 0.13, 0.23, 0.96],
                  }}
                  className={`mpx-slide-item cursor-pointer ${
                    i === activeIndex ? "active" : ""
                  }`}
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    textAlign: "left",
                    cursor: "pointer",
                    userSelect: "none",
                  }}
                  onClick={() => {
                    playSound();
                    setActiveIndex(i);
                  }}
                >
                  {/* <div className="menu-item-wrapper">
                    {i === activeIndex && (
                      <img
                        className="menu-arrow"
                        src="assets/images/sc_bg.svg"
                        alt="active arrow"
                      />
                    )}
                    <span className="menu-title">{item.left.title}</span>
                  </div> */}
                  <div
                    className={`menu-item-wrapper ${
                      i === activeIndex ? "active" : ""
                    }`}
                  >
                    <span className="menu-title">{item.left.title}</span>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div className="mpx-right z10">
        <AnimatePresence mode="wait">
          <motion.div
            className="d-flex flex-column justify-content-center align-items-center mx500"
            key={activeItem.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mpx-title">{activeItem.right.title}</h1>
            <p className="mpx-subtitle">{activeItem.right.subtitle}</p>
            {activeItem.key !== "socials" ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mpx-button"
                onClick={() => {
                  playClickSound();
                  window.open(activeItem.right.buttonLink, "_blank");
                }}
              >
                {/* <img
                  src="assets/images/btn.png"
                  alt="btnbg"
                  className="btnbg"
                /> */}
                <span className="ed">{activeItem.right.buttonText}</span>
              </motion.button>
            ) : (
              <motion.div
                className="d-flex gap-4 mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="socials_style"
                >
                  {/* X ICON */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={35}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF9900"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                    <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                  </svg>
                </a>

                <a
                  href="https://www.telegram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="socials_style"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={35}
                    height={35}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FF9900"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-telegram"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                  </svg>
                </a>

                <a
                  href="https://medium.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="socials_style"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="35"
                    height="35"
                    viewBox="0 -55 256 256"
                    version="1.1"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
                        fill="#FF9900"
                      ></path>
                    </g>
                  </svg>
                </a>
              </motion.div>
            )}

            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mpx-button"
              onClick={() => {
                playClickSound();
                window.open(activeItem.right.buttonLink, "_blank");
              }}
            >
              <img src="assets/images/btn.png" alt="btnbg" className="btnbg" />
              <span className="ed">{activeItem.right.buttonText}</span>
            </motion.button> */}
          </motion.div>
        </AnimatePresence>
        {activeItem.right.extra && (
          <AnimatePresence mode="wait">
            <motion.div
              className="d-flex flex-column justify-content-center align-items-center mx500 mt-4"
              key={activeItem.key}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mpx-title">{activeItem.right.extra.title}</h2>
              <p className="mpx-subtitle">{activeItem.right.extra.subtitle}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="mpx-button"
                onClick={() => {
                  playClickSound();
                  window.open(activeItem.right.extra.buttonLink, "_blank");
                }}
              >
                {/* <img
                  src="assets/images/btn.png"
                  alt="btnbg"
                  className="btnbg"
                /> */}
                <span className="ed"> {activeItem.right.extra.buttonText}</span>
              </motion.button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* SOCIAL ICONS */}
      <div className="mpx-social z10">
        <a href="https://twitter.com/" target="_blank" rel="noreferrer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.751 3H20.818L14.118 10.625L22 21H15.828L10.995 14.707L5.464 21H2.394L9.561 12.845L2 3H8.328L12.698 8.752L17.751 3ZM16.675 19.172H18.375L7.404 4.732H5.58L16.675 19.172Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/" target="_blank" rel="noreferrer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
              fill="white"
            />
          </svg>
        </a>
        <a href="https://youtube.com/" target="_blank" rel="noreferrer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.7609 7.1998C23.7609 7.1998 23.5266 5.54512 22.8047 4.81855C21.8906 3.8623 20.8688 3.85762 20.4 3.80137C17.0438 3.55762 12.0047 3.55762 12.0047 3.55762H11.9953C11.9953 3.55762 6.95625 3.55762 3.6 3.80137C3.13125 3.85762 2.10938 3.8623 1.19531 4.81855C0.473438 5.54512 0.24375 7.1998 0.24375 7.1998C0.24375 7.1998 0 9.14512 0 11.0857V12.9045C0 14.8451 0.239062 16.7904 0.239062 16.7904C0.239062 16.7904 0.473437 18.4451 1.19062 19.1717C2.10469 20.1279 3.30469 20.0951 3.83906 20.1982C5.76094 20.3811 12 20.4373 12 20.4373C12 20.4373 17.0438 20.4279 20.4 20.1889C20.8688 20.1326 21.8906 20.1279 22.8047 19.1717C23.5266 18.4451 23.7609 16.7904 23.7609 16.7904C23.7609 16.7904 24 14.8498 24 12.9045V11.0857C24 9.14512 23.7609 7.1998 23.7609 7.1998ZM9.52031 15.1123V8.36699L16.0031 11.7514L9.52031 15.1123Z"
              fill="white"
            />
          </svg>
        </a>
      </div>

      {/* GRADIENT BOTTOM */}
      <motion.div
        className="mpx-gradient"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3.2, ease: [0.43, 0.13, 0.23, 0.96] }}
      >
        <img src="assets/images/hero-b.png" alt="Bottom" />
      </motion.div>
    </div>
  );
}
