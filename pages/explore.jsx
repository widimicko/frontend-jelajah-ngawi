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
import UmkmCard from "@components/UmkmCard";
import HotelCard from "@components/HotelCard";

import styles from "../styles/explore.module.css";

export default function Explore() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const handleCategoryChange = (name) => {
    setSelectedCategory(name);
  };

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
            className={`${styles.horizontalBar} bg-primary-brown mx-auto mb-5`}
          ></div>
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-5">
              {selectedCategory == "Pariwisata" &&
                tourism.map((tourism, index) => {
                  return <TourismCard key={index} tourism={tourism} />;
                })}
              {selectedCategory == "Oleh-oleh" &&
                umkm.map((umkm, index) => {
                  return <UmkmCard key={index} umkm={umkm} />;
                })}
              {selectedCategory == "Penginapan" &&
                hotel.map((hotel, index) => {
                  return <HotelCard key={index} hotel={hotel} index={index} />;
                })}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
