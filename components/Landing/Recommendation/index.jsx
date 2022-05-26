import Image from "next/image";

import styles from "./styles.module.css";

import alunAlun from "@assets/images/alun-alun.png";
import bentengPendem from "@assets/images/benteng-pendem.png";
import srambang from "@assets/images/srambang.png";
import jamus from "@assets/images/jamus.png";

const Recommendation = () => {
  return (
    <div className={styles.recommendation}>
      <div
        className={`${styles.recommendationContainer} bg-soft-grey shadow p-4`}
      >
        <p className="font-section-header fs-1 text-secondary text-center mb-5">
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
            <div className={`${styles.itemName} fs-2 text-white`}>
              <p>Alun-Alun Ngawi</p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 p-relative">
            <Image
              src={bentengPendem}
              alt="benteng pendem"
              placeholder="blur"
              className="img-fluid"
              loading="lazy"
            />
            <div className={`${styles.itemName} fs-2 text-white`}>
              <p>Benteng Pendem</p>
            </div>
          </div>
          <div className="col-12 col-md-6 p-relative">
            <Image
              src={srambang}
              alt="srambang"
              placeholder="blur"
              className="img-fluid"
              loading="lazy"
            />
            <div className={`${styles.itemName} fs-2 text-white`}>
              <p>Srambang Park</p>
            </div>
          </div>
          <div className="col-12 col-md-6 p-relative">
            <Image
              src={jamus}
              alt="jamus"
              placeholder="blur"
              className="img-fluid"
              loading="lazy"
            />
            <div className={`${styles.itemName} fs-2 text-white`}>
              <p>Kebun Teh Jamus</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
