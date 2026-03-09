import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Sobre Nós", path: "/sobre-nos" },
  { name: "Serviços", path: "/servicos" },
  { name: "Consultoria", path: "/consultoria" },
  { name: "Contactos", path: "/contactos" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={twMerge(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-500",
          isScrolled
            ? "bg-ac-black/90 backdrop-blur-md py-4 border-b border-white/5"
            : "bg-transparent py-6",
        )}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            to="/"
            className="text-2xl font-serif tracking-widest text-ac-white group"
          >
            AC
            <span className="text-ac-gold transition-colors duration-300 group-hover:text-ac-gold-soft">
              .
            </span>
            STUDIO
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={clsx(
                  "text-sm uppercase tracking-widest transition-colors duration-300 relative group",
                  location.pathname === link.path
                    ? "text-ac-gold"
                    : "text-ac-white/70 hover:text-ac-white",
                )}
              >
                {link.name}
                <span
                  className={clsx(
                    "absolute -bottom-2 left-0 w-full h-[1px] bg-ac-gold transform origin-left transition-transform duration-300",
                    location.pathname === link.path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
            <Link
              to="/contactos"
              className="px-6 py-2 border border-ac-gold text-ac-gold text-sm uppercase tracking-widest hover:bg-ac-gold hover:text-ac-black transition-all duration-300"
            >
              Falar Connosco
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-ac-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-30 bg-ac-black flex flex-col items-center justify-center pt-20"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    className={clsx(
                      "text-3xl font-serif tracking-wider transition-colors duration-300",
                      location.pathname === link.path
                        ? "text-ac-gold"
                        : "text-ac-white/70 hover:text-ac-white",
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
