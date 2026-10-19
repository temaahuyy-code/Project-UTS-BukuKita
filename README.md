# BukuKita — Katalog Buku Digital

BukuKita adalah aplikasi katalog buku sederhana berbasis React. Pengguna dapat melihat koleksi buku, membuka detail buku, mencari dan memfilter koleksi, menyimpan buku favorit, serta menambahkan buku melalui formulir.

## Fitur

- **Beranda:** halaman awal aplikasi.
- **Katalog:** menampilkan koleksi buku yang tersedia.
- **Pencarian:** mencari buku berdasarkan judul atau nama penulis.
- **Filter kategori:** menyaring buku berdasarkan kategori.
- **Detail buku:** melihat informasi buku yang dipilih.
- **Favorit:** menandai dan melihat buku favorit.
- **Tambah buku:** menambahkan buku melalui formulir dengan validasi.
- **Penyimpanan lokal:** data buku tambahan dan favorit disimpan menggunakan `localStorage` pada browser.
- **Navigasi:** berpindah antarhalaman melalui menu navigasi.

## Teknologi

- React
- JavaScript (JSX)
- CSS
- Vite
- Browser `localStorage`

## Persyaratan

Pastikan Node.js dan npm sudah terpasang di komputer.

## Cara menjalankan proyek

1. Ekstrak file proyek.
2. Buka folder proyek di Visual Studio Code atau terminal.
3. Jalankan perintah berikut untuk memasang dependensi:

   ```bash
   npm install
   ```

4. Jalankan server pengembangan:

   ```bash
   npm run dev
   ```

5. Buka alamat lokal yang ditampilkan oleh terminal di browser.

## Membuat build produksi

Untuk memeriksa dan membuat build produksi, jalankan:

```bash
npm run build
```

Hasil build akan dibuat oleh Vite di folder `dist/`.

## Struktur utama proyek

```text
├── index.html
├── package.json
├── package-lock.json
└── src/
    ├── App.jsx
    ├── App.css
    └── main.jsx
```

- `src/App.jsx`: komponen utama, data contoh buku, navigasi, serta interaksi aplikasi.
- `src/App.css`: pengaturan tampilan aplikasi.
- `src/main.jsx`: titik masuk React.
- `index.html`: dokumen HTML utama.
- `package.json`: dependensi dan perintah proyek.

## Catatan

Data favorit dan buku tambahan disimpan di `localStorage` browser yang digunakan. Data tersebut tidak otomatis tersinkron ke browser atau perangkat lain. Koleksi awal buku menggunakan data contoh yang sudah tersedia di aplikasi.
