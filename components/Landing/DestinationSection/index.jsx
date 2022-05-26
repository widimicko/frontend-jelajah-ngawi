import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

import tourism from "@assets/images/tourism.png";
import umkm from "@assets/images/umkm.png";
import hotel from "@assets/images/hotel.png";
import badgeDestinationCard from "@assets/images/icons/badge-destination-card.png";
import circleChevronRight from "@assets/images/icons/circle-chevron-right.png";

const DestinationSection = () => {
  return (
    <div className={`${styles.destination} p-5`}>
      <p
        className="font-section-header fs-1 text-center text-white mb-5"
        style={{ marginTop: "4rem" }}
      >
        Cari Destinasi Kamu di Kota Ngawi
      </p>
      <div className="row g-3 justify-content-center">
        <div className="col-sm-12 col-md-4 col-lg-3">
          <div className="card" style={{ borderRadius: "20px 20px 0 0" }}>
            <Image
              src={tourism}
              className="card-img-top"
              placeholder="blur"
              alt="tourism"
            />
            <div
              className="card-body bg-secondary"
              style={{ position: "relative", padding: 0 }}
            >
              <Image
                src={badgeDestinationCard}
                alt="badge"
                className={`${styles.bagdeDestinationCard} img-fluid`}
                placeholder="blur"
              />
              <div className="p-4 text-center">
                <h5
                  className={`${styles.destinationText} fs-2 text-white mb-4`}
                >
                  Pariwisata
                </h5>
                <Link href="/explore">
                  <a className="text-decoration-none">
                    <div className="d-flex justify-content-center align-items-center bg-soft-grey rounded-pill p-1 px-5 fs-3 text-black">
                      <p className="fs-3" style={{ fontWeight: 600 }}>
                        Lihat
                      </p>
                      <Image
                        src={circleChevronRight}
                        alt="icon"
                        placeholder="blur"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <div className="card" style={{ borderRadius: "20px 20px 0 0" }}>
            <Image
              src={umkm}
              className="card-img-top"
              placeholder="blur"
              alt="UMKM"
            />
            <div
              className="card-body bg-secondary"
              style={{ position: "relative", padding: 0 }}
            >
              <Image
                alt="badge"
                src={badgeDestinationCard}
                className={`${styles.bagdeDestinationCard} img-fluid`}
                placeholder="blur"
              />
              <div className="p-4 text-center">
                <h5
                  className={`${styles.destinationText} fs-2 text-white mb-4`}
                >
                  Oleh - oleh
                </h5>
                <Link href="/explore">
                  <a className="text-decoration-none">
                    <div className="d-flex justify-content-center align-items-center bg-soft-grey rounded-pill p-1 px-5 fs-3 text-black">
                      <p className="fs-3" style={{ fontWeight: 600 }}>
                        Lihat
                      </p>
                      <Image
                        src={circleChevronRight}
                        alt="icon"
                        placeholder="blur"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3">
          <div className="card" style={{ borderRadius: "20px 20px 0 0" }}>
            <Image
              src={hotel}
              className="card-img-top"
              placeholder="blur"
              alt="Hotel"
            />
            <div
              className="card-body bg-secondary"
              style={{ position: "relative", padding: 0 }}
            >
              <Image
                src={badgeDestinationCard}
                alt="badge"
                className={`${styles.bagdeDestinationCard} img-fluid`}
                placeholder="blur"
              />
              <div className="p-4 text-center">
                <h5
                  className={`${styles.destinationText} fs-2 text-white mb-4`}
                >
                  Penginapan
                </h5>
                <Link href="/explore">
                  <a className="text-decoration-none">
                    <div className="d-flex justify-content-center align-items-center bg-soft-grey rounded-pill p-1 px-5 fs-3 text-black">
                      <p className="fs-3" style={{ fontWeight: 600 }}>
                        Lihat
                      </p>
                      <Image
                        src={circleChevronRight}
                        alt="icon"
                        placeholder="blur"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ height: "10rem" }}></div>
    </div>
  );
};

export default DestinationSection;
