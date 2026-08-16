import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, CheckCircle2, Send, ChevronDown, Check } from "lucide-react";
import hmpiLogo from "../assets/hmpi-logo.jpg";
import { useLanguage } from "../context/LanguageContext.jsx";
import { translations } from "../data/translations.js";

const GlassDropdown = ({ value, onChange, options }) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        onChange(option);
        setOpen(false);
    };

    return (
        <div ref={wrapperRef} className="relative">
            <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-[10px] border border-white/10 bg-navy-900 px-3.5 py-2.5 text-left text-[13.5px] text-white outline-none transition-colors focus:border-cyan-glow"
            >
                <span>{value}</span>
                <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={15} className="text-slate-soft" />
                </motion.span>
            </button>

            <AnimatePresence>
                {open && (
                    <motion.ul
                        initial={{ opacity: 0, y: -6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -6, scale: 0.98 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className="absolute z-20 mt-1.5 max-h-56 w-full overflow-auto rounded-[10px] border border-white/15 bg-white/10 p-1.5 shadow-glow backdrop-blur-xl"
                    >
                        {options.map((option) => {
                            const isActive = option === value;
                            return (
                                <li key={option}>
                                    <button
                                        type="button"
                                        onClick={() => handleSelect(option)}
                                        className={`flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-[13px] transition-colors ${isActive
                                                ? "bg-white/15 text-white"
                                                : "text-slate-soft hover:bg-white/10 hover:text-white"
                                            }`}
                                    >
                                        {option}
                                        {isActive && <Check size={14} className="text-cyan-glow" />}
                                    </button>
                                </li>
                            );
                        })}
                    </motion.ul>
                )}
            </AnimatePresence>
        </div>
    );
};

const JoinModal = ({ isOpen, onClose }) => {
    const { lang } = useLanguage();
    const tm = translations[lang].joinModal;

    const [form, setForm] = useState({ name: "", nim: "", division: tm.divisionOptions[1], email: "", phone: "" });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    // Reset division value when language changes so it always matches current options
    useEffect(() => {
        setForm((prev) => ({ ...prev, division: tm.divisionOptions[1] }));
    }, [lang]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleDivisionChange = (division) => {
        setForm((prev) => ({ ...prev, division }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!form.name || !form.nim || !form.email || !form.phone) return;

        setLoading(true);
        setError("");

        try {
            const response = await fetch("http://localhost:5000/api/join", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (!response.ok) {
                throw new Error("Gagal mengirim data");
            }

            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setForm({ name: "", nim: "", division: tm.divisionOptions[1], email: "", phone: "" });
                onClose();
            }, 2000);
        } catch (err) {
            setError("Gagal mengirim pendaftaran. Coba lagi.");
        } finally {
            setLoading(false);
        }
    };

    const handleBackdropClick = (event) => {
        if (event.target === event.currentTarget) onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackdropClick}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/80 backdrop-blur-sm px-4"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 16 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 16 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        className="relative flex w-full max-w-2xl overflow-hidden rounded-2xl border border-white/10 bg-navy-950 shadow-glow"
                    >
                        <button
                            onClick={onClose}
                            aria-label="Tutup"
                            className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                        >
                            <X size={16} />
                        </button>

                        {/* Side panel */}
                        <div className="hidden w-64 shrink-0 flex-col justify-between bg-gradient-to-br from-indigo-glow/90 via-purple-700/80 to-cyan-glow/80 p-7 sm:flex">
                            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-white/15 ring-1 ring-white/20">
                                <img src={hmpiLogo} alt="Logo HMPI" className="h-full w-full object-cover" />
                            </div>
                            <div>
                                <p className="mb-1.5 text-xs text-white/80">{tm.sideTagline}</p>
                                <p className="text-lg font-semibold leading-snug text-white">
                                    {tm.sideText}
                                </p>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="flex-1 p-7">
                            <div className="mb-4">
                                <h3 className="text-lg font-semibold text-white">{tm.title}</h3>
                                <p className="mt-1 text-[13px] text-slate-soft">
                                    {tm.subtitle}
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
                                <div>
                                    <label htmlFor="name" className="mb-1.5 block text-[12.5px] font-medium text-slate-soft">
                                        {tm.labelName}
                                    </label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder={tm.placeholderName}
                                        required
                                        className="w-full rounded-[10px] border border-white/10 bg-navy-900 px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-slate-soft/50 outline-none transition-colors focus:border-cyan-glow"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="nim" className="mb-1.5 block text-[12.5px] font-medium text-slate-soft">
                                        {tm.labelNim}
                                    </label>
                                    <input
                                        id="nim"
                                        name="nim"
                                        type="text"
                                        value={form.nim}
                                        onChange={handleChange}
                                        placeholder={tm.placeholderNim}
                                        required
                                        className="w-full rounded-[10px] border border-white/10 bg-navy-900 px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-slate-soft/50 outline-none transition-colors focus:border-cyan-glow"
                                    />
                                </div>

                                <div>
                                    <label className="mb-1.5 block text-[12.5px] font-medium text-slate-soft">
                                        {tm.labelDivision}
                                    </label>
                                    <GlassDropdown
                                        value={form.division}
                                        onChange={handleDivisionChange}
                                        options={tm.divisionOptions}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="mb-1.5 block text-[12.5px] font-medium text-slate-soft">
                                        {tm.labelEmail}
                                    </label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="nama@email.com"
                                        required
                                        className="w-full rounded-[10px] border border-white/10 bg-navy-900 px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-slate-soft/50 outline-none transition-colors focus:border-cyan-glow"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="mb-1.5 block text-[12.5px] font-medium text-slate-soft">
                                        {tm.labelPhone}
                                    </label>
                                    <input
                                        id="phone"
                                        name="phone"
                                        type="text"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="08xxxxxxxxxx"
                                        required
                                        className="w-full rounded-[10px] border border-white/10 bg-navy-900 px-3.5 py-2.5 text-[13.5px] text-white placeholder:text-slate-soft/50 outline-none transition-colors focus:border-cyan-glow"
                                    />
                                </div>

                                {error && (
                                    <p className="text-[12.5px] text-red-400">{error}</p>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={loading}
                                    whileHover={{ scale: loading ? 1 : 1.01 }}
                                    whileTap={{ scale: loading ? 1 : 0.97 }}
                                    className="mt-1 flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-r from-indigo-glow to-cyan-glow py-2.5 text-[13.5px] font-semibold text-white disabled:opacity-60"
                                >
                                    {loading ? "Mengirim..." : tm.submitButton}
                                    <Send size={15} />
                                </motion.button>

                                <AnimatePresence>
                                    {submitted && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 8 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -8 }}
                                            className="flex items-center gap-2 rounded-[10px] border border-cyan-glow/30 bg-cyan-glow/10 px-3.5 py-2.5 text-[13px] text-cyan-glow"
                                        >
                                            <CheckCircle2 size={16} />
                                            {tm.successMessage}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default JoinModal;