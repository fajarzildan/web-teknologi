"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9 animate-pulse rounded-lg bg-gray-200" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-lg bg-gray-100 px-3 py-2 text-sm text-gray-800 hover:ring-2 hover:ring-gray-300 dark:bg-gray-800 dark:text-gray-200 dark:hover:ring-gray-600"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? "☀️ Terang" : "🌙 Gelap"}
    </button>
  );
}