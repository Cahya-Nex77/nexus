/**
 * Divider tipis berisi gradient untuk melebur warna latar antar section,
 * sehingga transisi antar bagian terasa halus (tidak terpotong tegas).
 */
const SectionDivider = ({ from = "#05070C", to = "#0A0C13" }) => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none relative z-10 h-16 w-full sm:h-24"
      style={{
        background: `linear-gradient(to bottom, ${from}, ${to})`,
        marginTop: "-1px",
        marginBottom: "-1px",
      }}
    />
  );
};

export default SectionDivider;
