import Link from "next/link";
import Image from "next/image";

import logo from "@assets/images/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar p-2 navbar-expand-lg navbar-light bg-off-white shadow">
      <div className="container">
        <Link href={"/"}>
          <a className="navbar-brand">
            <Image
              src={logo}
              alt="Jelajah Ngawi"
              height={48}
              width={200}
              placeholder="blur"
            />
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="ms-auto navbar-nav gap-2">
            <li className="nav-item">
              <Link href={"/"}>
                <a
                  className="nav-link"
                  style={{ fontSize: "20px", fontWeight: 500 }}
                  aria-current="page"
                >
                  Beranda
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/news"}>
                <a
                  className="nav-link"
                  style={{ fontSize: "20px", fontWeight: 500 }}
                >
                  Berita
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/explore"}>
                <a
                  className="nav-link rounded-pill text-primary text-center"
                  style={{
                    fontSize: "20px",
                    fontWeight: 500,
                    border: "3px solid #B8603C",
                  }}
                >
                  Go Explore
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
