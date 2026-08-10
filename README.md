# HMPI Landing Page

Landing page resmi untuk **HMPI (Himpunan Mahasiswa Prodi Informatika)** —
dibangun dengan React (Vite), Tailwind CSS, dan Framer Motion. Tema visual
mengusung palet **Biru - Hitam - Putih** yang modern dan menyatu, lengkap
dengan animasi 3D (logo intro, flip card, tilt card, tombol dengan efek
kedalaman) serta micro-interaction 2D yang halus di setiap section.

## Tech Stack

- **React 18** (Vite) — bahasa JavaScript (JSX)
- **Tailwind CSS** — styling & layout system, palet Biru/Hitam/Putih
- **Framer Motion** — animasi entrance, hover, tab transition, flip 3D, dan micro-interaction
- **lucide-react** — icon set

## Fitur Animasi 3D

- **Logo Intro 3D** (`LogoIntro.jsx`) — logo asli HMPI (dari file yang
  diunggah) tampil berputar 3D (`rotateY`/`rotateX`) disertai animasi
  pemuatan (progress bar + persentase 0-100%) saat halaman pertama kali
  dibuka, sebelum masuk ke Beranda.
- **Flip Card 3D** pada 3 profil pengurus utama di section Anggota — klik
  atau arahkan kursor untuk membalik kartu (`rotateY`) dan melihat detail
  divisi + tautan sosial di sisi belakang.
- **Tilt Card 3D** pada kartu Program Kerja, kartu Tentang Kami, grid
  Dokumentasi, dan grid Anggota lengkap — kartu merespons posisi kursor
  dengan `rotateX`/`rotateY` halus. **Section Kontak sengaja dibiarkan
  tanpa efek 3D** agar form tetap terasa stabil dan mudah diisi.
- **Tombol & tab dengan efek kedalaman** — tombol CTA dan tab kategori
  Program Kerja memiliki animasi `rotateX` saat hover/tap untuk kesan
  "menekan" tombol secara 3D.
- **Logo navbar & footer 3D** — logo asli berputar (`rotateY`) saat
  disentuh kursor.

## Fitur Kursor & Latar Belakang

- **Kursor kustom** (`CustomCursor.jsx`) — titik kursor dengan smoothing
  spring, membesar saat berada di atas tombol/tautan/kartu (hanya aktif
  di perangkat desktop, otomatis nonaktif di perangkat sentuh).
- **Ambient background animation** (`AmbientBackground.jsx`) — gradient
  blob yang melayang perlahan dan bereaksi halus terhadap posisi kursor
  (parallax), muncul di setiap section utama.
- **Parallax pada Hero** — grafis kode & partikel di Beranda bergeser
  mengikuti posisi kursor.

## Efek Gambar

- **Panning & Zooming (Ken Burns effect)** pada foto Dokumentasi — gambar
  bergerak dan membesar perlahan secara berkelanjutan.
- **Tilting 3D** berbasis posisi kursor pada kartu Dokumentasi dan
  Anggota.
- **Parallax scroll** pada gambar Dokumentasi — bergerak dengan
  kecepatan berbeda dari container saat halaman di-scroll.
- **Masking halus** (`mask-fade-edges`) pada tepi gambar Dokumentasi agar
  transisi ke latar belakang terasa lembut.

## Transisi Antar Section

- Setiap section muncul dengan animasi **fade + slide** saat discroll ke
  area pandang (`whileInView`).
- **`SectionDivider.jsx`** — gradient tipis di antara section yang
  melebur warna latar dari satu section ke section berikutnya, sehingga
  perpindahan antar bagian terasa mulus tanpa potongan tegas.

## Struktur Folder

```
hmpi-landing/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   └── hmpi-logo.jpg    # logo resmi HMPI (dari file yang diunggah)
    ├── hooks/
    │   └── useMouseParallax.js
    ├── data/
    │   ├── members.js       # 25 data dummy anggota HMPI (tetap lengkap)
    │   ├── programs.js      # data program kerja
    │   └── gallery.js       # data dokumentasi kegiatan
    └── components/
        ├── LogoIntro.jsx        # animasi logo 3D + loading di awal halaman
        ├── CustomCursor.jsx     # kursor kustom interaktif
        ├── AmbientBackground.jsx# latar belakang animatif dengan parallax
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Programs.jsx
        ├── Gallery.jsx
        ├── Members.jsx      # 3 flip-card utama + toggle direktori 25 anggota
        ├── Contact.jsx       # sengaja tanpa efek 3D
        ├── Footer.jsx
        └── ui/
            ├── SectionHeading.jsx
            ├── SectionDivider.jsx
            └── AnimatedCounter.jsx
```

## Cara Menjalankan

1. Pastikan Node.js versi 18 atau lebih baru sudah terpasang.
2. Install dependencies:

   ```bash
   npm install
   ```

3. Jalankan mode development:

   ```bash
   npm run dev
   ```

   Aplikasi akan berjalan di `http://localhost:5173`.

4. Build untuk produksi:

   ```bash
   npm run build
   ```

   Hasil build tersedia di folder `dist/`.

5. Preview hasil build:

   ```bash
   npm run preview
   ```

## Catatan

- Seluruh foto anggota dan dokumentasi menggunakan placeholder dari
  **Unsplash**. Ganti URL pada `src/data/members.js` dan
  `src/data/gallery.js` dengan foto asli saat data resmi tersedia.
- Data 25 anggota tetap lengkap tersimpan di `src/data/members.js`. Secara
  default hanya 3 profil utama yang ditampilkan (flip card), namun pengguna
  bisa menekan tombol "Tampilkan Semua 25 Anggota" untuk membuka direktori
  lengkap beserta filter divisi. Ubah array `featuredIds` di
  `src/components/Members.jsx` untuk mengganti 3 profil yang ditonjolkan.
- Form kontak pada section **Kontak** saat ini berupa simulasi front-end
  (menampilkan notifikasi sukses). Hubungkan ke backend/API atau layanan
  seperti Formspree/EmailJS untuk pengiriman email sungguhan.
- Semua warna, tipografi, dan animasi dikonfigurasi di
  `tailwind.config.js` dan `src/index.css` agar mudah disesuaikan.
