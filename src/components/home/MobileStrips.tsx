"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const baseParts = [
  { src: "Part1.svg", offsetY: -50, smallOffsetY: -100 },
  { src: "Part2.svg", offsetY: -50, smallOffsetY: -110 },
  { src: "Part3.svg", offsetY: -40, smallOffsetY: -110 },
  { src: "Part4.svg", offsetY: -50, smallOffsetY: -100 },
];

export default function MobileStrips() {
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmall(window.innerWidth <= 375);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const parts = baseParts.map((part) => ({
    ...part,
    offsetY: isSmall ? part.smallOffsetY : part.offsetY,
  }));

  const imageSize = isSmall ? 65 : 80;
  const containerHeight = isSmall ? "h-[115px]" : "h-[130px]";

  return (
    <div
      className={`absolute top-0 left-0 w-screen ${containerHeight} z-10 pointer-events-none`}
    >
      <div className="grid grid-cols-4 gap-2 w-full h-full items-start">
        {parts.map((part) => {
          const delay = Math.random() * 0.4 + 0.2;

          return (
            <motion.div
              key={part.src}
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay,
              }}
              className="relative"
            >
              <Image
                src={`/parts/mobile/${part.src}`}
                alt={part.src}
                width={imageSize}
                height={imageSize}
                className="block object-cover w-full"
                style={{
                  position: "absolute",
                  top: 0,
                  transform: `translateY(${part.offsetY}px)`,
                }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
