/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import imageBaseUrl from "global/config";
import styles from "./styles.module.css";

const TourismCard = ({ tourism, index }) => {
  const { name, image, description } = tourism;

  return (
    <div className="card rounded shadow" style={{ width: "18rem", padding: 0 }}>
      {/* <img
        src={`${imageBaseUrl}tr:q-30/tourism/${image}`}
        className={`${styles.image} card-img-top`}
        alt={name}
      /> */}
      <div className="card-body bg-secondary-blue">
        <div className="p-3">
          <Link href={`/tourism/${index}`}>
            <a
              className={`${styles.nameText} text-decoration-none stretched-link card-title fs-4 text-white`}
            >
              {name}
            </a>
          </Link>
          {/* <p className={`${styles.descriptionText} card-text text-white`}>
            {description}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default TourismCard;
