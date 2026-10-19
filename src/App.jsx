import { useEffect, useState } from "react";

const bukuContoh = [
  {
    id: 1,
    judul: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    kategori: "Novel",
    tahun: 2005,
    warna: "#dce9c8",
    simbol: "📗",
    deskripsi:
      "Kisah sekelompok anak di Belitung yang tetap semangat mengejar pendidikan meskipun hidup dengan keterbatasan."
  },
  {
    id: 2,
    judul: "Bumi",
    penulis: "Tere Liye",
    kategori: "Fantasi",
    tahun: 2014,
    warna: "#d9e6f7",
    simbol: "🌍",
    deskripsi:
      "Petualangan Raib, Seli, dan Ali yang membawa mereka mengenal dunia paralel dan kekuatan yang tidak biasa."
  },
  {
    id: 3,
    judul: "Filosofi Teras",
    penulis: "Henry Manampiring",
    kategori: "Pengembangan Diri",
    tahun: 2018,
    warna: "#f5dfc7",
    simbol: "📙",
    deskripsi:
      "Buku tentang filsafat Stoisisme dan cara menghadapi berbagai hal yang terjadi dalam kehidupan sehari-hari."
  },
  {
    id: 4,
    judul: "Negeri 5 Menara",
    penulis: "Ahmad Fuadi",
    kategori: "Novel",
    tahun: 2009,
    warna: "#f2d8dc",
    simbol: "🏞️",
    deskripsi:
      "Cerita tentang persahabatan, pendidikan, dan cita-cita para santri yang berusaha meraih impian mereka."
  },
  {
    id: 5,
    judul: "Atomic Habits",
    penulis: "James Clear",
    kategori: "Pengembangan Diri",
    tahun: 2018,
    warna: "#e3ddf5",
    simbol: "📘",
    deskripsi:
      "Buku yang membahas cara membangun kebiasaan baik melalui perubahan kecil yang dilakukan secara konsisten."
  },
  {
    id: 6,
    judul: "Hujan",
    penulis: "Tere Liye",
    kategori: "Fiksi",
    tahun: 2016,
    warna: "#d5e9e8",
    simbol: "🌧️",
    deskripsi:
      "Kisah tentang persahabatan, kehilangan, dan pilihan hidup yang berlatar masa depan."
  }
];

function Navbar({ halaman, setHalaman }) {
  const menu = ["Beranda", "Katalog", "Favorit", "Kontak"];

  return (
    <header className="navbar">
      <button
        className="logo"
        onClick={() => setHalaman("Beranda")}
      >
        <span className="logo-icon">B</span>
        BukuKita
      </button>

      <nav>
        {menu.map((item) => (
          <button
            key={item}
            className={
              halaman === item ||
              (halaman === "Detail Buku" && item === "Katalog")
                ? "nav-link aktif"
                : "nav-link"
            }
            onClick={() => setHalaman(item)}
          >
            {item}
          </button>
        ))}
      </nav>
    </header>
  );
}


function Footer() {
  return (
    <footer className="footer">
      <p>Katalog Buku Digital</p>
      <p>Dibuat oleh:</p>
      <p>Yohanes Pathema & Chornelius Prastowo</p>
      <p>© 2026</p>
    </footer>
  );
}


function BookCard({
  buku,
  favorit,
  toggleFavorit,
  bukaDetail
}) {
  const disukai = favorit.includes(buku.id);

  return (
    <article className="book-card">
      <button
        className={
          disukai
            ? "favorite-button disukai"
            : "favorite-button"
        }
        onClick={() => toggleFavorit(buku.id)}
        aria-label="Ubah status favorit"
      >
        {disukai ? "♥" : "♡"}
      </button>

      <button
        className="cover"
        style={{ backgroundColor: buku.warna }}
        onClick={() => bukaDetail(buku)}
      >
        <span>{buku.simbol}</span>
        <strong>{buku.judul}</strong>
      </button>

      <div className="book-info">
        <span className="category">{buku.kategori}</span>
        <h3>{buku.judul}</h3>
        <p>{buku.penulis}</p>

        <button
          className="text-button"
          onClick={() => bukaDetail(buku)}
        >
          Lihat detail →
        </button>
      </div>
    </article>
  );
}

function BookForm({ onTambah }) {
  const [judul, setJudul] = useState("");
  const [penulis, setPenulis] = useState("");
  const [kategori, setKategori] = useState("Novel");
  const [pesan, setPesan] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!judul.trim() || !penulis.trim()) {
      setPesan("Judul dan penulis harus diisi.");
      return;
    }

    onTambah({
      id: Date.now(),
      judul: judul.trim(),
      penulis: penulis.trim(),
      kategori,
      tahun: new Date().getFullYear(),
      warna: "#e4e8f2",
      simbol: "📘",
      deskripsi:
        "Buku ini ditambahkan melalui formulir saran katalog."
    });

    setJudul("");
    setPenulis("");
    setKategori("Novel");
    setPesan("Buku berhasil ditambahkan.");
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <h3>Sarankan Buku</h3>
      <p className="muted">
        Tambahkan buku baru ke dalam katalog.
      </p>

      <label htmlFor="judul">Judul Buku</label>
      <input
        id="judul"
        value={judul}
        onChange={(e) => setJudul(e.target.value)}
        placeholder="Masukkan judul buku"
        maxLength={70}
        required
      />

      <label htmlFor="penulis">Nama Penulis</label>
      <input
        id="penulis"
        value={penulis}
        onChange={(e) => setPenulis(e.target.value)}
        placeholder="Masukkan nama penulis"
        maxLength={60}
        required
      />

      <label htmlFor="kategori">Kategori</label>
      <select
        id="kategori"
        value={kategori}
        onChange={(e) => setKategori(e.target.value)}
      >
        <option>Novel</option>
        <option>Fiksi</option>
        <option>Fantasi</option>
        <option>Pengembangan Diri</option>
        <option>Pendidikan</option>
      </select>

      <button className="primary-button" type="submit">
        Tambah Buku
      </button>

      {pesan && (
        <p
          className={
            pesan.startsWith("Buku berhasil")
              ? "form-message sukses"
              : "form-message"
          }
        >
          {pesan}
        </p>
      )}
    </form>
  );
}

export default function App() {
  const [halaman, setHalaman] = useState("Beranda");

  const [buku, setBuku] = useState(() => {
    try {
      const tambahan = JSON.parse(
        localStorage.getItem("bukukita-tambahan")
      ) || [];

      return [...bukuContoh, ...tambahan];
    } catch {
      return bukuContoh;
    }
  });

  const [favorit, setFavorit] = useState(() => {
    try {
      return (
        JSON.parse(
          localStorage.getItem("bukukita-favorit")
        ) || []
      );
    } catch {
      return [];
    }
  });

  const [pilihanBuku, setPilihanBuku] =
    useState(bukuContoh[0]);

  const [kataKunci, setKataKunci] = useState("");
  const [filterKategori, setFilterKategori] =
    useState("Semua");

  useEffect(() => {
    localStorage.setItem(
      "bukukita-favorit",
      JSON.stringify(favorit)
    );
  }, [favorit]);

  useEffect(() => {
    localStorage.setItem(
      "bukukita-tambahan",
      JSON.stringify(buku.slice(bukuContoh.length))
    );
  }, [buku]);

  function toggleFavorit(id) {
    setFavorit((sebelumnya) =>
      sebelumnya.includes(id)
        ? sebelumnya.filter((item) => item !== id)
        : [...sebelumnya, id]
    );
  }

  function bukaDetail(item) {
    setPilihanBuku(item);
    setHalaman("Detail Buku");
  }

  function tambahBuku(item) {
    setBuku((sebelumnya) => [...sebelumnya, item]);
  }

  const hasilFilter = buku.filter((item) => {
    const teks = `${item.judul} ${item.penulis}`.toLowerCase();

    const cocokNama = teks.includes(
      kataKunci.toLowerCase()
    );

    const cocokKategori =
      filterKategori === "Semua" ||
      item.kategori === filterKategori;

    return cocokNama && cocokKategori;
  });

  const daftarKategori = [
    "Semua",
    ...new Set(buku.map((item) => item.kategori))
  ];

  return (
    <div className="app">
      <Navbar
        halaman={halaman}
        setHalaman={setHalaman}
      />

      <main className="main-content">
        {halaman === "Beranda" && (
          <>
            <section className="hero">
              <div className="hero-text">
                <p className="eyebrow">RUANG BACA DIGITAL</p>

                <h1>
                  Temukan buku untuk{" "}
                  <span>cerita berikutnya.</span>
                </h1>

                <p className="hero-desc">
                  Jelajahi koleksi buku, lihat informasi
                  singkat, dan simpan buku yang ingin kamu baca.
                </p>

                <button
                  className="primary-button"
                  onClick={() => setHalaman("Katalog")}
                >
                  Jelajahi Katalog →
                </button>
              </div>

              <div className="hero-art">
                <div className="art-book art-book-one">
                  BACA
                  <br />
                  DAN
                  <br />
                  TEMUKAN
                </div>

                <div className="art-book art-book-two">
                  CERITA
                  <br />
                  BARU
                </div>

                <span className="art-spark">✦</span>
              </div>
            </section>

            <section className="section-block">
              <div className="section-heading">
                <div>
                  <p className="eyebrow">PILIHAN KAMI</p>
                  <h2>Buku Pilihan</h2>
                </div>

                <button
                  className="text-button"
                  onClick={() => setHalaman("Katalog")}
                >
                  Lihat Semua →
                </button>
              </div>

              <div className="book-grid">
                {buku.slice(0, 3).map((item) => (
                  <BookCard
                    key={item.id}
                    buku={item}
                    favorit={favorit}
                    toggleFavorit={toggleFavorit}
                    bukaDetail={bukaDetail}
                  />
                ))}
              </div>
            </section>
          </>
        )}

        {halaman === "Katalog" && (
          <section className="section-block page-section">
            <p className="eyebrow">KOLEKSI BUKUKITA</p>
            <h1>Katalog Buku</h1>
            <p className="muted">
              Cari judul atau penulis dan pilih buku
              untuk melihat detailnya.
            </p>

            <div className="filter-bar">
              <input
                value={kataKunci}
                onChange={(e) => setKataKunci(e.target.value)}
                placeholder="Cari judul atau penulis..."
                aria-label="Cari buku"
              />

              <select
                value={filterKategori}
                onChange={(e) =>
                  setFilterKategori(e.target.value)
                }
                aria-label="Filter kategori"
              >
                {daftarKategori.map((kategori) => (
                  <option key={kategori}>{kategori}</option>
                ))}
              </select>
            </div>

            <p className="result-count">
              Menampilkan {hasilFilter.length} buku
            </p>

            {hasilFilter.length > 0 ? (
              <div className="book-grid">
                {hasilFilter.map((item) => (
                  <BookCard
                    key={item.id}
                    buku={item}
                    favorit={favorit}
                    toggleFavorit={toggleFavorit}
                    bukaDetail={bukaDetail}
                  />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                Buku tidak ditemukan. Coba kata kunci lain.
              </div>
            )}
          </section>
        )}

        {halaman === "Detail Buku" && (
          <section className="detail-page">
            <button
              className="text-button back-button"
              onClick={() => setHalaman("Katalog")}
            >
              ← Kembali ke Katalog
            </button>

            <div className="detail-layout">
              <div
                className="detail-cover"
                style={{
                  backgroundColor: pilihanBuku.warna
                }}
              >
                <span>{pilihanBuku.simbol}</span>
                <strong>{pilihanBuku.judul}</strong>
              </div>

              <div className="detail-info">
                <span className="category">
                  {pilihanBuku.kategori}
                </span>

                <h1>{pilihanBuku.judul}</h1>

                <p className="detail-author">
                  Ditulis oleh {pilihanBuku.penulis}
                </p>

                <p className="detail-year">
                  Tahun terbit: {pilihanBuku.tahun}
                </p>

                <h3>Deskripsi</h3>
                <p className="detail-description">
                  {pilihanBuku.deskripsi}
                </p>

                <button
                  className="primary-button"
                  onClick={() =>
                    toggleFavorit(pilihanBuku.id)
                  }
                >
                  {favorit.includes(pilihanBuku.id)
                    ? "♥ Hapus dari Favorit"
                    : "♡ Tambah ke Favorit"}
                </button>
              </div>
            </div>
          </section>
        )}

        {halaman === "Favorit" && (
          <section className="section-block page-section">
            <p className="eyebrow">DAFTAR SIMPANAN</p>
            <h1>Buku Favorit</h1>
            <p className="muted">
              Buku yang kamu pilih akan tersimpan di browser.
            </p>

            {buku.some((item) =>
              favorit.includes(item.id)
            ) ? (
              <div className="book-grid">
                {buku
                  .filter((item) =>
                    favorit.includes(item.id)
                  )
                  .map((item) => (
                    <BookCard
                      key={item.id}
                      buku={item}
                      favorit={favorit}
                      toggleFavorit={toggleFavorit}
                      bukaDetail={bukaDetail}
                    />
                  ))}
              </div>
            ) : (
              <div className="empty-state">
                <span className="empty-heart">♡</span>
                <h3>Belum Ada Buku Favorit</h3>
                <p>
                  Tekan tanda hati pada buku yang ingin disimpan.
                </p>

                <button
                  className="primary-button"
                  onClick={() => setHalaman("Katalog")}
                >
                  Buka Katalog
                </button>
              </div>
            )}
          </section>
        )}

        {halaman === "Kontak" && (
          <section className="contact-page">
            <div className="contact-intro">
              <p className="eyebrow">HUBUNGI KAMI</p>
              <h1>Punya Saran Buku?</h1>

              <p className="muted">
                Kamu bisa menambahkan buku melalui formulir
                di samping. Data disimpan di browser.
              </p>

              <div className="contact-note">
                <span>✉</span>
                <div>
                  <strong>Email</strong>
                  <p>halo@bukukita.com</p>
                </div>
              </div>

              <div className="contact-note">
                <span>⌂</span>
                <div>
                  <strong>Jam Layanan</strong>
                  <p>Senin–Jumat, 09.00–16.00</p>
                </div>
              </div>
            </div>

            <BookForm onTambah={tambahBuku} />
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}
