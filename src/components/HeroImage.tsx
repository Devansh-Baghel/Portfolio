"use client";

import React from "react";
import GridDistortion from "./GridDistortion";

function HeroImage() {
  return (
    <div className="h-[700px] w-[700px]">
      <GridDistortion
        imageSrc="/Grad_07.webp"
        grid={10}
        mouse={0.1}
        strength={0.15}
        relaxation={0.9}
        className="images hidden lg:block"
      />
    </div>
  );
}

export default HeroImage;
