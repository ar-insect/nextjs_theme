"use client";

import { useEffect, useState } from "react";

export function useMediaQuery(query: string) {
  const getMatch = () => {
    if (typeof window === "undefined") return false;
    return window.matchMedia(query).matches;
  };

  const [matches, setMatches] = useState<boolean>(getMatch);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mediaQuery = window.matchMedia(query);

    const handler = () => {
      setMatches(mediaQuery.matches);
    };

    handler();
    mediaQuery.addEventListener("change", handler);

    return () => {
      mediaQuery.removeEventListener("change", handler);
    };
  }, [query]);

  return matches;
}
