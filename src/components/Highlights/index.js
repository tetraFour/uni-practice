import React from "react";

import { Link } from "react-router-dom";

import { ReactComponent as Strips } from "../../assets/images/strips.svg";

import "./style.sass";

const Highlights = () => {
  return (
    <section className="highlights-section">
      <div className="container">
        <div className="preview-block">
          <span>The Best Future</span>
          <h2>
            Our <span>Highlights</span>
          </h2>
          <Strips />
        </div>
        <ul className="highlights-list">
          <li className="highlights-list__item">
            <Link to="/">Skilled Faculty</Link>
            <p>
              Metus rutrum netus alias sint, minima sociosqu rutrum? Potenti
              integer facere risus maxime, ut cumque vehicula rem laudantium.
            </p>
          </li>
          <li className="highlights-list__item">
            <Link to="/">Modern Infrastructure</Link>
            <p>
              Metus rutrum netus alias sint, minima sociosqu rutrum? Potenti
              integer facere risus maxime, ut cumque vehicula rem laudantium.
            </p>
          </li>
          <li className="highlights-list__item">
            <Link to="/">Good Environment</Link>
            <p>
              Metus rutrum netus alias sint, minima sociosqu rutrum? Potenti
              integer facere risus maxime, ut cumque vehicula rem laudantium.
            </p>
          </li>
          <li className="highlights-list__item">
            <Link to="/">Extra Activities</Link>
            <p>
              Metus rutrum netus alias sint, minima sociosqu rutrum? Potenti
              integer facere risus maxime, ut cumque vehicula rem laudantium.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
