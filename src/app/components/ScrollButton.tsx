"use client";
import { TbArrowNarrowDown as DownArrowIcon } from "react-icons/tb";
import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleScroll = () => {
    // Check if the user has scrolled more than 100 pixels
    if (window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <a href="#projects">
          <DownArrowIcon
            className="w-12 h-12 text-slate-800 absolute animate-bounce"
            id="down-arrow"
          />
        </a>
      )}
    </div>
  );
};

// const scrollButtonStyle = {
//   position: "fixed",
//   bottom: "50px",
//   right: "50px",
//   padding: "10px 20px",
//   backgroundColor: "#007BFF",
//   color: "#FFF",
//   border: "none",
//   borderRadius: "5px",
//   cursor: "pointer",
//   zIndex: 1000,
// };

export default ScrollButton;
