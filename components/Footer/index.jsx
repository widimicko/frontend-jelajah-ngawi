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
    <footer className="bg-off-white py-4 shadow">
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
          <Image src={logo} alt="logo" />
        </div>
        <div className="w-75 mx-auto text-center">
          <p className="text-secondary fs-5">
            <b>Ngawi</b>, tempat yang menjadi destinasi wisata untuk dikunjungi
            sebagai liburan. Anda dapat menemukan kulineran, liburan, hiburan,
            belanja, dan semua aktivitas lainnya tanpa perlu meninggalkan Alam.
          </p>
          <div className="d-flex justify-content-center gap-4 fs-1">
            <a href="#" className="text-secondary">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="text-secondary">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
        <hr />
        <div
          className="d-flex gap-4 align-items-center justify-content-center"
          style={{ overflowX: "auto" }}
        >
          <a
            href="http://ngawikab.go.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={ngawi}
              alt="kabupaten ngawi"
              loading="lazy"
              className="img-fluid"
              height={600}
              width={750}
              placeholder="blur"
            />
          </a>
          <Image
            src={ngawiRamah}
            alt="ngawi ramah"
            loading="lazy"
            className="img-fluid"
            height={600}
            width={1200}
            placeholder="blur"
          />
          <a
            href="http://indonesia.travel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={wonderfullIndonesia}
              alt="wonderfull indonesia"
              loading="lazy"
              className="img-fluid"
              height={600}
              placeholder="blur"
            />
          </a>
          <a
            href="http://prodi.vokasi.uns.ac.id/psdku-tekinfo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={smartInotek}
              alt="smart inotek"
              loading="lazy"
              className="img-fluid"
              height={600}
              placeholder="blur"
            />
          </a>
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
