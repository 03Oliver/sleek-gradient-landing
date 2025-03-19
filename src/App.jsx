
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Thesis from "./pages/Thesis.jsx";
import NotFound from "./pages/NotFound.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx";

function App() {
  return (
    <Router>
      <ThemeToggle />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/thesis" element={<Thesis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
