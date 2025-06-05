"use client";

import { SelectableCard } from "@/components/shared/SelectableCard";
import { Checkbox } from "@/components/ui/checkbox";

import React, { useState } from "react";

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto p-6 space-y-6">
      <SelectableCard
        label="Aumentar mis ventas"
        emoji="💸"
        checked={selected === "ventas"}
        onChange={() => setSelected("ventas")}
      />
      <SelectableCard
        label="Facilitar el proceso de compra"
        emoji="😌"
        checked={selected === "facilitar"}
        onChange={() => setSelected("facilitar")}
      />
      <SelectableCard
        label="Tener una tienda online"
        emoji="🛍️"
        checked={selected === "tienda"}
        onChange={() => setSelected("tienda")}
      />
      <SelectableCard
        label="Tener más visibilidad"
        emoji="🌐"
        checked={selected === "visibilidad"}
        onChange={() => setSelected("visibilidad")}
      />
      <div>
        <Checkbox />
      </div>
    </div>
  );
}
