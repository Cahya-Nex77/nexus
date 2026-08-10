import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin, Users, LayoutGrid } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";
import AmbientBackground from "./AmbientBackground.jsx";
import { members } from "../data/members.js";

const divisions = ["Semua Divisi", ...new Set(members.map((m) => m.division))];

// 3 profil utama yang ditonjolkan di tampilan ringkas (Ketua, Wakil Ketua, Sekretaris)
const featuredIds = [1, 2, 3];
const featuredMembers = members.filter((m) => featuredIds.includes(m.id));

/* ---------- Kartu 3D flip untuk tampilan ringkas (3 profil utama) ---------- */
const FlipMemberCard = ({ member, index }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="perspective-1500 h-80 w-full max-w-xs mx-auto cursor-pointer"
      onClick={() => setFlipped((prev) => !prev)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="preserve-3d relative h-full w-full"
      >
        {/* Sisi depan */}
        <div className="backface-hidden card-surface absolute inset-0 flex flex-col items-center justify-center gap-4 p-8 shadow-glow">
          <div className="relative h-32 w-32 overflow-hidden rounded-full ring-4 ring-cyan-glow/30">
            <motion.img
              src={member.photo}
              alt={member.name}
              loading="lazy"
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center">
            <h3 className="font-display text-lg font-semibold text-white">
              {member.name}
            </h3>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-cyan-glow">
              {member.role}
            </p>
          </div>
          <span className="absolute bottom-5 font-mono text-[10px] uppercase tracking-widest text-slate-soft/70">
            Klik / arahkan kursor untuk detail
          </span>
        </div>

        {/* Sisi belakang */}
        <div
          className="backface-hidden card-surface absolute inset-0 flex flex-col items-center justify-center gap-5 border-cyan-glow/30 bg-gradient-to-br from-navy-800 to-navy-900 p-8 shadow-glow-cyan"
          style={{ transform: "rotateY(180deg)" }}
        >
          <Users size={28} className="text-cyan-glow" />
          <div className="text-center">
            <p className="font-display text-base font-semibold text-white">
              {member.division}
            </p>
            <p className="mt-2 text-xs leading-relaxed text-slate-soft">
              Bagian dari Badan Pengurus Harian yang menjalankan roda
              organisasi HMPI.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <motion.a
              href={member.instagram}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-soft transition-colors hover:border-cyan-glow hover:text-cyan-glow"
              aria-label={`Instagram ${member.name}`}
            >
              <Instagram size={16} />
            </motion.a>
            <motion.a
              href={member.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-soft transition-colors hover:border-indigo-glow hover:text-indigo-glow"
              aria-label={`LinkedIn ${member.name}`}
            >
              <Linkedin size={16} />
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

/* ---------- Kartu tilt untuk grid direktori lengkap (25 anggota) ---------- */
const MemberCard = ({ member, index }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientY - bounds.top) / bounds.height - 0.5) * -10;
    const y = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, delay: (index % 5) * 0.06 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ rotateX: tilt.x, rotateY: tilt.y }}
      style={{ transformStyle: "preserve-3d" }}
      className="card-surface perspective-1000 group relative overflow-hidden p-5 transition-shadow duration-300 hover:shadow-glow hover:border-cyan-glow/40"
    >
      <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full ring-2 ring-white/10 transition-all duration-300 group-hover:ring-cyan-glow/60">
        <motion.img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.2 }}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="mt-4 text-center">
        <h3 className="font-display text-sm font-semibold text-white sm:text-base">
          {member.name}
        </h3>
        <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-cyan-glow">
          {member.role}
        </p>
        <p className="mt-1 text-xs text-slate-soft">{member.division}</p>
      </div>

      <div className="mt-4 flex items-center justify-center gap-3">
        <motion.a
          href={member.instagram}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-soft transition-colors hover:border-cyan-glow hover:text-cyan-glow"
          aria-label={`Instagram ${member.name}`}
        >
          <Instagram size={14} />
        </motion.a>
        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.15, y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-soft transition-colors hover:border-indigo-glow hover:text-indigo-glow"
          aria-label={`LinkedIn ${member.name}`}
        >
          <Linkedin size={14} />
        </motion.a>
      </div>
    </motion.div>
  );
};

const Members = () => {
  const [showAll, setShowAll] = useState(false);
  const [activeDivision, setActiveDivision] = useState("Semua Divisi");

  const filteredMembers = useMemo(() => {
    if (activeDivision === "Semua Divisi") return members;
    return members.filter((member) => member.division === activeDivision);
  }, [activeDivision]);

  return (
    <motion.section
      id="anggota"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section-padding bg-navy-950 relative overflow-hidden"
    >
      <AmbientBackground variant="b" />

      <SectionHeading
        eyebrow={`Direktori Anggota - ${members.length} Peserta`}
        title="Wajah-Wajah di Balik HMPI"
        subtitle="Berkenalan dengan jajaran pengurus inti HMPI. Klik atau arahkan kursor ke kartu untuk melihat detail divisi dan tautan sosial masing-masing."
      />

      {!showAll ? (
        <>
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {featuredMembers.map((member, index) => (
              <FlipMemberCard member={member} index={index} key={member.id} />
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="btn-secondary"
            >
              <LayoutGrid size={16} />
              Tampilkan Semua {members.length} Anggota
            </motion.button>
          </div>
        </>
      ) : (
        <>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {divisions.map((division) => {
                const isActive = division === activeDivision;
                return (
                  <button
                    key={division}
                    onClick={() => setActiveDivision(division)}
                    className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-300 sm:text-sm ${
                      isActive
                        ? "border-cyan-glow bg-cyan-glow/10 text-cyan-glow"
                        : "border-white/10 text-slate-soft hover:border-white/30 hover:text-white"
                    }`}
                  >
                    {division}
                  </button>
                );
              })}
            </div>

            <motion.button
              onClick={() => {
                setShowAll(false);
                setActiveDivision("Semua Divisi");
              }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              className="rounded-full border border-white/10 px-4 py-2 text-xs font-medium text-slate-soft transition-colors hover:border-cyan-glow hover:text-cyan-glow sm:text-sm"
            >
              Tampilkan Ringkasan
            </motion.button>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filteredMembers.map((member, index) => (
              <MemberCard member={member} index={index} key={member.id} />
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
};

export default Members;
