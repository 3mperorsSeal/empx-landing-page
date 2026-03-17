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
      buttonLink: "https://dapp.empx.io/via-bridge",
      // extra: {
      //   title: "Hyperlane",
      //   subtitle: "Warp Routes by Hyperlane",
      //   buttonText: "Enter Dapp",
      //   buttonLink: "https://dapp.empx.io/native-bridge",
      // },
    },
  },

  {
    key: "Swap",
    left: {
      title: "Swap",
    },
    right: {
      title: "Swap",
      // subtitle: "Optimized Onchain Aggregation Best swap trades and routes",
      subtitle: (
        <>
          Optimized Onchain Aggregation <br /> Best swap trades and routes
        </>
      ),
      buttonText: "Enter Dapp",
      buttonLink: "https://dapp.empx.io/swap",
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
      buttonText: "Coming Soon",
      // buttonLink: "https://dapp.empx.io/via-bridge",
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
      buttonLink: "https://dapp.empx.io/gas",
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
      buttonLink: "https://dapp.empx.io/swap?tab=limit",
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
          Follow us on X <br /> Read our Documentation <br /> Join our Telegram{" "}
          <br /> Reach out for Integrations and support
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
          prev === 0 ? MENU_CONFIG.length - 1 : prev - 1,
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
        <motion.div
          className="mpx-slider"
          style={{ overflow: "hidden", height: "600px", position: "relative" }}
          drag="y"
          dragConstraints={{ top: 0, bottom: 0 }}
          dragElastic={0.05}
          dragMomentum={false}
          onDragEnd={(event, info) => {
            const swipeThreshold = 30;

            if (info.offset.y < -swipeThreshold) {
              playSound();
              setActiveIndex((prev) => (prev + 1) % MENU_CONFIG.length);
            } else if (info.offset.y > swipeThreshold) {
              playSound();
              setActiveIndex((prev) =>
                prev === 0 ? MENU_CONFIG.length - 1 : prev - 1,
              );
            }
          }}
        >
          <AnimatePresence>
            {MENU_CONFIG.map((item, i) => {
              const position = getPosition(i);
              if (position < -2 || position > 2) return null;

              let color;
              switch (position) {
                case -2:
                case 2:
                  color = "#434343";
                  break;
                case -1:
                case 1:
                  color = "#4F4F4F";
                  break;
                case 0:
                  color = "#FF9900";
                  break;
                default:
                  color = "#4F4F4F";
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
        </motion.div>
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
                whileHover={activeItem.right.buttonLink ? { scale: 1.05 } : {}}
                whileTap={activeItem.right.buttonLink ? { scale: 0.97 } : {}}
                className="mpx-button"
                style={!activeItem.right.buttonLink ? { cursor: "not-allowed", opacity: 0.7 } : {}}
                onClick={() => {
                  if (!activeItem.right.buttonLink) return;
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
                  href="https://x.com/EmpXio"
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
                  href="https://t.me/EmpXEmpseal"
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
                  href="https://docs.empx.io/"
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-file-text"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                    <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                    <path d="M9 9l1 0" />
                    <path d="M9 13l6 0" />
                    <path d="M9 17l6 0" />
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
                whileHover={activeItem.right.extra.buttonLink ? { scale: 1.05 } : {}}
                whileTap={activeItem.right.extra.buttonLink ? { scale: 0.97 } : {}}
                className="mpx-button"
                style={!activeItem.right.extra.buttonLink ? { cursor: "not-allowed", opacity: 0.7 } : {}}
                onClick={() => {
                  if (!activeItem.right.extra.buttonLink) return;
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
        <a href="https://x.com/EmpXio" target="_blank" rel="noreferrer">
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
        <a href="https://t.me/EmpXEmpseal" target="_blank" rel="noreferrer">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
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
