import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";
import heroImage from "@assets/images/hero.png";

const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div
        className="row g-3 align-items-center p-5"
        style={{ marginRight: 0 }}
      >
        <div className="col-sm-12 col-md-6">
          <Image
            src={heroImage}
            alt={"Hero Image"}
            placeholder="blur"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-12 col-md-6">
          <div className={`text-shadow-2 text-off-white`}>
            <p className={styles.heroTextHeading}>
              Kenapa harus ke Kota Ngawi?
            </p>
            <p className={styles.heroTextParagraph}>
              Apakah kamu berencana liburan untuk menikmati waktu luang Anda?
              Mencari tempat untuk menjelajah, makan, dan menikmati liburan Anda
              bersama orang-orang terkasih? <b>Ngawi</b> menawarkan perjalanan
              untuk anda dan anda akan mendapatkan pengalaman yang luar biasa.
            </p>
            <Link href="/explore">
              <a className="rounded-pill text-off-white px-4 text-decoration-none bg-primary py-3 fs-4">
                Jelajahi Sekarang
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
