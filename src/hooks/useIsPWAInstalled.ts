import { useEffect, useState } from "react";
interface NavigatorStandalone extends Navigator {
  standalone?: boolean;
}

export function useIsPWAInstalled() {
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const check = () => {
      const isIOS = /iphone|ipad|ipod/.test(
        window.navigator.userAgent.toLowerCase()
      );

      const navigator = window.navigator as NavigatorStandalone;
      const standalone = navigator.standalone === true;

      const isStandalone = window.matchMedia(
        "(display-mode: standalone)"
      ).matches;

      setIsInstalled(isIOS || standalone || isStandalone);
    };

    if (typeof window !== "undefined") check();
  }, []);

  return isInstalled;
}
