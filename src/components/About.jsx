import { motion } from "framer-motion";
import { Target, Eye, Users, Trophy, Layers } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import AnimatedCounter from "./ui/AnimatedCounter.jsx";
import AmbientBackground from "./AmbientBackground.jsx";

const stats = [
  { icon: Users, value: 25, suffix: "+", label: "Anggota Aktif" },
  { icon: Trophy, value: 12, suffix: "", label: "Program Kerja Selesai" },
  { icon: Layers, value: 7, suffix: "", label: "Divisi Organisasi" },
];

const missions = [
  "Membangun ekosistem belajar Informatika yang kolaboratif dan inklusif.",
  "Mendorong riset dan inovasi teknologi yang berdampak bagi masyarakat.",
  "Menjembatani mahasiswa dengan industri melalui program kerja nyata.",
  "Mengembangkan karakter kepemimpinan dan soft skill mahasiswa Informatika.",
];

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
        eyebrow="Tentang Kami"
        title="Mengenal Lebih Dekat HMPI"
        subtitle="Himpunan Mahasiswa Prodi Informatika hadir sebagai wadah aspirasi, kolaborasi, dan pengembangan diri mahasiswa Informatika menuju generasi teknologi yang unggul."
      />

      <div className="relative mt-14 grid grid-cols-1 gap-6 perspective-1000 lg:grid-cols-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
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
            <h3 className="font-display text-xl font-semibold text-white">Visi</h3>
          </div>
          <p className="leading-relaxed text-slate-soft">
            Menjadi himpunan mahasiswa yang unggul dalam mencetak talenta
            Informatika yang kompeten, kolaboratif, dan berintegritas, serta
            berperan aktif dalam kemajuan teknologi di tingkat kampus maupun
            nasional.
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
            <h3 className="font-display text-xl font-semibold text-white">Misi</h3>
          </div>
          <ul className="space-y-3">
            {missions.map((mission, index) => (
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
