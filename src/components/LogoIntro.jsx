import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import hmpiLogo from "../assets/hmpi-logo.jpg";

const LogoIntro = () => {
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);
  const [progress, setProgress] = useState(0);

  // Animasi pemuatan: hitung persentase 0 -> 100
  useEffect(() => {
    let frameId;
    let start = null;
    const duration = 1900;

    const step = (timestamp) => {
      if (start === null) start = timestamp;
      const elapsed = timestamp - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (elapsed < duration) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, []);

  useEffect(() => {
    const exitTimer = setTimeout(() => setExiting(true), 2300);
    const removeTimer = setTimeout(() => setVisible(false), 3000);
    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    if (!visible) {
      document.body.style.overflow = "auto";
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-navy-950 bg-grid"
          aria-hidden="true"
        >
          <motion.div
            animate={{ scale: exiting ? 0.85 : 1, opacity: exiting ? 0 : 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="perspective-1500"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.3, rotateY: -120, rotateX: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotateY: [0, 360],
                rotateX: [8, -8, 8],
              }}
              transition={{
                opacity: { duration: 0.6 },
                scale: { duration: 0.8, ease: "backOut" },
                rotateY: { duration: 3.4, repeat: Infinity, ease: "linear", delay: 0.5 },
                rotateX: { duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48"
            >
              <div className="absolute inset-0 -z-10 rounded-full bg-cyan-glow/30 blur-2xl" />
              <img
                src={hmpiLogo}
                alt="Logo HMPI"
                className="h-full w-full rounded-full object-cover shadow-glow ring-4 ring-white/10"
                style={{ backfaceVisibility: "hidden" }}
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: exiting ? 0 : 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-display text-2xl font-bold tracking-[0.15em] text-white sm:text-3xl">
              HMPI.UP
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-slate-soft">
              Himpunan Mahasiswa Prodi Informatika
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: exiting ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="flex w-40 flex-col items-center gap-2 sm:w-52"
          >
            <div className="h-[3px] w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.15 }}
                className="h-full bg-gradient-to-r from-indigo-glow to-cyan-glow"
              />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-slate-soft">
              MEMUAT {progress}%
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LogoIntro;
