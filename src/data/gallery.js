const unsplashPhoto = (id) =>
  `https://images.unsplash.com/photo-${id}?w=800&h=600&fit=crop&q=80`;

export const gallery = [
  {
    id: 1,
    title: "Coding Bootcamp Batch 3",
    caption: "Peserta antusias belajar dasar pemrograman web bersama mentor.",
    image: unsplashPhoto("1517048676732-d65bc937f952"),
    span: "row-span-2",
  },
  {
    id: 2,
    title: "HMPI Hackathon 2025",
    caption: "Tim mahasiswa berkompetisi membangun solusi digital dalam 24 jam.",
    image: unsplashPhoto("1504384308090-c894fdcc538d"),
    span: "",
  },
  {
    id: 3,
    title: "Seminar IPTEK Nasional",
    caption: "Diskusi bersama praktisi industri teknologi terkemuka.",
    image: unsplashPhoto("1475721027785-f74eccf877e2"),
    span: "",
  },
  {
    id: 4,
    title: "Rapat Kerja Pengurus",
    caption: "Penyusunan program kerja tahunan bersama seluruh divisi.",
    image: unsplashPhoto("1519389950473-47ba0277781c"),
    span: "",
  },
  {
    id: 5,
    title: "Desa Digital Volunteer",
    caption: "Pendampingan UMKM desa dalam pemanfaatan teknologi digital.",
    image: unsplashPhoto("1531482615713-2afd69097998"),
    span: "row-span-2",
  },
  {
    id: 6,
    title: "Workshop UI/UX Design",
    caption: "Latihan merancang produk digital dari riset hingga prototipe.",
    image: unsplashPhoto("1522071820081-009f0129c71c"),
    span: "",
  },
  {
    id: 7,
    title: "Malam Keakraban Anggota",
    caption: "Membangun kekeluargaan antar anggota dari berbagai angkatan.",
    image: unsplashPhoto("1529156069898-49953e39b3ac"),
    span: "",
  },
];
