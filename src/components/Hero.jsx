import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Circle } from "lucide-react";
import { useMouseParallax } from "../hooks/useMouseParallax.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../data/translations.js";

const codeLines = [
  { text: "const hmpi = {", color: "text-slate-soft" },
  { text: "  visi: 'Inovatif & Berdampak',", color: "text-cyan-glow" },
  { text: "  anggota: 25,", color: "text-cyan-glow" },
  { text: "  status: 'aktif_berkarya',", color: "text-indigo-glow" },
  { text: "};", color: "text-slate-soft" },
];

const nodes = [
  { top: "12%", left: "8%", size: 10, delay: 0 },
  { top: "28%", left: "85%", size: 14, delay: 0.4 },
  { top: "68%", left: "12%", size: 12, delay: 0.8 },
  { top: "82%", left: "78%", size: 8, delay: 1.2 },
  { top: "48%", left: "92%", size: 6, delay: 1.6 },
];

const Hero = () => {
  const { ref, x, y } = useMouseParallax(16);
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section
      ref={ref}
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden bg-navy-950 bg-grid pt-28 pb-16"
    >
      <motion.div style={{ x, y }} className="pointer-events-none absolute inset-0 bg-hero-glow" />

      {nodes.map((node, index) => (
        <motion.span
          key={index}
          style={{ top: node.top, left: node.left, width: node.size, height: node.size, x, y }}
          className="pointer-events-none absolute hidden rounded-full bg-cyan-glow/40 blur-[1px] sm:block"
          animate={{ y: [0, -18, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 5 + index, repeat: Infinity, delay: node.delay, ease: "easeInOut" }}
        />
      ))}

      <div className="section-padding relative z-10 grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col items-start gap-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md"
          >
            <Sparkles size={14} className="text-cyan-glow" />
            <span className="font-mono text-xs tracking-wide text-slate-soft">
              {t.badge}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
          >
            {t.headingPart1}
            <span className="text-gradient">{t.headingHighlight}</span>
            {t.headingPart2}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="max-w-xl text-base leading-relaxed text-slate-soft sm:text-lg"
          >
            {t.paragraph}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-4 perspective-1000 sm:flex-row"
          >
            <motion.a
              href="#program"
              whileHover={{ rotateX: -10, y: -3 }}
              whileTap={{ scale: 0.94, rotateX: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              style={{ transformStyle: "preserve-3d" }}
              className="btn-primary"
            >
              {t.ctaPrimary}
              <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="#anggota"
              whileHover={{ rotateX: -10, y: -3 }}
              whileTap={{ scale: 0.94, rotateX: 8 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              style={{ transformStyle: "preserve-3d" }}
              className="btn-secondary"
            >
              {t.ctaSecondary}
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex items-center gap-6 pt-2"
          >
            {t.stats.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Circle size={6} className="fill-cyan-glow text-cyan-glow" />
                <span className="text-xs font-medium text-slate-soft sm:text-sm">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <motion.div style={{ x, y }}>
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ rotate: -1, scale: 1.02 }}
              className="card-surface shadow-card overflow-hidden"
            >
              <div className="flex items-center gap-2 border-b border-white/10 bg-navy-800/80 px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-red-400/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <span className="h-3 w-3 rounded-full bg-green-400/70" />
                <span className="ml-3 font-mono text-xs text-slate-soft">
                  hmpi_profile.js
                </span>
              </div>
              <div className="space-y-2 px-6 py-8 font-mono text-sm sm:text-base">
                {codeLines.map((line, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                    className={line.color}
                  >
                    {line.text}
                  </motion.p>
                ))}
                <motion.span
                  className="inline-block h-4 w-2 bg-cyan-glow animate-blink"
                  aria-hidden="true"
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="card-surface shadow-glow-cyan absolute -bottom-8 -left-8 hidden w-44 rounded-xl px-4 py-3 sm:block"
            >
              <p className="font-mono text-[11px] text-slate-soft">{t.uptimeLabel}</p>
              <p className="font-display text-lg font-semibold text-cyan-glow">
                {t.uptimeValue}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
