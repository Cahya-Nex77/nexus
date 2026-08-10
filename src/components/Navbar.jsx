import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import hmpiLogo from "../assets/hmpi-logo.jpg";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program Kerja", href: "#program" },
  { label: "Dokumentasi", href: "#dokumentasi" },
  { label: "Anggota", href: "#anggota" },
  { label: "Kontak", href: "#kontak" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-card" : "bg-transparent"
      }`}
    >
      <nav className="section-padding !py-4 flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-2.5 group perspective-1000">
          <motion.span
            whileHover={{ rotateY: 180 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="preserve-3d flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl shadow-glow ring-1 ring-white/10"
          >
            <img src={hmpiLogo} alt="Logo HMPI" className="h-full w-full object-cover" />
          </motion.span>
          <span className="flex flex-col leading-tight">
            <span className="font-display font-bold text-lg text-white tracking-wide">
              HMPI
            </span>
            <span className="hidden sm:block text-[10px] font-mono tracking-widest text-slate-soft uppercase">
              Prodi Informatika
            </span>
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-slate-soft transition-colors duration-200 hover:text-white group"
              >
                {link.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px scale-x-0 bg-gradient-to-r from-indigo-glow to-cyan-glow transition-transform duration-300 group-hover:scale-x-100 origin-left" />
              </a>
            </li>
          ))}
        </ul>

        <a href="#kontak" className="hidden lg:inline-flex btn-primary !px-6 !py-2.5 text-sm">
          Gabung HMPI
        </a>

        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white"
          aria-label="Buka menu navigasi"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden glass-nav border-t border-white/5"
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.04 }}
                >
                  <a
                    href={link.href}
                    onClick={handleNavClick}
                    className="block rounded-lg px-4 py-3 text-slate-soft transition-colors hover:bg-white/5 hover:text-white"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <a
                href="#kontak"
                onClick={handleNavClick}
                className="btn-primary mt-2 w-full text-sm"
              >
                Gabung HMPI
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
