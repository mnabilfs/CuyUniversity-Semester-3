# 📦 Simple Express API – CUY University

Proyek backend sederhana menggunakan **Node.js**, **Express**, dan **MySQL**. API ini memiliki endpoint untuk mengecek status, mencari mahasiswa berdasarkan NIM, serta endpoint login dan update (dummy). Sangat cocok untuk belajar dasar API dan koneksi database.

---

## 🚀 Fitur

- `GET /` – Cek status API
- `GET /find?nim=xxxxx` – Cari nama mahasiswa berdasarkan NIM
- `POST /login` – Endpoint login (dummy)
- `PUT /username` – Update data username (dummy)

---

## 📁 Struktur Folder

.
├── index.js # File utama server Express
├── connection.js # Konfigurasi koneksi MySQL
├── response.js # Helper respons API
└── README.md # Dokumentasi proyek ini

---

## ⚙️ Persyaratan

- Node.js (v14 atau lebih tinggi)
- MySQL Server aktif (bisa pakai XAMPP)
- Postman atau curl untuk uji endpoint

---

## 🛠️ Cara Menjalankan

### 1. Clone repository ini

```bash
git clone https://github.com/namakamu/express-api-cuyuniversity.git
cd express-api-cuyuniversity

---
npm install
nyalakan apache dan mysql di xampp
buka sqlmyadmin >> cuyuniversity > mahasiswa
npm run api-service
buka http://localhost:3000/
```
