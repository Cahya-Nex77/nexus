import { motion } from "framer-motion";
import { useMouseParallax } from "../hooks/useMouseParallax.js";

/**
 * Lapisan latar belakang ambient: gradient blob yang melayang perlahan
 * dan bereaksi halus terhadap posisi kursor (parallax).
 * Ditempatkan di dalam section dengan class parent "relative overflow-hidden".
 */
const AmbientBackground = ({ variant = "a" }) => {
  const { ref, x, y } = useMouseParallax(24);

  const palettes = {
    a: ["bg-indigo-glow/15", "bg-cyan-glow/10"],
    b: ["bg-cyan-glow/12", "bg-indigo-glow/12"],
  };

  const [colorOne, colorTwo] = palettes[variant] ?? palettes.a;

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        style={{ x, y }}
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 12, 0],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className={`absolute -top-24 -left-24 h-80 w-80 rounded-full ${colorOne} blur-3xl`}
      />
      <motion.div
        style={{ x, y }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, -14, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className={`absolute -bottom-28 -right-20 h-96 w-96 rounded-full ${colorTwo} blur-3xl`}
      />
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/3 h-2 w-2 -translate-x-1/2 rounded-full bg-cyan-glow/60 blur-[1px]"
      />
    </div>
  );
};

export default AmbientBackground;
