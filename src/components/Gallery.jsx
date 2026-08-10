import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ZoomIn } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import AmbientBackground from "./AmbientBackground.jsx";
import { gallery } from "../data/gallery.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../data/translations.js";

const GalleryCard = ({ item, content, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
    const y = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.figure
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      style={{ transformStyle: "preserve-3d" }}
      className={`card-surface perspective-1000 group relative overflow-hidden mask-fade-edges ${item.span}`}
    >
      <motion.div style={{ y: parallaxY }} className="absolute inset-0 -m-4">
        <motion.img
          src={item.image}
          alt={content.title}
          loading="lazy"
          animate={{
            scale: [1, 1.15, 1.05, 1.18, 1],
            x: ["0%", "-2%", "1%", "-1%", "0%"],
            y: ["0%", "1%", "-2%", "1%", "0%"],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.22 }}
          className="h-full w-full object-cover"
        />
      </motion.div>

      <div
        style={{ transform: "translateZ(20px)" }}
        className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-navy-950/95 via-navy-950/20 to-transparent p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span className="mb-2 flex h-9 w-9 items-center justify-center self-end rounded-full bg-white/10 backdrop-blur-md">
          <ZoomIn size={16} className="text-white" />
        </span>
        <h3 className="font-display text-base font-semibold text-white">
          {content.title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-slate-soft">
          {content.caption}
        </p>
      </div>
    </motion.figure>
  );
};

const Gallery = () => {
  const { lang } = useLanguage();
  const t = translations[lang].gallery;

  return (
    <motion.section
      id="dokumentasi"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section-padding bg-navy-900 relative overflow-hidden"
    >
      <AmbientBackground variant="a" />

      <SectionHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <div className="relative mt-12 grid auto-rows-[220px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, index) => (
          <GalleryCard item={item} content={t.items[item.id]} index={index} key={item.id} />
        ))}
      </div>
    </motion.section>
  );
};

export default Gallery;