import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

function Navigation({ closeMenu }) {
  return (
    <ul className="nav-ul">
      <li className="nav-li">
        <a className="nav-link" href="#home" onClick={closeMenu}>
          Home
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#about" onClick={closeMenu}>
          About
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#projects" onClick={closeMenu}>
          Projects
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#experience" onClick={closeMenu}>
          Experience
        </a>
      </li>
      <li className="nav-li">
        <a className="nav-link" href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </li>
    </ul>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 z-50 w-full backdrop-blur-lg bg-primary/40">
      <div className="w-full px-4">
        <div className="flex items-center justify-between py-2 sm:py-0">
          
          {/* NAME (LEFT ALIGNED) */}
          <a
            href="/"
            className="text-xl font-bold transition-colors text-neutral-400 hover:text-white"
          >
            Federico Gabrielli
          </a>

          {/* HAMBURGER ANIMATED */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center gap-1"
          >
            <span
              className={`block h-0.5 w-6 bg-neutral-400 transition-all duration-300 ease-in-out ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-neutral-400 transition-all duration-300 ease-in-out ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-neutral-400 transition-all duration-300 ease-in-out ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* DROPDOWN WITH ANIMATION SYNC */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            className="absolute right-4 top-full mt-2 overflow-hidden text-center"
            initial={{ opacity: 0, x: 0, y: -10 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, x: 0, y: -10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <nav className="pb-5">
              <Navigation closeMenu={() => setIsOpen(false)} />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;

