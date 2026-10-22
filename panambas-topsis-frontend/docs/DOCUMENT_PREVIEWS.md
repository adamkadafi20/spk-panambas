# Preview Isi Dokumen

Dokumen ini adalah indeks ringkas untuk memeriksa isi paket tanpa membuka setiap file satu per satu.

## README.md
Menjelaskan tujuan prototype, teknologi React/Vite/Tailwind, cara install/run/build, layar yang tersedia, dan batasan data dummy.

## docs/SOT.md
Dokumen sumber kebenaran produk: ringkasan, tujuan, role pengguna, fitur, daftar layar UI-01 sampai UI-07, aturan UI/UX, data dummy, batasan scope, acceptance criteria, risiko, dan Definition of Done.

## AGENTS.md
Kontrak kerja agen coding: misi, scope guardrails, persyaratan produk, konvensi engineering, batas kebenaran TOPSIS, perintah proyek, dan Definition of Done.

## docs/PROMPT_EXECUTION.md
Prompt siap pakai untuk menjalankan audit dan eksekusi awal oleh agen coding. Mencakup urutan membaca dokumen, target validasi, kontrak visual, batas TOPSIS, serta format laporan.

## docs/DEPLOY_VERCEL.md
Panduan deployment front-end ke Vercel melalui GitHub atau CLI, pengaturan build/output, dan batasan prototype saat online.

## vercel.json
Menetapkan install command, build command, dan folder output `dist` untuk deployment.

## Dokumen konfigurasi
- `package.json`: scripts dan dependencies.
- `vite.config.js`: konfigurasi Vite + React.
- `tailwind.config.js`: sumber Tailwind dan token warna.
- `postcss.config.js`: plugin Tailwind dan Autoprefixer.
- `index.html`: entry HTML dan metadata aplikasi.

## Source front-end
- `src/main.jsx`: entry React.
- `src/App.jsx`: shell aplikasi, navigasi, dashboard, katalog, form rekomendasi, CRUD, matriks, modal login/detail.
- `src/styles.css`: Tailwind directives dan visual primitives/responsif.
