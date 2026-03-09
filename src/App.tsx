/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

// Pages
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Servicos from "./pages/Servicos";
import Consultoria from "./pages/Consultoria";
import Contactos from "./pages/Contactos";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* @ts-ignore */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/sobre-nos" element={<Sobre />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/consultoria" element={<Consultoria />} />
        <Route path="/contactos" element={<Contactos />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <CustomCursor />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}
