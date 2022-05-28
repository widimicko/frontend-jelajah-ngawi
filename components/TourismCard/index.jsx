/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import imageBaseUrl from "global/config";
import styles from "./styles.module.css";

const TourismCard = ({ tourism }) => {
  const { name, image, description } = tourism;

  return (
    <div className="card rounded shadow" style={{ width: "18rem", padding: 0 }}>
      <img
        src={`${imageBaseUrl}tr:q-30/tourism/${image}`}
        className={`${styles.image} card-img-top`}
        alt={name}
      />
      <div className="card-body bg-secondary-blue">
        <div className="p-3">
          <p className={`${styles.nameText} card-title fs-4 text-white`}>
            {name}
          </p>
          <p className={`${styles.descriptionText} card-text text-white`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TourismCard;
