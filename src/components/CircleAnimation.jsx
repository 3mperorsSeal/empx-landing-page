import React, { useEffect, useState, useRef } from "react";

const CircleAnimation = () => {
  const [value, setValue] = useState(0);
  const [start, setStart] = useState(false);
  const sectionRef = useRef(null);

  // Start animation when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
        } else {
          // Reset animation when scrolling away
          setStart(false);
          setValue(0);
        }
      },
      { threshold: 0.3 } // trigger when 30% is visible (more responsive)
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Animate only when "start" is true
  useEffect(() => {
    if (!start) return;
    let progress = 0;
    const interval = setInterval(() => {
      progress += 1;
      if (progress > 100) {
        clearInterval(interval);
      } else {
        setValue(progress);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [start]);

  // Calculate circle properties
  const size = 450;
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;

  // Define color segments (each represents 20% of the circle)
  const colorSegments = [
    { color: "#FFDE58", end: 20 }, // Golden Yellow
    { color: "#C01DC4", end: 40 }, // Vibrant Orange
    { color: "#FB610D", end: 60 }, // Hot Pink/Magenta
    { color: "#FB610D", end: 80 }, // Deep Magenta
    { color: "#FB610D", end: 100 }, // Orange Red
  ];

  // Determine current color based on progress
  const getCurrentColor = () => {
    for (let segment of colorSegments) {
      if (value <= segment.end) {
        return segment.color;
      }
    }
    return colorSegments[colorSegments.length - 1].color;
  };

  return (
    <div className="min-h-screen bg-gray-900 position-absolute top-start end-0 bottom-0 d-lg-block d-none">
      <div style={{ height: "150vh" }}>
        <div ref={sectionRef} className="flex items-center justify-center">
          <div className="relative" style={{ width: size, height: size }}>
            <svg width={size} height={size} className="transform -rotate-90">
              {/* Draw each color segment separately */}
              {colorSegments.map((segment, index) => {
                const segmentStart = index * 20;
                const segmentEnd = segment.end;
                const segmentProgress = Math.max(
                  0,
                  Math.min(20, value - segmentStart)
                );
                const segmentDashoffset =
                  circumference - (segmentProgress / 100) * circumference;
                if (value <= segmentStart) return null;
                return (
                  <circle
                    key={index}
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke={segment.color}
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={`${circumference * 0.2} ${
                      circumference * 0.8
                    }`}
                    strokeDashoffset={
                      -circumference * 0.2 * index + segmentDashoffset
                    }
                    className="transition-all duration-300 ease-out"
                    style={{
                      filter: `drop-shadow(0 0 8px ${segment.color}40)`,
                    }}
                  />
                );
              })}
              {/* Background circle */}
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#333"
                strokeWidth={strokeWidth}
                fill="transparent"
                opacity="0.3"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CircleAnimation;
