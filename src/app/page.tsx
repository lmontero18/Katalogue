"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SplashScreen } from "@/components/shared/SplashScreen";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <main className="flex flex-col justify-between min-h-screen px-6 py-10 bg-[var(--color-white)] text-center">
          <div />
          <div className="flex flex-col items-center">
            <Image
              src="/shared-icons/mobile-home/imagotipo.svg"
              alt="Katalogue Icon"
              width={350}
              height={350}
            />

            <p className="text-xl md:text-2xl font-medium text-[var(--color-black)] text-center leading-snug max-w-[260px] md:max-w-[380px] mx-auto">
              Todos tus productos disponibles en un solo link
            </p>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Button className="w-full max-w-xs text-white bg-[var(--color-black)] hover:bg-[var(--btn-primary-hover)]">
              Empieza ahora
            </Button>
            <p className="text-sm text-[var(--color-black)] text-center leading-snug mx-auto max-w-full md:max-w-[320px]">
              Al continuar aceptas las Políticas de Privacidad y los Términos y
              Condiciones de Katalogue
            </p>
          </div>
        </main>
      )}
    </>
  );
}
