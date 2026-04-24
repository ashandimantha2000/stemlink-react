import React from "react";
import { useThemeStore } from "../../context/Zustand/useThemeStore";

function Header() {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div>
      <h3>Current Theme: {theme} {theme == "light"? "☀️": "🌙"}</h3>
    </div>
  );
}

export default Header;
