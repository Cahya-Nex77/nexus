import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Instagram, Send, CheckCircle2, Youtube } from "lucide-react";
import SectionHeading from "./ui/SectionHeading.jsx";

const contactInfo = [
  {
    icon: Mail,
    label: "Email Resmi",
    value: "hmpiinformatikaupb@gmail.com",
  },
  {
    icon: MapPin,
    label: "Alamat Universitas Peradaban",
    value: " Kec. Paguyangan, Kabupaten Brebes, Jawa Tengah 52276",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "hmpi.up",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "HMPI UPB",
  },
];

const initialForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 3000);
  };

  return (
    <motion.section
      id="kontak"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="section-padding bg-navy-900 relative overflow-hidden"
    >
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-40 -left-32 h-72 w-72 rounded-full bg-cyan-glow/10 blur-3xl"
      />

      <SectionHeading
        eyebrow="Hubungi Kami"
        title="Mari Berkolaborasi dengan HMPI"
        subtitle="Punya pertanyaan, ide kolaborasi, atau ingin bergabung dengan kegiatan kami? Sampaikan pesanmu, tim kami akan segera merespons."
      />

      <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col gap-4"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.label}
                whileHover={{ x: 6 }}
                className="card-surface flex items-start gap-4 p-5 transition-shadow duration-300 hover:shadow-glow-cyan"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-glow/20 to-cyan-glow/20">
                  <Icon size={20} className="text-cyan-glow" />
                </span>
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-slate-soft">
                    {info.label}
                  </p>
                  <p className="mt-1 text-sm text-white sm:text-base">{info.value}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="card-surface relative lg:col-span-3 flex flex-col gap-5 p-8"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-soft">
              Nama Lengkap
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
              required
              className="rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-soft/60 outline-none transition-colors focus:border-cyan-glow"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-soft">
              Alamat Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              required
              className="rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-soft/60 outline-none transition-colors focus:border-cyan-glow"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-soft">
              Pesan
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder="Tulis pesan, pertanyaan, atau ide kolaborasimu di sini..."
              required
              className="resize-none rounded-xl border border-white/10 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-slate-soft/60 outline-none transition-colors focus:border-cyan-glow"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="btn-primary w-full sm:w-fit"
          >
            Kirim Pesan
            <Send size={16} />
          </motion.button>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-2 rounded-xl border border-cyan-glow/30 bg-cyan-glow/10 px-4 py-3 text-sm text-cyan-glow"
              >
                <CheckCircle2 size={18} />
                Pesan berhasil terkirim! Terima kasih sudah menghubungi HMPI.
              </motion.div>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
