
import { Route, BrowserRouter as Router, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import Thesis from "./pages/Thesis.jsx";
import NotFound from "./pages/NotFound.jsx";

// Component to handle Calendly visibility on route changes
const CalendlyManager = () => {
  const location = useLocation();

  useEffect(() => {
    // Get or create the Calendly widget
    const calendlyWidget = document.querySelector('.calendly-badge-widget');
    
    // If on disclaimer page, hide the widget
    if (location.pathname === '/disclaimer') {
      if (calendlyWidget) {
        calendlyWidget.style.display = 'none';
      }
    } else {
      // On other pages, show the widget if it exists
      if (calendlyWidget) {
        calendlyWidget.style.display = 'block';
      } else {
        // If it doesn't exist (e.g., after navigating from disclaimer), reinitialize
        if (window.Calendly && location.pathname !== '/disclaimer') {
          window.Calendly.initBadgeWidget({ 
            url: 'https://calendly.com/oliverbonallack/30min', 
            text: 'book a chat', 
            color: '#ffffff', 
            textColor: '#000000', 
            branding: undefined 
          });
        }
      }
    }
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <CalendlyManager />
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
