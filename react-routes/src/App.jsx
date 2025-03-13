import { BrowserRouter, Routes, Route } from "react-router";
import { About } from "./pages/about";
import { Home } from "./pages/home";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
