import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router";

export function Home() {
  const { toggleTheme } = useTheme();

  return (
    <>
      <h1 className="title">Home</h1>
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>

      <Link to="/about">About</Link>
    </>
  );
}
