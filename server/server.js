const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nexus_hmpi",
});

db.connect((err) => {
  if (err) {
    console.error("Gagal konek ke database:", err.message);
    return;
  }
  console.log("Terhubung ke MySQL");
});

app.post("/api/join", (req, res) => {
  const { name, nim, division, email, phone } = req.body;

  if (!name || !nim || !division || !email || !phone) {
    return res.status(400).json({ message: "Semua field wajib diisi" });
  }

  const query =
    "INSERT INTO join_requests (name, nim, division, email, phone) VALUES (?, ?, ?, ?, ?)";

  db.query(query, [name, nim, division, email, phone], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Gagal menyimpan data" });
    }
    res.status(201).json({ message: "Pendaftaran berhasil", id: result.insertId });
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server jalan di http://localhost:${PORT}`));
