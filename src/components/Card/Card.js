import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";

const Card = ({ page, results }) => {
  let display;

  if (results) {
    display = results.map((x) => {
      let { id, image, name, status, location, gender, episode } = x;
      let ranEpi = episode[Math.round(Math.random() * episode.length)];

      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page}${id}`}
          key={id}
          className=" col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div
            className={`${styles.card} card-body d-flex flex-column justify-content-center`}
          >
            <h4 className="card-title text-center color-info text-primary">
              {name}
            </h4>
            <img
              className={`${styles.img} img-fluid rounded-circle`}
              src={image}
              alt=""
            />
            <div>
              <ul className="list-group list-group-flush">
                <span className="text-center fw-bold ">Gender</span>
                <li className="list-group-item text-center text-secondary">
                  {gender}
                </li>
                <span className="text-center fw-bold">Location</span>
                <li className="list-group-item text-center text-secondary">
                  {location.name}
                </li>
                <span className="text-center fw-bold">Episode</span>
                <li className="list-group-item text-center text-secondary">
                  {ranEpi}
                </li>
              </ul>
            </div>
          </div>

          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute rounded-pill badge bg-secondary`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute rounded-pill badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute rounded-pill badge bg-warning`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No Characters Found :/";
  }

  return <>{display}</>;
};

export default Card;
