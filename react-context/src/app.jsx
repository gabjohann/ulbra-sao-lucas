import { ThemeProvider } from "./context/ThemeProvider";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Home } from "./pages/home";
import { About } from "./pages/about";

export function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
