/* eslint-disable @next/next/no-img-element */
import imageBaseUrl from "global/config";
import styles from "./styles.module.css";

const UmkmCard = ({ umkm }) => {
  const { name, image, source } = umkm;

  return (
    <div className="card rounded shadow" style={{ width: "18rem", padding: 0 }}>
      <img
        src={`${imageBaseUrl}tr:q-70/umkm/${image}`}
        className={`${styles.image} card-img-top img-fluid`}
        alt={name}
      />
      <div className="card-body bg-secondary-blue">
        <div className="p-3">
          <p className={`${styles.nameText} card-title fs-4 text-white`}>
            {name}
          </p>
          {source ? (
            <div className="text-center">
              <a
                href={source}
                className={`${styles.link} bg-soft-grey text-center text-decoration-none rounded-pill p-1 px-5 fs-5 text-black`}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Kunjungi
              </a>
            </div>
          ) : (
            <div className="text-center">
              <p
                className={`${styles.link} bg-soft-grey rounded-pill p-1 px-3 fs-5 text-black`}
              >
                Tidak tersedia
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UmkmCard;
