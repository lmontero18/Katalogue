import { use, useEffect, useState } from "react";

export function useInstallPrompt() {
  const [prompt, setPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener("beforeinstallprompt", handler);

    return () => {
      window.removeEventListener("beforeinstallprompt", handler);
    };
  }, []);

  const install = async () => {
    if (!prompt) return;
    prompt.prompt();
    const result = await prompt.userChoice;
    setPrompt(null);
    setIsInstallable(false);
    return result.outcome;
  };

  return { isInstallable, install };
}
