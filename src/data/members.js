const unsplashFace = (id) =>
  `https://images.unsplash.com/photo-${id}?w=400&h=400&fit=crop&crop=faces&q=80`;

export const members = [
  { id: 1, name: "Arjuna Faisal Ramadhani", roleKey: "Staff Psda", divisionKey: "bph", photo: "/gallery/arjun.jpeg", instagram: "https://www.instagram.com/_jdnn55555?igsh=MWs3eHhtdjBnZjcwdw==", linkedin: "https://linkedin.com/in/raka-aditya" },
  { id: 2, name: "Kartika Dhista Naya", roleKey: "Seketaris", divisionKey: "bph", photo: "/gallery/dhista.jpeg", instagram: "https://www.instagram.com/dhist4a.n?igsh=dnZvbGUzaGo3NWZ3", linkedin: "https://linkedin.com/in/salsabila-putri" },
  { id: 3, name: "Untung Cahyadi", roleKey: "Staff Hubeks", divisionKey: "bph", photo: "/gallery/05-07-07.jpeg", instagram: "https://www.instagram.com/cahya_050707?igsh=MWJvY2RveTI2Y2Q5bQ==", linkedin: "https://linkedin.com/in/fajar-nugroho" },
  { id: 4, name: "Alinda Restu Desiyana", roleKey: "bendaharaUmum", divisionKey: "bph", photo: "/gallery/alin.jpeg", instagram: "https://www.instagram.com/yeyeluve?igsh=MW1rOHY3bmIzbDFyMw==", linkedin: "https://linkedin.com/in/nadia-azzahra" },
  { id: 5, name: "Arsyidan Sahal Syarbini", roleKey: "ketuaDivisi", divisionKey: "pendidikan", photo: "/gallery/sahal.jpeg", instagram: "https://www.instagram.com/sahal.wira", linkedin: "https://linkedin.com/in/bagas-wira" },
  { id: 6, name: "David Adriyanto", roleKey: "staff", divisionKey: "pendidikan", photo: "/gallery/david.jpeg", instagram: "https://www.instagram.com/adriyanto.21?igsh=Z2l5enRqczBhcDYy:", linkedin: "https://linkedin.com/in/clarissa-amelia" },
  { id: 7, name: "Diasza Lania Tsani", roleKey: "staff", divisionKey: "pendidikan", photo: "/gallery/diaz.jpeg", instagram: "https://www.instagram.com/_diaszaaa?igsh=dm83d3M4a2gxMjBz", linkedin: "https://linkedin.com/in/dimas-prasetyo" },
  { id: 8, name: "Farkhan Maulana", roleKey: "ketuaDivisi", divisionKey: "riset", photo:"/gallery/farkhan.jpeg", instagram: "https://instagram.com/amanda.kirana", linkedin: "https://linkedin.com/in/amanda-kirana" },
  { id: 9, name: "M Roisul Umam", roleKey: "staff", divisionKey: "riset", photo: "/gallery/iqbal.jpeg", instagram: "https://instagram.com/reza.firmansyah", linkedin: "https://linkedin.com/in/reza-firmansyah" },
  { id: 10, name: "Iqbal Habibie", roleKey: "staff", divisionKey: "riset", photo: "/gallery/umam.jpeg", instagram: "https://instagram.com/intan.permata", linkedin: "https://linkedin.com/in/intan-permata" },
  { id: 11, name: "Yusuf Abdul Hakim", roleKey: "staff", divisionKey: "riset", photo: unsplashFace("1517841905240-472988babdf9"), instagram: "https://instagram.com/yusuf.hakim", linkedin: "https://linkedin.com/in/yusuf-hakim" },
  { id: 12, name: "Putri Wulandari", roleKey: "ketuaDivisi", divisionKey: "humas", photo: unsplashFace("1524504388940-b1c1722653e1"), instagram: "https://instagram.com/putri.wulan", linkedin: "https://linkedin.com/in/putri-wulandari" },
  { id: 13, name: "Aditya Rahman Hakim", roleKey: "staff", divisionKey: "humas", photo: unsplashFace("1508214751196-bcfd4ca60f91"), instagram: "https://instagram.com/aditya.rahman", linkedin: "https://linkedin.com/in/aditya-rahman" },
  { id: 14, name: "Della Anjani", roleKey: "staff", divisionKey: "humas", photo: unsplashFace("1502685104226-ee32379fefbe"), instagram: "https://instagram.com/della.anjani", linkedin: "https://linkedin.com/in/della-anjani" },
  { id: 15, name: "Farhan Maulana Yusuf", roleKey: "ketuaDivisi", divisionKey: "minatBakat", photo: unsplashFace("1531891437562-4301cf35b7e5"), instagram: "https://instagram.com/farhan.maulana", linkedin: "https://linkedin.com/in/farhan-maulana" },
  { id: 16, name: "Zahra Nur Fadhilah", roleKey: "staff", divisionKey: "minatBakat", photo: unsplashFace("1487412720507-e7ab37603c6f"), instagram: "https://instagram.com/zahra.nur", linkedin: "https://linkedin.com/in/zahra-nur" },
  { id: 17, name: "Galang Ramadhan", roleKey: "staff", divisionKey: "minatBakat", photo: unsplashFace("1552058544-f2b08422138a"), instagram: "https://instagram.com/galang.ramadhan", linkedin: "https://linkedin.com/in/galang-ramadhan" },
  { id: 18, name: "Hana Safitri", roleKey: "ketuaDivisi", divisionKey: "kewirausahaan", photo: unsplashFace("1547425260-76bcadfb4f2c"), instagram: "https://instagram.com/hana.safitri", linkedin: "https://linkedin.com/in/hana-safitri" },
  { id: 19, name: "Iqbal Maulana Ibrahim", roleKey: "staff", divisionKey: "kewirausahaan", photo: unsplashFace("1546456073-92b9f0a8d413"), instagram: "https://instagram.com/iqbal.maulana", linkedin: "https://linkedin.com/in/iqbal-maulana" },
  { id: 20, name: "Jasmine Aulia Rahma", roleKey: "staff", divisionKey: "kewirausahaan", photo: unsplashFace("1517849845537-4d257902861a"), instagram: "https://instagram.com/jasmine.aulia", linkedin: "https://linkedin.com/in/jasmine-aulia" },
  { id: 21, name: "Kevin Alexander Tanuwijaya", roleKey: "ketuaDivisi", divisionKey: "media", photo: unsplashFace("1522075469751-3a6694fb2f61"), instagram: "https://instagram.com/kevin.alexander", linkedin: "https://linkedin.com/in/kevin-alexander" },
  { id: 22, name: "Larasati Kusumawardani", roleKey: "staff", divisionKey: "media", photo: unsplashFace("1524250502761-1ac6f2e30d43"), instagram: "https://instagram.com/larasati.kusuma", linkedin: "https://linkedin.com/in/larasati-kusuma" },
  { id: 23, name: "Muhammad Rizky Ananda", roleKey: "staff", divisionKey: "media", photo: unsplashFace("1544723795-3fb6469f5b39"), instagram: "https://instagram.com/rizky.ananda", linkedin: "https://linkedin.com/in/rizky-ananda" },
  { id: 24, name: "Naila Ramadhani Putri", roleKey: "ketuaDivisi", divisionKey: "pengabdian", photo: unsplashFace("1541823709867-1b206113eafd"), instagram: "https://instagram.com/naila.ramadhani", linkedin: "https://linkedin.com/in/naila-ramadhani" },
  { id: 25, name: "Oscar Pratama Putra", roleKey: "staff", divisionKey: "pengabdian", photo: unsplashFace("1552374196-c4e7ffc6e126"), instagram: "https://instagram.com/oscar.pratama", linkedin: "https://linkedin.com/in/oscar-pratama" },
];

export const divisionKeyOrder = ["all", "bph", "pendidikan", "riset", "humas", "minatBakat", "kewirausahaan", "media", "pengabdian"];