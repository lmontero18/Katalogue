"use client";

import DesktopStrips from "./DesktopStrips";
import MobileStrips from "./MobileStrips";
import { useEffect, useState } from "react";

export default function Strips() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkSize = () => setIsMobile(window.innerWidth < 768);
    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  return isMobile ? <MobileStrips /> : <DesktopStrips />;
}
