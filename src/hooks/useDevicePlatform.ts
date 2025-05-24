import { useEffect, useState } from "react";

export function useDevicePlatform() {
  const [platform, setPlatform] = useState<"desktop" | "android" | "ios">(
    "desktop"
  );

  useEffect(() => {
    const userAgent =
      typeof window !== "undefined" ? window.navigator.userAgent : "";
    if (/android/i.test(userAgent)) {
      setPlatform("android");
    } else if (/ipad|iphone|ipod/i.test(userAgent)) {
      setPlatform("ios");
    } else {
      setPlatform("desktop");
    }
  }, []);

  return platform;
}
