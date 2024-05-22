"use client";
import { TbArrowNarrowDown as DownArrowIcon } from "react-icons/tb";
import React, { useState, useEffect } from "react";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileScreen, setIsMobileScreen] = useState(true);

  const handleResize = () => {
    setIsMobileScreen(window.innerWidth <= 768);
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(false);
    } else {
      setIsVisible(!isMobileScreen);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobileScreen) {
    return null;
  }

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
