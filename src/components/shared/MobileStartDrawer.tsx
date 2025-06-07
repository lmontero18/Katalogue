"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerClose,
  DrawerTitle,
  DrawerDescription,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Icon from "@/components/shared/Icon";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function MobileStartDrawer({ open, onOpenChange }: Props) {
  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="rounded-t-[32px] bg-[var(--color-pure-white)] px-6 pt-6 pb-10 text-left">
        <div className="flex items-center justify-between">
          <Image
            src="/shared-icons/mobile-home/drawer/katalogue_icon_drawer.svg"
            alt="Katalogue logo"
            width={35}
            height={35}
          />
          <DrawerClose asChild>
            <button aria-label="Cerrar drawer">
              <Icon name="close-rounded" size={35} />
            </button>
          </DrawerClose>
        </div>

        <DrawerHeader className="mt-6 p-0 text-left">
          <DrawerTitle className="heading-1 mb-2">Empieza ahora</DrawerTitle>
          <DrawerDescription className="font-normal text-md text-[var(--color-black)]">
            Regístrate para vender más fácil y rápido con todos tus productos en
            un solo link
          </DrawerDescription>
        </DrawerHeader>

        <div className="mt-6 flex flex-col gap-4">
          <Button variant="google">
            <Image
              src="/shared-icons/mobile-home/drawer/google_icon.svg"
              alt="Google Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            Continúa con Google
          </Button>

          <Button variant="tertiary">Continúa con correo</Button>

          <Button variant="secondary">Empieza ahora</Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
