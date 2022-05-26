import Link from "next/link";
import Image from "next/image";

import styles from "./styles.module.css";

import logo from "@assets/images/logo.png";
import ngawi from "@assets/images/logo_ngawi.png";
import ngawiRamah from "@assets/images/logo_ngawiramah.png";
import wonderfullIndonesia from "@assets/images/wonderful_indonesia.png";
import smartInotek from "@assets/images/logo_inotek.jpg";

const Footer = () => {
  return (
    <footer className="bg-off-white py-4">
      <div className="container">
        <div className={`d-flex justify-content-center`}>
          <Image src={logo} alt="logo" />
        </div>
        <div className="w-75 mx-auto text-center">
          <p className="text-secondary fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at
            consequatur repellendus? Ut, dicta! Voluptatibus, vero nisi! Minus
            rem, fugiat at illum nisi eius perferendis fugit debitis,
            dignissimos
          </p>
          <span className="fs-1 text-secondary">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-instagram"></i>
            <i className="bi bi-github"></i>
          </span>
        </div>
        <hr />
        <div
          className="d-flex gap-4 align-items-center justify-content-center"
          style={{ overflowX: "auto" }}
        >
          <Image
            src={ngawi}
            alt="kabupaten ngawi"
            loading="lazy"
            className="img-fluid"
            height={600}
            width={650}
            placeholder="blur"
          />
          <Image
            src={ngawiRamah}
            alt="ngawi ramah"
            loading="lazy"
            className="img-fluid"
            height={600}
            width={1200}
            placeholder="blur"
          />
          <Image
            src={wonderfullIndonesia}
            alt="wonderfull indonesia"
            loading="lazy"
            className="img-fluid"
            height={600}
            placeholder="blur"
          />
          <Image
            src={smartInotek}
            alt="smart inotek"
            loading="lazy"
            className="img-fluid"
            height={600}
            placeholder="blur"
          />
        </div>
        <hr />
        <div className="py-4 d-flex flex-wrap gap-4 justify-content-center text-secondary fs-5">
          <p>© 2022 Jelajah Ngawi, Inc.</p>
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
