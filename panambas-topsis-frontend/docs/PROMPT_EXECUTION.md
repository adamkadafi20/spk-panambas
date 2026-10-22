# Prompt Execution — Initial Project Run

Gunakan prompt ini untuk memulai sesi implementasi pada agen coding (mis. Codex/Claude Code/Cursor).

---

## Prompt utama

Anda bertindak sebagai senior front-end engineer dan UI/UX engineer untuk proyek **Panambas Plant Intelligence**.

Sebelum mengubah kode:
1. Baca `AGENTS.md`, `docs/SOT.md`, dan `README.md` sampai selesai.
2. Periksa struktur repository dan jalankan build saat ini.
3. Buat ringkasan singkat tentang scope, layar yang sudah tersedia, gap terhadap acceptance criteria, dan risiko.
4. Jangan melakukan perubahan di luar SOT. Jangan membuat backend, database, API, autentikasi sungguhan, atau fitur transaksi.

### Target eksekusi awal
- Pastikan aplikasi berjalan dengan React + Vite + Tailwind CSS.
- Validasi navigasi dan semua layar: Ringkasan, Katalog, Rekomendasi TOPSIS, Kriteria & Bobot, Data Tanaman, Matriks Keputusan, Login demo.
- Periksa CRUD kriteria dan tanaman, perubahan skor matriks, pencarian/filter katalog, modal detail, serta responsivitas mobile.
- Perbaiki bug yang teramati tanpa mengubah scope dan visual identity.
- Jalankan `npm run build`; laporkan hasil aktual, jangan mengklaim lulus jika belum dijalankan.
- Perbarui dokumentasi hanya jika perilaku atau keputusan proyek berubah.

### Kontrak visual
- Palet: forest green, leaf/lime green, near-black, neutral warm gray.
- Gaya: modern SaaS, rapi, premium, botanical, bukan dashboard template generik.
- Pertahankan hierarki tipografi, whitespace, state hover/focus, empty state, dan layout responsif.
- Semua teks UI menggunakan Bahasa Indonesia.

### Batas TOPSIS
Ranking saat ini adalah dummy. Jangan menyebutnya perhitungan TOPSIS sungguhan. Jika diminta mengimplementasikan TOPSIS, lakukan sebagai task terpisah setelah aturan bobot, tipe kriteria, dan skala disetujui; tambahkan unit test untuk formula.

### Format laporan akhir
1. Ringkasan perubahan.
2. File yang diubah.
3. Perintah verifikasi dan output aktual.
4. Acceptance criteria yang terpenuhi/belum.
5. Risiko atau keputusan yang masih memerlukan pemilik proyek.
6. Konfirmasi eksplisit bahwa tidak ada backend atau scope di luar SOT yang ditambahkan.

Mulai dari audit dan validasi; jangan langsung melakukan refactor besar tanpa kebutuhan yang jelas.
