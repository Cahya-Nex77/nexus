import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import hmpiLogo from "../assets/hmpi-logo.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../data/translations.js";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const t = translations[lang];

  const navLinks = [
    { label: t.nav.beranda, href: "#beranda" },
    { label: t.nav.tentang, href: "#tentang" },
    { label: t.nav.program, href: "#program" },
    { label: t.nav.dokumentasi, href: "#dokumentasi" },
    { label: t.nav.anggota, href: "#anggota" },
    { label: t.nav.kontak, href: "#kontak" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  const LanguageToggle = ({ className = "" }) => (
    <div className={`flex items-center bg-white/5 border border-white/10 rounded-full p-0.5 ${className}`}>
      <button
        onClick={() => toggleLang("id")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${lang === "id" ? "bg-white/10 text-white" : "text-slate-soft"
          }`}
      >
        ID
      </button>
      <button
        onClick={() => toggleLang("en")}
        className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${lang === "en" ? "bg-white/10 text-white" : "text-slate-soft"
          }`}
      >
        EN
      </button>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass-nav shadow-card" : "bg-transparent"
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

        <div className="hidden lg:flex items-center gap-3">
          <LanguageToggle />
          <a href="#kontak" className="btn-primary !px-6 !py-2.5 text-sm">
            {t.joinButton}
          </a>
        </div>

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
              <LanguageToggle className="mt-2 w-fit" />
              <a
                href="#kontak"
                onClick={handleNavClick}
                className="btn-primary mt-2 w-full text-sm"
              >
                {t.joinButton}
              </a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header >
  );
};

export default Navbar;
