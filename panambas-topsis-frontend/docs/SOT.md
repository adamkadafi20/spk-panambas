# SOT — Panambas Plant Intelligence
**Versi:** 0.1.0 · **Status:** Kontrak desain awal · **Scope:** Front-end prototype

## 1. Ringkasan Produk
Website Sistem Pendukung Keputusan (SPK) untuk membantu pelanggan memilih tanaman hias indoor sesuai kondisi ruangan. Sistem menggunakan metode TOPSIS sebagai pendekatan pemeringkatan; pada fase ini antarmuka menggunakan data dummy dan hasil simulasi.

## 2. Tujuan
1. Menyediakan katalog tanaman indoor yang mudah dijelajahi.
2. Mengumpulkan preferensi kondisi ruangan pelanggan.
3. Menampilkan hasil rekomendasi dan peringkat tanaman dengan penjelasan yang transparan.
4. Menyediakan area admin untuk mengelola kriteria, bobot, alternatif, dan matriks keputusan.

## 3. Pengguna dan Hak Akses
### Pelanggan
- Login/logout (simulasi UI).
- Melihat katalog tanaman hias indoor.
- Mengisi preferensi: cahaya, kelembapan, frekuensi penyiraman, suhu, dan pengalaman perawatan.
- Melihat ranking rekomendasi.

### Admin Panambas
- Login/logout (simulasi UI).
- Melihat dashboard statistik.
- CRUD kriteria dan bobot.
- CRUD alternatif/tanaman.
- Input/edit skor matriks keputusan.

## 4. Navigasi dan Layar
| ID | Layar | Tujuan | Aksi utama |
|---|---|---|---|
| UI-01 | Ringkasan | Dashboard pelanggan/admin | Buka katalog/rekomendasi |
| UI-02 | Katalog | Eksplorasi tanaman | Cari, filter, detail |
| UI-03 | Rekomendasi TOPSIS | Input kondisi ruangan dan hasil ranking | Ubah preferensi, hitung simulasi |
| UI-04 | Kriteria & Bobot | Kelola kriteria | Tambah, edit, hapus |
| UI-05 | Data Tanaman | Kelola alternatif | Tambah, edit, hapus, detail |
| UI-06 | Matriks Keputusan | Kelola skor alternatif per kriteria | Edit skor 1–5 |
| UI-07 | Login | Demo akses pengguna | Masuk/beralih mode |

## 5. Aturan UI/UX
- Brand: hijau daun/lime dan hitam hutan, dengan latar netral hangat.
- Gaya: modern SaaS, botanical, futuristik secukupnya, kontras jelas.
- Layout desktop menggunakan sidebar persisten; mobile memakai drawer.
- Setiap layar memiliki judul, konteks, dan aksi yang jelas.
- Tabel memiliki header yang terbaca, aksi CRUD, dan overflow horizontal pada layar kecil.
- Form memiliki label eksplisit, status pilihan aktif, dan validasi minimum.
- Status data simulasi harus terlihat agar tidak disalahartikan sebagai sistem produksi.
- Jangan mengklaim rekomendasi dummy sebagai hasil TOPSIS valid.

## 6. Data Dummy
### Alternatif
Monstera Deliciosa, Sansevieria, ZZ Plant, Peace Lily, Pothos Golden, Calathea Orbifolia.

### Kriteria awal
| Kode | Kriteria | Atribut | Bobot |
|---|---|---|---:|
| C1 | Intensitas Cahaya | Benefit | 0.30 |
| C2 | Kelembapan Ruangan | Benefit | 0.22 |
| C3 | Frekuensi Penyiraman | Cost | 0.20 |
| C4 | Suhu Ruangan | Benefit | 0.16 |
| C5 | Kemudahan Perawatan | Benefit | 0.12 |

Total bobot contoh = 1.00. Bobot dan atribut ini perlu divalidasi dengan pemilik toko/ahli tanaman sebelum dipakai untuk keputusan nyata.

### Skala matriks
Skor 1–5; definisi operasional untuk tiap nilai perlu disepakati sebelum implementasi perhitungan final.

## 7. Batasan Scope Fase Ini
**Termasuk:** layout, navigasi, state lokal, form interaktif, katalog dummy, CRUD in-memory, tabel matriks, modal login demo, responsive styling.

**Tidak termasuk:** backend, database, autentikasi nyata, otorisasi aman, API, persistensi, algoritma TOPSIS final, upload gambar, deployment, pembayaran, inventori transaksi.

## 8. Acceptance Criteria
- [ ] Proyek dapat dijalankan dengan `npm install` lalu `npm run dev`.
- [ ] Semua enam layar utama dapat dibuka melalui navigasi.
- [ ] Pelanggan dapat mencari/filter katalog dan membuka detail tanaman.
- [ ] Preferensi dapat diubah dan ranking simulasi diperbarui.
- [ ] Admin dapat menambah, mengedit, dan menghapus kriteria.
- [ ] Admin dapat menambah, mengedit, dan menghapus alternatif tanaman.
- [ ] Admin dapat mengubah skor matriks 1–5 dan menyimpan state lokal.
- [ ] UI dapat digunakan pada viewport desktop dan mobile.
- [ ] Label data dummy/simulasi terlihat dan tidak ada klaim autentikasi atau TOPSIS produksi.

## 9. Risiko dan Keputusan Terbuka
1. Bobot kriteria perlu persetujuan pemilik toko.
2. Definisi skala 1–5 dan pemetaan kondisi ruangan ke nilai kriteria perlu ditetapkan.
3. Formula TOPSIS harus dibuat sebagai modul teruji, termasuk penanganan bobot dan tipe benefit/cost.
4. Perlu diputuskan apakah pelanggan wajib login sebelum mengisi preferensi.
5. Perlu dipilih backend dan strategi persistensi pada fase selanjutnya.
6. URL gambar eksternal dapat berubah atau tidak tersedia.

## 10. Definition of Done
SOT dan kontrak awal tersedia, source code front-end dapat di-install/build, alur layar utama bisa diuji manual, batasan dummy didokumentasikan, dan tidak ada pekerjaan backend di fase ini.
