/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { useRouter } from "next/router";
import { init } from "shareon";
import "shareon/css";

import styles from "../../styles/tourism.module.css";
import imageBaseUrl from "global/config";
import tourism from "@data/tourism";

import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import BackToTopButton from "@components/BackToTopButton";

const Tourism = () => {
  const router = useRouter();
  const { index } = router.query;

  const {
    name,
    label,
    district,
    urlLocation,
    embedMapLink,
    description,
    rating,
    openDays,
    openTime,
    ticketPrice,
    image,
    imageUrls,
  } = tourism[index];

  init();

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
      <main className={`${styles.main} py-5`}>
        <div className={`${styles.contentContainer} container p-4`}>
          <p className={`${styles.header} fs-1 mb-5`}>{name}</p>
          <div className="row justify-content-center g-5">
            <div className="col-12 col-md-6">
              <div
                id={`carouselExampleControls`}
                className="carousel slide rounded mb-4"
                data-bs-ride="carousel"
                style={{
                  boxShadow: "2px 4px 4px 2px rgba(0, 0, 0, 0.25)",
                }}
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={`${imageBaseUrl}tr:q-70/tourism/${image}`}
                      alt={name}
                      className="img-fluid w-100"
                    />
                  </div>
                  {imageUrls.length &&
                    imageUrls.map((image, index) => {
                      return (
                        <div key={index} className="carousel-item">
                          <img
                            src={`${imageBaseUrl}tr:q-70/tourism/${image}`}
                            alt={name}
                            className="img-fluid w-100"
                          />
                        </div>
                      );
                    })}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#carouselExampleControls`}
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#carouselExampleControls`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="row g-3">
                <div className="col-6 col-md-4">
                  <div
                    className="bg-primary-brown px-2"
                    style={{ borderRadius: "0px 20px 20px 0px" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <p className="fs-3">
                        <i className="bi bi-calendar-fill"></i>
                      </p>
                      <p className="text-off-white">
                        <span className={`${styles.titleItem} fs-5`}>
                          Hari Buka
                        </span>
                        <br />
                        <span className={styles.contentItem}>{openDays}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div
                    className="bg-primary-brown px-2"
                    style={{ borderRadius: "0px 20px 20px 0px" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <p className="fs-3">
                        <i className="bi bi-clock-fill"></i>
                      </p>
                      <p className="text-off-white">
                        <span className={`${styles.titleItem} fs-5`}>
                          Jam Buka
                        </span>
                        <br />
                        <span className={styles.contentItem}>{openTime}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div
                    className="bg-primary-brown px-2"
                    style={{ borderRadius: "0px 20px 20px 0px" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <p className="fs-3">
                        <i className="bi bi-credit-card-2-front-fill"></i>
                      </p>
                      <p className="text-off-white">
                        <span className={`${styles.titleItem} fs-5`}>
                          Harga Tiket
                        </span>
                        <br />
                        <span className={styles.contentItem}>
                          {ticketPrice}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div
                    className="bg-primary-brown px-2"
                    style={{ borderRadius: "0px 20px 20px 0px" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <p className="fs-3">
                        <i className="bi bi-map-fill"></i>
                      </p>
                      <p className="text-off-white">
                        <span className={`${styles.titleItem} fs-5`}>
                          Kecamatan
                        </span>
                        <br />
                        <span className={styles.contentItem}>{district}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div
                    className="bg-primary-brown px-2"
                    style={{ borderRadius: "0px 20px 20px 0px" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <p className="fs-3">
                        <i className="bi bi-bookmarks-fill"></i>
                      </p>
                      <p className="text-off-white">
                        <span className={`${styles.titleItem} fs-5`}>
                          Kategori
                        </span>
                        <br />
                        <span className={styles.contentItem}>{label}</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div
                    className="bg-primary-brown px-2"
                    style={{ borderRadius: "0px 20px 20px 0px" }}
                  >
                    <div className="d-flex align-items-center gap-3">
                      <p className="fs-3">
                        <i className="bi bi-star-fill"></i>
                      </p>
                      <p className="text-off-white">
                        <span className={`${styles.titleItem} fs-5`}>
                          Rating
                        </span>
                        <br />
                        <span className={styles.contentItem}>{rating} / 5</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="w-100 mt-4"
                style={{ height: "518px" }}
                dangerouslySetInnerHTML={{ __html: embedMapLink }}
              ></div>
            </div>
            <div className="col-12 col-md-6">
              <div className="bg-soft-grey p-3 mb-4 rounded">
                <p className="fs-5">{description}</p>
              </div>
              <hr />
              <div className="text-secondary-blue fs-4">
                Bagikan Halaman Ini
                <div className="shareon">
                  <a className="facebook"></a>
                  <a className="linkedin"></a>
                  <a className="mastodon"></a>
                  <a
                    className="messenger"
                    data-fb-app-id="0123456789012345"
                  ></a>
                  <a className="odnoklassniki"></a>
                  <a className="pinterest"></a>
                  <a className="pocket"></a>
                  <a className="reddit"></a>
                  <a className="telegram"></a>
                  <a className="twitter"></a>
                  <a className="viber"></a>
                  <a className="vkontakte"></a>
                  <a className="whatsapp"></a>
                </div>
              </div>
            </div>
          </div>
          <BackToTopButton />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Tourism;
