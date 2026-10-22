# Panambas — Sistem Rekomendasi Tanaman Indoor (Front-end)

Prototype UI front-end untuk **Sistem Pendukung Keputusan Pemilihan Jenis Tanaman Hias Indoor menggunakan TOPSIS** pada toko Panambas.

## Teknologi
- React 18 + Vite
- Tailwind CSS 3
- Lucide React
- Data dummy, tanpa backend/database

## Menjalankan proyek
Persyaratan: Node.js 18+ dan npm.

```bash
npm install
npm run dev
```

Untuk memeriksa build produksi:

```bash
npm run build
npm run preview
```

## Layar yang tersedia
- Ringkasan / dashboard
- Katalog tanaman dan filter kategori
- Form preferensi ruangan dan ranking rekomendasi (simulasi)
- Manajemen kriteria dan bobot (tambah, edit, hapus)
- Manajemen alternatif/tanaman (tambah, edit, hapus)
- Matriks keputusan (edit skor skala 1–5)
- Dialog login demo dan pengalihan mode pelanggan/admin

## Deploy ke Vercel
Lihat `docs/DEPLOY_VERCEL.md` untuk panduan deploy melalui GitHub atau Vercel CLI. Konfigurasi build dan folder output tersedia di `vercel.json`.

## Catatan penting
- Login/logout hanya simulasi UI, belum memakai autentikasi aman.
- Perubahan data disimpan di state React dan akan hilang saat halaman dimuat ulang.
- Nilai ranking saat ini merupakan dummy heuristik, **belum implementasi perhitungan TOPSIS yang tervalidasi**.
- Gambar menggunakan URL Unsplash dan memerlukan koneksi internet. Jika gagal dimuat, kartu tetap memiliki latar fallback.
- Tidak ada backend, database, API, maupun integrasi transaksi dalam scope ini.
