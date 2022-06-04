import Image from "next/image";
import Link from "next/link";

import styles from "./styles.module.css";

import alunAlun from "@assets/images/recommendation/alun-alun.webp";
import bentengPendem from "@assets/images/recommendation/benteng-pendem.webp";
import srambang from "@assets/images/recommendation/srambang.webp";
import jamus from "@assets/images/recommendation/jamus.webp";

const Recommendation = () => {
  return (
    <div className={styles.recommendation}>
      <div
        className={`${styles.recommendationContainer} bg-soft-grey shadow p-4`}
      >
        <p className="font-section-header fs-1 text-secondary-blue text-center mb-5">
          Tempat Yang Wajib Dikunjungi
        </p>
        <div className="row justify-content-center">
          <div className="col-12 col-md-6 p-relative">
            <Image
              src={alunAlun}
              alt="alun-alun"
              placeholder="blur"
              className="img-fluid"
              loading="lazy"
            />
            <Link href={"/tourism/11"}>
              <a
                className={`${styles.itemName} fs-2 text-white stretched-link text-decoration-none`}
              >
                Alun-Alun Ngawi
              </a>
            </Link>
          </div>
          <div className="col-sm-12 col-md-6 p-relative">
            <Image
              src={bentengPendem}
              alt="benteng pendem"
              placeholder="blur"
              className="img-fluid"
              loading="lazy"
            />
            <Link href={"/tourism/0"}>
              <a
                className={`${styles.itemName} fs-2 text-white stretched-link text-decoration-none`}
              >
                Benteng Pendem
              </a>
            </Link>
          </div>
          <div className="col-12 col-md-6 p-relative">
            <Image
              src={srambang}
              alt="srambang"
              placeholder="blur"
              className="img-fluid"
              loading="lazy"
            />
            <Link href={"/tourism/3"}>
              <a
                className={`${styles.itemName} fs-2 text-white stretched-link text-decoration-none`}
              >
                Srambang Park
              </a>
            </Link>
          </div>
          <div className="col-12 col-md-6 p-relative">
            <Image
              src={jamus}
              alt="jamus"
              placeholder="blur"
              className="img-fluid"
              loading="lazy"
            />
            <Link href={"/tourism/1"}>
              <a
                className={`${styles.itemName} fs-2 text-white stretched-link text-decoration-none`}
              >
                Kebun Teh Jamus
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
