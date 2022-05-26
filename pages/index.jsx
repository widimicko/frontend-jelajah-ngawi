import Head from "next/head";

import Navbar from "@components/Navbar";

import HeroSection from "@components/Landing/HeroSection";
import MapSection from "@components/Landing/MapSection";
import DestinationSection from "@components/Landing/DestinationSection";
import Recommendation from "@components/Landing/Recommendation";
import Footer from "@components/Footer";

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
        <HeroSection />
        <MapSection />
        <DestinationSection />
        <Recommendation />
      </main>
      <Footer />
    </div>
  );
}
