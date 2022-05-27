import { useState, useEffect } from "react";
import Head from "next/head";

import categories from "@data/categories";
import tourism from "@data/tourism";
import umkm from "@data/umkm";
import hotel from "@data/hotel";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Category from "@components/Category";

import TourismCard from "@components/TourismCard";

import styles from "../styles/explore.module.css";
import UmkmCard from "@components/UmkmCard";

export default function Explore() {
  const [data, setData] = useState(tourism);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleCategoryChange = (name) => {
    setSelectedCategory(name);
  };

  useEffect(() => {
    if (selectedCategory === "Pariwisata") {
      setData(tourism);
    } else if (selectedCategory === "Oleh-oleh") {
      setData(umkm);
    } else if (selectedCategory === "Penginapan") {
      setData(hotel);
    }
  }, [selectedCategory]);

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
        <div className={styles.hero}>
          <div
            className="w-50 mx-auto text-center"
            style={{ marginTop: "7.5rem" }}
          >
            <p className={`${styles.heroHeader} fs-1 text-white`}>
              Go Explore!
            </p>
            <p className={`${styles.heroHeader} fs-1 text-white`}>
              Temukan Destinasimu
            </p>
          </div>
          <div className="d-flex flex-wrap justify-content-center gap-5">
            {categories.map((category, index) => {
              return (
                <Category
                  key={index}
                  category={category}
                  selectedCategory={selectedCategory}
                  handleCategoryChange={() =>
                    handleCategoryChange(category.name)
                  }
                />
              );
            })}
          </div>
        </div>
        <div className="bg-off-white p-5">
          <div className={`${styles.dataListHeader} text-center fs-1`}>
            {selectedCategory}
          </div>
          <div
            className={`${styles.horizontalBar} bg-primary mx-auto mb-5`}
          ></div>
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-5">
              {selectedCategory == "Pariwisata" &&
                data.map((item, index) => {
                  return <TourismCard key={index} item={item} />;
                })}
              {selectedCategory == "Oleh-oleh" &&
                data.map((item, index) => {
                  return <UmkmCard key={index} item={item} />;
                })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
