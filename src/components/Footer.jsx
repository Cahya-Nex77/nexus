import { motion } from "framer-motion";
import { Instagram, Youtube, Mail, ArrowUp } from "lucide-react";
import hmpiLogo from "../assets/hmpi-logo.jpg";
import { BsTiktok } from "react-icons/bs";

const quickLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Program Kerja", href: "#program" },
  { label: "Dokumentasi", href: "#dokumentasi" },
  { label: "Anggota", href: "#anggota" },
  { label: "Kontak", href: "#kontak" },
];

const socials = [
  { icon: Instagram, href: "https://instagram.com/hmpi.informatika", label: "Instagram" },
  { icon: BsTiktok, href: "https://tiktok.com/@hmpi.up", label: "TikTok" },
  { icon: Mail, href: "mailto:hmpiinformatikaupb@gmail.com", label: "Email" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-white/5 bg-navy-950 px-6 pt-16 pb-8 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl ring-1 ring-white/10">
              <img src={hmpiLogo} alt="Logo HMPI" className="h-full w-full object-cover" />
            </span>
            <span className="font-display text-lg font-bold text-white">HMPI</span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-soft">
            Himpunan Mahasiswa Prodi Informatika adalah organisasi mahasiswa
            yang berfokus pada pengembangan potensi, kreativitas, dan solidaritas
            mahasiswa Informatika melalui program kerja yang inovatif dan
            berdampak nyata.
          </p>
          <div className="flex items-center gap-3 pt-2">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.92 }}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-soft transition-colors hover:border-cyan-glow hover:text-cyan-glow"
                >
                  <Icon size={16} />
                </motion.a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Tautan Cepat
          </h4>
          <ul className="mt-4 flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-soft transition-colors hover:text-cyan-glow"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Sekretariat
          </h4>
          <p className="mt-4 text-sm leading-relaxed text-slate-soft">
            HMPI Universitas Peradaban
            <br />
             Kec. Paguyangan, Kabupaten Brebes, Jawa Tengah 52276
          </p>
          <p className="mt-3 font-mono text-xs text-slate-soft">
            hmpiinformatikaupb@gmail.com
          </p>
        </div>
      </div>

      <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row">
        <p className="text-xs text-slate-soft">
          &copy; {year} HMPI - Himpunan Mahasiswa Prodi Informatika. Seluruh hak cipta dilindungi.
        </p>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.92 }}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-soft transition-colors hover:border-cyan-glow hover:text-cyan-glow"
          aria-label="Kembali ke atas"
        >
          <ArrowUp size={16} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
