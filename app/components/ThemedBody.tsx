"use client";
import { ReactNode } from "react";
import { useBackgroundMode } from "./BackgroundContext";
import SpaceBackground from "./SpaceBackground";
import Navigation from "./Navigation";

export default function ThemedBody({ children }: { children: ReactNode }) {
  const { mode } = useBackgroundMode();
  return (
    <body
      className={`antialiased ${mode === 'light' ? 'text-black' : 'text-white'}`}
    >
      <SpaceBackground />
      <Navigation />
      {children}
    </body>
  );
} 