import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Index from "./pages/Index.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Thesis from "./pages/Thesis.jsx";
import NotFound from "./pages/NotFound.jsx";

// Wrapper component for page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.2 }}
      >
        <Routes location={location}>
          <Route exact path="/" element={<Index />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/thesis" element={<Thesis />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

export default App;