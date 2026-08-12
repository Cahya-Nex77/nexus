import { motion } from "framer-motion";
import { Target, Eye, Users, Trophy, Layers } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import AnimatedCounter from "./ui/AnimatedCounter.jsx";
import AmbientBackground from "./AmbientBackground.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../data/translations.js";

const statIcons = [Users, Trophy, Layers];

const cardVariants = {
  hidden: { opacity: 0, y: 24, rotateX: -12 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const About = () => {
  const { lang } = useLanguage();
  const t = translations[lang].about;

  return (
    <motion.section
      id="tentang"
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

      <div className="relative mt-14 grid grid-cols-1 gap-6 perspective-1000 lg:grid-cols-3">
        {t.stats.map((stat, index) => {
          const Icon = statIcons[index];
          return (
            <motion.div
              key={stat.label}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              whileHover={{ y: -8, rotateX: 8, rotateY: -6, scale: 1.02 }}
              style={{ transformStyle: "preserve-3d" }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="card-surface flex items-center gap-5 p-6 transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-glow/20 to-cyan-glow/20">
                <Icon size={26} className="text-cyan-glow" />
              </div>
              <div>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                <p className="text-sm text-slate-soft">{stat.label}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="relative mt-16 grid grid-cols-1 gap-10 perspective-1000 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -24, rotateY: -18 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ rotateY: 6, rotateX: -4, scale: 1.015 }}
          style={{ transformStyle: "preserve-3d" }}
          className="card-surface p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <Eye size={22} className="text-cyan-glow" />
            <h3 className="font-display text-xl font-semibold text-white">{t.visionTitle}</h3>
          </div>
          <p className="leading-relaxed text-slate-soft">
            {t.visionText}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24, rotateY: 18 }}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ rotateY: -6, rotateX: -4, scale: 1.015 }}
          style={{ transformStyle: "preserve-3d" }}
          className="card-surface p-8"
        >
          <div className="mb-4 flex items-center gap-3">
            <Target size={22} className="text-indigo-glow" />
            <h3 className="font-display text-xl font-semibold text-white">{t.missionTitle}</h3>
          </div>
          <ul className="space-y-3">
            {t.missions.map((mission, index) => (
              <motion.li
                key={mission}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="flex items-start gap-3 text-slate-soft"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-glow" />
                <span className="leading-relaxed">{mission}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;