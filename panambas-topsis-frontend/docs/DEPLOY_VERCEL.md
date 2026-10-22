# Panduan Deploy ke Vercel

Prototype Panambas saat ini adalah aplikasi front-end React + Vite dengan data dummy. Aplikasi dapat dipublikasikan sebagai situs statis; backend dan environment variable belum diperlukan.

## Opsi A — Deploy lewat GitHub (disarankan)

1. Ekstrak `panambas-topsis-frontend.zip` ke folder lokal.
2. Buka terminal dari folder `panambas-topsis-frontend`.
3. Uji proyek lokal:
   ```bash
   npm install
   npm run build
   npm run dev
   ```
4. Buat repository baru di GitHub, lalu push seluruh isi folder proyek ke branch `main`. Pastikan `package.json`, `index.html`, `src/`, dan `vercel.json` berada langsung di root repository, bukan di dalam folder bertingkat tambahan.
5. Masuk ke https://vercel.com/new dan impor repository tersebut.
6. Periksa konfigurasi proyek. Vercel menggunakan konfigurasi di `vercel.json`:
   - Install command: `npm install`
   - Build command: `npm run build`
   - Output directory: `dist`
7. Klik **Deploy**. Setelah build berhasil, Vercel akan memberikan URL publik untuk preview.

Setelah repository terhubung, push perubahan baru ke branch yang dikonfigurasi akan memicu deployment otomatis.

## Opsi B — Deploy dengan Vercel CLI

Pastikan Node.js dan npm tersedia, kemudian jalankan dari root proyek:

```bash
npm install
npm run build
npx vercel
```

Ikuti pertanyaan CLI untuk login dan menghubungkan proyek. Untuk deployment produksi setelah preview diverifikasi:

```bash
npx vercel --prod
```

## Pengaturan yang digunakan

File `vercel.json` menetapkan build command dan folder output statis `dist`. Proyek ini menggunakan navigasi berbasis state React, bukan URL route, sehingga belum memerlukan rewrite SPA khusus.

## Batasan prototype online

- Login/logout adalah simulasi; jangan gunakan kata sandi asli atau data sensitif.
- Data CRUD dan matriks tersimpan di state browser selama halaman aktif saja. Data kembali ke dummy awal ketika halaman dimuat ulang.
- Nilai ranking merupakan simulasi, bukan hasil perhitungan TOPSIS yang tervalidasi.
- Foto memakai URL eksternal Unsplash sehingga membutuhkan koneksi internet dan dapat berubah.
- Tidak ada backend, database, API, atau autentikasi server.

## Jika deployment gagal

- Pastikan root directory di Vercel menunjuk ke folder yang berisi `package.json`.
- Pastikan build lokal sukses menggunakan `npm run build`.
- Periksa build log di tab Deployment Vercel; perbaiki error yang benar-benar ditunjukkan log, lalu deploy ulang.
