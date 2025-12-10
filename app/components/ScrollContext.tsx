"use client";

import { createContext, useContext, useRef, RefObject } from "react";

type ScrollContextType = {
  scrollRef: RefObject<HTMLDivElement | null>;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollRef: { current: null },
});

export function ScrollProvider({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <ScrollContext.Provider value={{ scrollRef }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContainer() {
  return useContext(ScrollContext);
}
