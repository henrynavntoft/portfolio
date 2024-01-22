"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import SunIcon from "./SunIcon";
import MoonIcon from "./MoonIcon";

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDarkMode = theme === "dark";

  const handleThemeChange = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  return (
    <Switch
      checked={isDarkMode}
      onChange={(e) => handleThemeChange(e.target.checked)}
      size="lg"
      color="default"
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
}
