const unsplashFace = (id) =>
  `https://images.unsplash.com/photo-${id}?w=400&h=400&fit=crop&crop=faces&q=80`;

export const members = [
  { id: 1, name: "Arjuna Faisal Ramadhani", roleKey: "Staff Psda", divisionKey: "Deminfo", photo: "/gallery/arjun.jpeg", instagram: "https://www.instagram.com/_jdnn55555?igsh=MWs3eHhtdjBnZjcwdw==", },
  { id: 2, name: "Kartika Dhista Naya", roleKey: "Seketaris", divisionKey: "Seketaris", photo: "/gallery/dhista.jpeg", instagram: "https://www.instagram.com/dhist4a.n?igsh=dnZvbGUzaGo3NWZ3", },
  { id: 3, name: "Untung Cahyadi", roleKey: "Staff Hubeks", divisionKey: "Hubeks", photo: "/gallery/05-07-07.jpeg", instagram: "https://www.instagram.com/cahya_050707?igsh=MWJvY2RveTI2Y2Q5bQ==", },
  { id: 4, name: "Alinda Restu Desiyana", roleKey: "Staff Psda", divisionKey: "Psda", photo: "/gallery/alin.jpeg", instagram: "https://www.instagram.com/yeyeluve?igsh=MW1rOHY3bmIzbDFyMw==", },
  { id: 5, name: "Arsyidan Sahal Syarbini", roleKey: "Staff Psda", divisionKey: "Psda", photo: "/gallery/sahal.jpeg", instagram: "https://www.instagram.com/sahal.wira", },
  { id: 6, name: "David Adriyanto", roleKey: "Staff Hubeks", divisionKey: "Hubeks", photo: "/gallery/david.jpeg", instagram: "https://www.instagram.com/adriyanto.21?igsh=Z2l5enRqczBhcDYy", },
  { id: 7, name: "Diasza Lania Riskia Tsani", roleKey: "Staff Hubeks", divisionKey: "Hubeks", photo: "/gallery/diaz.jpeg", instagram: "https://www.instagram.com/_diaszaaa?igsh=dm83d3M4a2gxMjBz", },
  { id: 8, name: "Farkhan Maulana", roleKey: "Staff Deminfo", divisionKey: "Deminfo", photo: "/gallery/farkhan.jpeg", instagram: "https://www.instagram.com/_frkhanmlnaa?igsh=cDlhZW5yZW0xOHR4&igsi=cDlhZW5yZW0xOHR4", linkedin: "https://linkedin.com/in/amanda-kirana" },
  { id: 9, name: "Iqbal Habibie Arsyidan Abidin", roleKey: "Staff Deminfo", divisionKey: "Deminfo", photo: "/gallery/iqbal.jpeg", instagram: "https://www.instagram.com/iqb.alhbb?igsh=N3V0bHp2NnlvYXVw", linkedin: "https://linkedin.com/in/reza-firmansyah" },
  { id: 10, name: "M Roisul Umam", roleKey: "Seketaris", divisionKey: "Seketaris", photo: "/gallery/umam.jpeg", instagram: "https://www.instagram.com/roisul481?igsh=MTFpMm1sdDV6bXltag==", linkedin: "https://linkedin.com/in/intan-permata" },
  { id: 11, name: "M Ferdinan Sidiq", roleKey: "Staff Deminfo", divisionKey: "Deminfo", photo: "/gallery/ferdi.jpeg", instagram: "https://instagram.com/yusuf.hakim", linkedin: "https://linkedin.com/in/yusuf-hakim" },
  { id: 12, name: "M Chusen Kamal", roleKey: "Staff Psda", divisionKey: "Psda", photo: "/gallery/husen.jpeg", instagram: "https://www.instagram.com/musenmal.5?igsh=ZDBjeXdhYzMyZnMz", linkedin: "https://linkedin.com/in/putri-wulandari" },
  { id: 13, name: "M Rizqu Adnin Zidana", roleKey: "Bendahara", divisionKey: "Bendahara", photo: "/gallery/adnin.jpeg", instagram: "https://instagram.com/aditya.rahman", linkedin: "https://linkedin.com/in/aditya-rahman" },
  { id: 14, name: "M Mariffatur Rizky", roleKey: "Staff Psda", divisionKey: "Psda", photo: "/gallery/rizky.jpeg", instagram: "https://instagram.com/della.anjani", linkedin: "https://linkedin.com/in/della-anjani" },
  { id: 15, name: "Septian Ardi Nugroho", roleKey: "Bendahara", divisionKey: "Bendahara", photo: "/gallery/groho.jpeg", instagram: "https://www.instagram.com/ardzzzz25?igsh=MWw2ZnI5bG40OWlldg==", linkedin: "https://linkedin.com/in/farhan-maulana" },
  { id: 16, name: "Sahrul Atiq Wibiyono", roleKey: "Bendahara", divisionKey: "Bendahara", photo: "/gallery/sahru.jpeg", instagram: "https://www.instagram.com/_shrllatq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://linkedin.com/in/putri-rahmawati" },
  { id: 17, name: "Naufal Fajar Adityo", roleKey: "Staff Psda", divisionKey: "Psda", photo: "/gallery/naufal.jpeg", instagram: "https://instagram.com/putri.rahmawati", linkedin: "https://linkedin.com/in/putri-rahmawati" },
  { id: 18, name: "Riza Farkhan Nulhakim", roleKey: "Staff Advas", divisionKey: "Advas", photo: "/gallery/riza.jpeg", instagram: "https://instagram.com/putri.rahmawati", linkedin: "https://linkedin.com/in/putri-rahmawati" },
  { id: 19, name: "Fadia Meiyana Insya", roleKey: "Ketus Himpunan", divisionKey: "Kahim", photo: "/gallery/eca.jpeg", instagram: "https://www.instagram.com/swetly_sya?igsh=Z3Z6MnN5NDIwNQ%3D%3D&utm_source=qr", linkedin: "https://linkedin.com/in/putri-rahmawati" },
  { id: 20, name: "Ridho Harapa Wijaya", roleKey: "Staff Advas", divisionKey: "Advas", photo: "/gallery/rido.jpeg", instagram: "https://www.instagram.com/oom_idoo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://linkedin.com/in/putri-rahmawati" },
  { id: 21, name: "Natan Alfa Musyafiq", roleKey: "Staff Advas", divisionKey: "Advas", photo: "/gallery/natan.jpeg", instagram: "https://www.instagram.com/alfamusyafiq?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", linkedin: "https://linkedin.com/in/putri-rahmawati" },
];


export const divisionKeyOrder = ["all", "Seketaris", "Hubeks", "Deminfo", "Bendahara", "Advas", "Psda", "Kahim",];
