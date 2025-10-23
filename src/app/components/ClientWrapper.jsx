"use client";

import React, { createContext, useState, useEffect } from "react";
import Loader from "./Loader";

export const LoadContext = createContext({
  loaded: false,
  setLoaded: () => {}
});

export default function ClientWrapper({ children }) {
  const [loaded, setLoaded] = useState(false);

  // optional: prevent scrolling while loader is visible
  useEffect(() => {
    document.documentElement.style.overflow = loaded ? "" : "hidden";
    return () => (document.documentElement.style.overflow = "");
  }, [loaded]);

  return (
    <LoadContext.Provider value={{ loaded, setLoaded }}>
      {/* Loader is shown until setLoaded(true) */}
      {!loaded && <Loader onComplete={() => setLoaded(true)} />}

      {/* children fade in when loaded becomes true (keeps it simple) */}
      <div
        style={{
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.15s ease",
          pointerEvents: loaded ? "auto" : "none"
        }}
      >
        {children}
      </div>
    </LoadContext.Provider>
  );
}
