import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router";
import { Sun, Moon } from "lucide-react";

export function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h1>Home</h1>
      <div className="toggle-container" onClick={toggleTheme}>
        <div className={`toggle-switch ${theme === "dark" ? "dark" : "light"}`}>
          {theme === "dark" ? (
            <Moon size={20} color="black" />
          ) : (
            <Sun size={20} color="black" />
          )}
        </div>
      </div>
      <Link to="/about">About</Link>
    </>
  );
}
