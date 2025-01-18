import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Thesis from "./pages/Thesis.jsx";
import NotFound from "./pages/NotFound.jsx";

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route exact path="/" element={<Index />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/thesis" element={<Thesis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;