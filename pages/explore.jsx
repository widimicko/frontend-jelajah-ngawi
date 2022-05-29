/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Head from "next/head";

import categories from "@data/categories";
import tourism from "@data/tourism";
import umkm from "@data/umkm";
import hotel from "@data/hotel";
import imageGallery from "@data/imageGallery";

import Navbar from "@components/Navbar";
import Footer from "@components/Footer";
import Category from "@components/Category";

import TourismCard from "@components/TourismCard";
import UmkmCard from "@components/UmkmCard";
import HotelCard from "@components/HotelCard";

import styles from "../styles/explore.module.css";
import BackToTopButton from "@components/BackToTopButton";

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
          <div className={`${styles.header} text-center fs-1`}>
            {selectedCategory}
          </div>
          <div
            className={`${styles.horizontalBar} bg-primary-brown mx-auto mb-5`}
          ></div>
          <div className="container">
            <div className="d-flex flex-wrap justify-content-center gap-5">
              {selectedCategory == "Pariwisata" &&
                tourism.map((tourism, index) => {
                  return (
                    <TourismCard key={index} tourism={tourism} index={index} />
                  );
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
        <div className={`${styles.galleryBackground}`}>
          <div className="container p-5" style={{ minHeight: "500px" }}>
            <p className={`${styles.header} text-white fs-1`}>Galeri Wisata</p>
            <div
              className={`${styles.horizontalBar} bg-secondary-blue mb-3`}
            ></div>
            <div className={styles.masonry}>
              {imageGallery.length &&
                imageGallery.map((image, index) => (
                  <img
                    key={index}
                    src={image.src}
                    className="img-fluid mb-3"
                    alt="image"
                  />
                ))}
            </div>
          </div>
        </div>
        <BackToTopButton />
      </main>
      <Footer />
    </div>
  );
}
