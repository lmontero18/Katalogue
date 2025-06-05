"use client";

import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { SelectableCard } from "@/components/shared/SelectableCard";
import { CategoryPill } from "@/components/shared/CategoryPill";
import { SplashScreen } from "@/components/shared/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const [inputValue, setInputValue] = useState("");
  const [cardSelected, setCardSelected] = useState("ventas");
  const [pillSelected, setPillSelected] = useState("Regalos");
  const [checkboxes, setCheckboxes] = useState({
    instagram: false,
    whatsapp: false,
    otro: false,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  const handleCheckboxChange = (key: keyof typeof checkboxes) => {
    setCheckboxes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const categoryOptions = [
    { label: "Ropa", icon: "👕" },
    { label: "Flores", icon: "🌼" },
    { label: "Regalos", icon: "🎁" },
  ];

  if (showSplash) {
    return <SplashScreen onFinish={() => {}} />;
  }

  return (
    <main className="space-y-10 p-8 max-w-3xl mx-auto">
      <section>
        <h2 className="heading-1 mb-4">Inputs</h2>
        <Input
          type="text"
          placeholder="Ingresa tu nombre"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </section>

      <section>
        <h2 className="heading-1 mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary">Empieza ahora</Button>
          <Button variant="secondary">Empieza ahora</Button>
          <Button variant="tertiary">Empieza ahora</Button>
          <Button variant="google">Google</Button>
          <Button variant="primary" disabled>
            Disabled
          </Button>
        </div>
      </section>

      <section>
        <h2 className="heading-1 mb-4">Checkboxes</h2>
        <div className="space-y-4">
          {["instagram", "whatsapp", "otro"].map((key) => (
            <label key={key} className="flex items-start gap-3 cursor-pointer">
              <Checkbox
                checked={checkboxes[key as keyof typeof checkboxes]}
                onCheckedChange={() =>
                  handleCheckboxChange(key as keyof typeof checkboxes)
                }
              />
              <div>
                <p className="text-sm font-medium text-black capitalize">
                  {key}
                </p>
                <p className="text-xs text-gray-500 -mt-1">
                  {key === "instagram"
                    ? "¿En serio?"
                    : key === "whatsapp"
                    ? "¿30 fotos de tus productos?"
                    : "Otra opción"}
                </p>
              </div>
            </label>
          ))}
        </div>
      </section>

      <section>
        <h2 className="heading-1 mb-4">Selectable Cards</h2>
        <div className="space-y-3">
          {[
            { label: "Aumentar mis ventas", emoji: "💸", value: "ventas" },
            {
              label: "Facilitar el proceso de compra",
              emoji: "😌",
              value: "compra",
            },
            {
              label: "Tener más visibilidad",
              emoji: "🌐",
              value: "visibilidad",
            },
          ].map((item) => (
            <SelectableCard
              key={item.value}
              label={item.label}
              emoji={item.emoji}
              checked={cardSelected === item.value}
              onChange={() => setCardSelected(item.value)}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="heading-1 mb-4">Category Pills</h2>
        <div className="flex flex-wrap gap-3">
          {categoryOptions.map((cat) => (
            <CategoryPill
              key={cat.label}
              label={cat.label}
              icon={cat.icon}
              checked={pillSelected === cat.label}
              onClick={() => setPillSelected(cat.label)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
