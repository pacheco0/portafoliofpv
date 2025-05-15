"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Define the possible background modes
export type BackgroundMode = "dark" | "light";

// Define the shape of the context value
interface BackgroundContextProps {
  mode: BackgroundMode; // The current mode
  toggleMode: () => void; // Function to switch modes
}

// Create the context with an initial undefined value
const BackgroundContext = createContext<BackgroundContextProps | undefined>(undefined);

// This component provides the background mode context to its children
export function BackgroundProvider({ children }: { children: ReactNode }) {
  // State to store the current mode, default is 'dark'
  const [mode, setMode] = useState<BackgroundMode>("dark");
  // Function to toggle between dark and light mode
  const toggleMode = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));
  return (
    // Provide the mode and toggle function to all children
    <BackgroundContext.Provider value={{ mode, toggleMode }}>
      {children}
    </BackgroundContext.Provider>
  );
}

// Custom hook to use the background mode context
export function useBackgroundMode() {
  const context = useContext(BackgroundContext);
  // Throw an error if used outside the provider
  if (!context) throw new Error("useBackgroundMode must be used within a BackgroundProvider");
  return context;
} 