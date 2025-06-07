"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const parts = [
  { src: "Part1.svg", offsetY: 0 },
  { src: "Part2.svg", offsetY: 0 },
  { src: "Part3.svg", offsetY: 0 },
  { src: "Part4.svg", offsetY: 0 },
  { src: "Part5.svg", offsetY: 0 },
  { src: "Part6.svg", offsetY: 0 },
  { src: "Part7.svg", offsetY: 0 },
  { src: "Part8.svg", offsetY: 0 },
];

export default function DesktopStrips() {
  return (
    <div className="absolute top-0 left-0 w-full h-[240px] z-10 pointer-events-none">
      <div className="grid grid-cols-8 w-full h-full gap-6 items-start">
        {parts.map((part) => {
          const delay = Math.random() * 0.4 + 0.2;

          return (
            <motion.div
              key={part.src}
              initial={{ y: -100, opacity: 0 }}
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
                src={`/parts/desktop/${part.src}`}
                alt={part.src}
                width={160}
                height={160}
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
