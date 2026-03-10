import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuItems = [
  {
    title: "Bridge",
    subtitle:
      "Bridge seamlessly across multipulse block chains. Pay for gas on new chains or existing ones.",
    buttonText: "Enter Bridge",
    buttonLink: "https://swap-ui-green.vercel.app/swap",
  },
  {
    title: "Swap",
    subtitle: "Swap instantly across chains.",
    buttonText: "Enter Swap",
    buttonLink: "https://swap-ui-green.vercel.app/swap",
  },
  {
    title: "Swap",
    subtitle: "Swap securely with low fees and fast execution.",
    buttonText: "Enter Swap",
    buttonLink: "https://swap-ui-green.vercel.app/swap",
  },
  {
    title: "Dapp",
    subtitle: "Access decentralized applications.",
    buttonText: "Enter Dapp",
    buttonLink: "https://swap-ui-green.vercel.app/swap",
  },
  {
    title: "Token",
    subtitle: "Interact across multiple Tokens.",
    buttonText: "Enter Tokens",
    buttonLink: "https://swap-ui-green.vercel.app/swap",
  },
  {
    title: "Chain",
    subtitle: "Interact across multiple chains.",
    buttonText: "Enter Chains",
    buttonLink: "https://swap-ui-green.vercel.app/swap",
  },
  {
    title: "Stake",
    subtitle: "Earn passive income with staking.",
    buttonText: "Enter Stake",
    buttonLink: "https://swap-ui-green.vercel.app/swap",
  },
];

export default function MPXBridgeUI() {
  const [activeIndex, setActiveIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActiveIndex((prev) => (prev + 1) % menuItems.length);
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  const getPosition = (i) => {
    let pos = i - activeIndex;
    if (pos < -2) pos += menuItems.length;
    if (pos > 2) pos -= menuItems.length;
    return pos;
  };

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
          style={{ overflow: "hidden", height: "600px", position: "relative" }}
        >
          <AnimatePresence>
            {menuItems.map((item, i) => {
              const position = getPosition(i);
              if (position < -2 || position > 2) return null;
              let color;
              switch (position) {
                case -2:
                case 2:
                  color = "#37260C";
                  break;
                case -1:
                case 1:
                  color = "#4C320B";
                  break;
                case 0:
                  color = "#FF9900";
                  break;
                default:
                  color = "#4C320B";
              }

              const scale =
                position === 0
                  ? 1
                  : position === 1 || position === -1
                  ? 0.7
                  : 0.45;
              const opacity =
                position === 0 ? 1 : position === 1 || position === -1 ? 1 : 1;
              let yOffsetBase = 120;

              if (window.innerWidth < 480) {
                yOffsetBase = 70;
              } else if (window.innerWidth < 1700) {
                yOffsetBase = 90;
              } else if (window.innerWidth < 1300) {
                yOffsetBase = 60;
              }

              const yOffset = position * yOffsetBase;
              const xOffset = position === 0 ? 0 : 0;
              //  const xOffset = position === 0 ? -10 : 0;

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
                  className="mpx-slide-item"
                  style={{
                    position: "absolute",
                    left: 0,
                    right: 0,
                    textAlign: "left",
                  }}
                >
                  {item.title}
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
            key={menuItems[activeIndex].title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mpx-title">{menuItems[activeIndex].title}</h1>
            <p className="mpx-subtitle">{menuItems[activeIndex].subtitle}</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="mpx-button"
              onClick={() =>
                window.open(menuItems[activeIndex].buttonLink, "_blank")
              }
            >
              <img src="assets/images/btn.png" alt="btnbg" className="btnbg" />
              <span className="ed">{menuItems[activeIndex].buttonText}</span>
            </motion.button>
          </motion.div>
        </AnimatePresence>
      </div>
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
