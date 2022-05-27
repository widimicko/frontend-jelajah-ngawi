/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import styles from "./styles.module.css";

const UmkmCard = ({ item }) => {
  const { name, image, source } = item;

  return (
    <div className="card rounded shadow" style={{ width: "18rem", padding: 0 }}>
      <img
        src={image}
        className={`${styles.image} card-img-top img-fluid`}
        alt={name}
      />
      <div className="card-body bg-secondary">
        <div className="p-3">
          <p className={`${styles.nameText} card-title fs-4 text-white`}>
            {name}
          </p>
          <p className={`${styles.descriptionText} card-text text-white`}>
            {source}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UmkmCard;
