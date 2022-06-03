/* eslint-disable @next/next/no-img-element */
import { Rating } from "react-simple-star-rating";

import { imageBaseUrl } from "global/config";
import styles from "./styles.module.css";

const HotelCard = ({ hotel, index }) => {
  const {
    name,
    district,
    urlLocation,
    fullAddress,
    phone,
    rating,
    checkInTime,
    price,
    image,
    imageUrls,
  } = hotel;

  return (
    <div className="card mb-1 w-100 bg-secondary-blue">
      <div className="row g-0">
        <div className="col-md-4 border-end">
          <div
            id={`carouselExampleControls${index}`}
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src={`${imageBaseUrl}tr:q-30/hotel/${image}`}
                  className="d-block w-100 rounded-start"
                  alt={name}
                  height={300}
                />
              </div>
              {imageUrls.length &&
                imageUrls.map((image, index) => {
                  return (
                    <div key={index} className="carousel-item">
                      <img
                        src={`${imageBaseUrl}tr:q-30/hotel/${image}`}
                        className="d-block w-100 rounded-start"
                        alt={name}
                        height={300}
                      />
                    </div>
                  );
                })}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target={`#carouselExampleControls${index}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target={`#carouselExampleControls${index}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title text-white fs-3 mb-3">{name}</h5>
            <div className="card-text text-white">
              <div className="d-flex justify-content-between fs-5">
                <a
                  href={urlLocation}
                  className="text-danger text-decoration-none "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-map-fill"></i> &ensp;
                  <span className="text-white">{district}</span>
                </a>
                <p className="text-white">{price ?? "Tidak Tersedia"}</p>
              </div>
              <div className="py-1 px-3">
                <p>Alamat : {fullAddress}</p>
                <p>Telepon : {phone ?? "Tidak Tersedia"}</p>
                <p>Jam Checkin : {checkInTime ?? "Tidak Tersedia"}</p>
                <Rating
                  initialValue={rating}
                  allowHalfIcon
                  allowHover={false}
                  readonly={true}
                  size={24}
                  showTooltip
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
