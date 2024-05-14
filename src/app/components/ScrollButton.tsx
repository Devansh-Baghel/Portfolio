"use client";
import { TbArrowNarrowDown as DownArrowIcon } from "react-icons/tb";
import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(window.innerWidth > 1100);

  const handleScroll = () => {
    // Check if the user has scrolled more than 100 pixels
    if (window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(window.innerWidth > 1100);
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

export default ScrollButton;
