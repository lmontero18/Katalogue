"use client";

import React, { JSX } from "react";
import { cn } from "@/lib/utils";

type IconName = "close-rounded";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
  className?: string;
}

export default function Icon({
  name,
  size = 26,
  className,
  ...props
}: IconProps) {
  const icons: Record<IconName, JSX.Element> = {
    "close-rounded": (
      <svg
        width={size}
        height={size}
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("inline-block", className)}
        {...props}
      >
        <rect width="26" height="26" rx="13" fill="#F2F2F2" />
        <path
          d="M13 14.0646L9.27376 17.7909C9.13435 17.9303 8.95691 18 8.74144 18C8.52598 18 8.34854 17.9303 8.20913 17.7909C8.06971 17.6515 8 17.474 8 17.2586C8 17.0431 8.06971 16.8657 8.20913 16.7262L11.9354 13L8.20913 9.27376C8.06971 9.13435 8 8.95691 8 8.74144C8 8.52598 8.06971 8.34854 8.20913 8.20913C8.34854 8.06971 8.52598 8 8.74144 8C8.95691 8 9.13435 8.06971 9.27376 8.20913L13 11.9354L16.7262 8.20913C16.8657 8.06971 17.0431 8 17.2586 8C17.474 8 17.6515 8.06971 17.7909 8.20913C17.9303 8.34854 18 8.52598 18 8.74144C18 8.95691 17.9303 9.13435 17.7909 9.27376L14.0646 13L17.7909 16.7262C17.9303 16.8657 18 17.0431 18 17.2586C18 17.474 17.9303 17.6515 17.7909 17.7909C17.6515 17.9303 17.474 18 17.2586 18C17.0431 18 16.8657 17.9303 16.7262 17.7909L13 14.0646Z"
          fill="#757575"
        />
      </svg>
    ),
  };

  return icons[name] || null;
}
