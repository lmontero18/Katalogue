import { use, useEffect, useState } from "react";

export function useIsPWAInstalled() {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const check = () => {
      const isIOS = /iphone|ipad|ipod/.test(
        window.navigator.userAgent.toLowerCase()
      );
      const standalone = (window.navigator as any).standalone === true;

      const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;

      setIsInstalled(isIOS || standalone || isStandalone);
    };

    if (typeof window !== "undefined") check();
  }, []);
}
