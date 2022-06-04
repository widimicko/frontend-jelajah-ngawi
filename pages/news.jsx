import Head from "next/head";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";

import styles from "../styles/news.module.css";
import BackToTopButton from "@components/BackToTopButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jelajah Ngawi</title>
        <meta
          name="description"
          content="Jelajah Ngawi merupakan situs yang digunakan untuk menyajikan informasi mengenai daftar wisata dan umkm di Ngawi dalam rangka menunjang potensi ekonomi daerah"
        />
        <link rel="icon" href="/assets/images/logo.png" />
      </Head>

      <Navbar />
      <main>
        <div className="container py-5">
          <p className="fs-1">Berita</p>
          <p className="fs-3">
            Berita diambil dan ditampilkan dari{" "}
            <a
              href="https://kampoengngawi.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              kampoengngawi.com
            </a>
            .
          </p>
          <div
            className={`bg-white ${styles.newsSpinner}`}
            style={{ border: "2px solid black" }}
          >
            <iframe
              src="https://kampoengngawi.com/"
              title="Berita Ngawi dari Kampoeng Ngawi"
              width={"100%"}
              height={500}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}
