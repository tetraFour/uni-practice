import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Strips } from "../../assets/images/strips.svg";
import { ReactComponent as House } from "../../assets/images/house.svg";

import "./style.sass";

export default function Programme() {
  return (
    <section className="programme-section">
      <div className="container">
        <div className="preview-block">
          <span>The Best University</span>
          <h2>
            Our <span>Programme</span>
          </h2>
          <Strips />
        </div>
        <ul className="programme-list">
          <li className="programme-list__item">
            <House />
            <h3>HIGHEST RATED</h3>
            <p>
              Aperiam nascetur porro porro, netus harum repellat sed porttitor
              ullamco voluptas sem molestias omnis eligendi.
            </p>
            <Link to="/">Read more</Link>
          </li>
          <li className="programme-list__item">
            <House />
            <h3>MEDICAL TRANNING</h3>
            <p>
              Aperiam nascetur porro porro, netus harum repellat sed porttitor
              ullamco voluptas sem molestias omnis eligendi.
            </p>
            <Link to="/">Read more</Link>
          </li>
          <li className="programme-list__item">
            <House />
            <h3>ONLINE TRANNING</h3>
            <p>
              Aperiam nascetur porro porro, netus harum repellat sed porttitor
              ullamco voluptas sem molestias omnis eligendi.
            </p>
            <Link to="/">Read more</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
