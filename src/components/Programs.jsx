import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarDays, ArrowUpRight } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import AmbientBackground from "./AmbientBackground.jsx";
import { departmentKeys, programItems } from "../data/programs.js";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../data/translations.js";

const ProgramCard = ({ program, t }) => {
<<<<<<< HEAD
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const content = t.items[program.id];
  const departmentLabel = t.departments[program.departmentKey];
=======
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
>>>>>>> d1ef86d57dff6a22dd817c1b6c6de51c04ff2864

    const content = t.items[program.id];
    const departmentLabel = t.departments[program.departmentKey];
    const tagLabel = program.tagKey ? t.tags[program.tagKey] : null;

    const handleMouseMove = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();

<<<<<<< HEAD
  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.9, rotateY: -25, y: 20 }}
      animate={{ opacity: 1, scale: 1, rotateY: 0, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, rotateY: 25, y: -20 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: tilt.x,
        rotateY: tilt.y,
        transformStyle: "preserve-3d",
      }}
      className="card-surface perspective-1000 group relative flex flex-col gap-4 overflow-hidden p-6 transition-shadow duration-300 hover:shadow-glow"
    >
      <span
        style={{ transform: "translateZ(24px)" }}
        className="w-fit rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-indigo-glow"
      >
        {departmentLabel}
      </span>

      <h3
        style={{ transform: "translateZ(24px)" }}
        className="font-display text-lg font-semibold leading-snug text-white"
      >
        {content.title}
      </h3>

      <p className="text-sm leading-relaxed text-slate-soft">
        {content.description}
      </p>

      <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
        <span className="flex items-center gap-2 text-xs text-slate-soft">
          <CalendarDays size={14} />
          {content.date}
        </span>

        <motion.span
          whileHover={{ x: 3, y: -3, rotateY: 180 }}
          transition={{ duration: 0.5 }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-soft transition-colors group-hover:border-cyan-glow group-hover:text-cyan-glow"
        >
          <ArrowUpRight size={16} />
        </motion.span>
      </div>
    </motion.article>
  );
};

const Programs = () => {
  const { lang } = useLanguage();
  const t = translations[lang].programs;
  const [activeDepartment, setActiveDepartment] = useState("all");

  const filteredPrograms =
    activeDepartment === "all"
      ? programItems
      : programItems.filter(
          (program) => program.departmentKey === activeDepartment
        );

  return (
    <motion.section
      id="program"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section-padding bg-navy-950 relative overflow-hidden"
    >
      <AmbientBackground variant="b" />

      <SectionHeading
        eyebrow={t.eyebrow}
        title={t.title}
        subtitle={t.subtitle}
      />

      <LayoutGroup>
        <div className="relative mt-10 flex flex-wrap gap-2 perspective-1000">
          {departmentKeys.map((departmentKey) => {
            const isActive = departmentKey === activeDepartment;

            return (
              <motion.button
                key={departmentKey}
                onClick={() => setActiveDepartment(departmentKey)}
                whileHover={{ rotateX: -8, y: -2 }}
                whileTap={{ rotateX: 10, scale: 0.94 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 20,
                }}
                style={{ transformStyle: "preserve-3d" }}
                className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-soft hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-department-pill"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-glow to-cyan-glow shadow-glow"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10">
                  {t.departments[departmentKey]}
                </span>
              </motion.button>
=======
        const x =
            ((event.clientY - bounds.top) / bounds.height - 0.5) * -14;

        const y =
            ((event.clientX - bounds.left) / bounds.width - 0.5) * 14;

        setTilt({ x, y });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
    };

    return (
        <motion.article
            initial={{
                opacity: 0,
                scale: 0.9,
                rotateY: -25,
                y: 20,
            }}
            animate={{
                opacity: 1,
                scale: 1,
                rotateY: 0,
                y: 0,
            }}
            exit={{
                opacity: 0,
                scale: 0.9,
                rotateY: 25,
                y: -20,
            }}
            transition={{
                duration: 0.45,
                ease: "easeOut",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: tilt.x,
                rotateY: tilt.y,
                transformStyle: "preserve-3d",
            }}
            className="card-surface perspective-1000 group relative flex flex-col gap-4 overflow-hidden p-6 transition-shadow duration-300 hover:shadow-glow"
        >
            {tagLabel && (
                <span
                    style={{ transform: "translateZ(30px)" }}
                    className="absolute right-4 top-4 rounded-full border border-cyan-glow/40 bg-cyan-glow/10 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-glow"
                >
                    {tagLabel}
                </span>
            )}

            <span
                style={{ transform: "translateZ(24px)" }}
                className="w-fit rounded-full bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-indigo-glow"
            >
                {departmentLabel}
            </span>

            <h3
                style={{ transform: "translateZ(24px)" }}
                className="font-display text-lg font-semibold leading-snug text-white"
            >
                {content.title}
            </h3>

            <p className="text-sm leading-relaxed text-slate-soft">
                {content.description}
            </p>

            <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
                <span className="flex items-center gap-2 text-xs text-slate-soft">
                    <CalendarDays size={14} />
                    {content.date}
                </span>

                <motion.span
                    whileHover={{
                        x: 3,
                        y: -3,
                        rotateY: 180,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-soft transition-colors group-hover:border-cyan-glow group-hover:text-cyan-glow"
                >
                    <ArrowUpRight size={16} />
                </motion.span>
            </div>
        </motion.article>
    );
};

const Programs = () => {
    const { lang } = useLanguage();
    const t = translations[lang].programs;

    const [activeDepartment, setActiveDepartment] = useState("all");

    const filteredPrograms =
        activeDepartment === "all"
            ? programItems
            : programItems.filter(
                (program) =>
                    program.departmentKey === activeDepartment
>>>>>>> d1ef86d57dff6a22dd817c1b6c6de51c04ff2864
            );

<<<<<<< HEAD
      {activeDepartment !== "all" && (
        <motion.div
          key={activeDepartment}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="relative mt-6 max-w-3xl"
        >
          <h3 className="font-display text-xl font-semibold text-white">
            {t.departmentDescriptions[activeDepartment].name}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-slate-soft">
            {t.departmentDescriptions[activeDepartment].description}
          </p>
        </motion.div>
      )}

      <motion.div
        layout
        className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filteredPrograms.map((program) => (
            <ProgramCard
              program={program}
              t={t}
              key={program.id}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
=======
    return (
        <motion.section
            id="program"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
                once: true,
                amount: 0.1,
            }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
            }}
            className="section-padding bg-navy-950 relative overflow-hidden"
        >
            <AmbientBackground variant="b" />

            <SectionHeading
                eyebrow={t.eyebrow}
                title={t.title}
                subtitle={t.subtitle}
            />

            {/* Department Filter */}
            <div className="relative mt-10 flex flex-wrap gap-2 perspective-1000">
                {departmentKeys.map((departmentKey) => {
                    const isActive =
                        departmentKey === activeDepartment;

                    return (
                        <motion.button
                            key={departmentKey}
                            onClick={() =>
                                setActiveDepartment(departmentKey)
                            }
                            whileHover={{
                                rotateX: -8,
                                y: -2,
                            }}
                            whileTap={{
                                rotateX: 10,
                                scale: 0.94,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 20,
                            }}
                            style={{
                                transformStyle: "preserve-3d",
                            }}
                            className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                                isActive
                                    ? "text-white"
                                    : "text-slate-soft hover:text-white"
                            }`}
                        >
                            {isActive && (
                                <span
                                    className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-glow to-cyan-glow shadow-glow"
                                />
                            )}

                            <span className="relative z-10">
                                {t.departments[departmentKey]}
                            </span>
                        </motion.button>
                    );
                })}
            </div>

            {/* Program Cards */}
            <div className="relative mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence>
                    {filteredPrograms.map((program) => (
                        <ProgramCard
                            key={program.id}
                            program={program}
                            t={t}
                        />
                    ))}
                </AnimatePresence>
            </div>
        </motion.section>
    );
>>>>>>> d1ef86d57dff6a22dd817c1b6c6de51c04ff2864
};

export default Programs;