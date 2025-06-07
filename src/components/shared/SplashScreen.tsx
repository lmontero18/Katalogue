"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

interface SplashScreenProps {
  onFinish: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onFinish }) => {
  const controls = useAnimation();

  useEffect(() => {
    const runSequence = async () => {
      await controls.start({
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.4,
          type: "spring",
          stiffness: 200,
          damping: 10,
        },
      });

      await controls.start({
        rotate: 135,
        transition: { duration: 0.3, ease: "easeInOut" },
      });

      await new Promise((res) => setTimeout(res, 3000));

      onFinish();
    };

    runSequence();
  }, [controls, onFinish]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[var(--color-orange)]"
    >
      <motion.div
        initial={{ y: -200, rotate: 0, opacity: 0 }}
        animate={controls}
      >
        <Image
          src="/shared-icons/katalogue_animation.svg"
          alt="Katalogue animation"
          width={72}
          height={72}
          priority
        />
      </motion.div>
    </motion.div>
  );
};
