const express = require("express");
const app = express();

// GET semua mahasiswa
app.get("/mahasiswa", (req, res) => {
    const data = [
        { id: 1, nama: "DENI", jurusan: "KEPERAWATAN" },
        { id: 2, nama: "FARID", jurusan: "KEBIDANAN" }
    ];
    res.json(data);
});

// about
app.get("/about", (req, res) => {
    res.send("Ini adalah halaman about");
});

// detail mahasiswa
app.get("/detail/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Detail mahasiswa dengan ID: ${id}`);
});

// halaman mahasiswa
app.get("/mahasiswa/:id", (req, res) => {
    const id = req.params.id;
    res.send(`Halaman mahasiswa dengan ID: ${id}`);
});

// POST tambah mahasiswa
app.use(express.json());
app.post("/mahasiswa", (req, res) => {
    const { nama, jurusan } = req.body;
    res.status(201).json({ pesan: "Ditambahkan!", nama, jurusan });
});

app.listen(3000, () => console.log("Express di port 3000"));