import React from "react";

import { Link } from "react-router-dom";

import players from "../../assets/images/players.jpg";
import { ReactComponent as Strips } from "../../assets/images/strips.svg";

import "./style.sass";

const Study = () => {
  return (
    <section className="study-section">
      <div className="container">
        <div className="preview-block">
          <span>The Best Course</span>
          <h2>
            Fields of <span>Study</span>
          </h2>
          <Strips />
        </div>
        <ul className="study-list">
          <li className="study-list__item">
            <img src={players} alt="игроки" />
            <h3>Human Medicine</h3>
            <p>
              Exercitationem quos. Unde corrupti tortor eros eiusmod risus,
              cursus venenatis sodales ipsam.
            </p>
            <Link to="/">Apply Now</Link>
          </li>
          <li className="study-list__item">
            <img src={players} alt="игроки" />
            <h3>Engineering</h3>
            <p>
              Exercitationem quos. Unde corrupti tortor eros eiusmod risus,
              cursus venenatis sodales ipsam.
            </p>
            <Link to="/">Apply Now</Link>
          </li>
          <li className="study-list__item">
            <img src={players} alt="игроки" />
            <h3>Humanities</h3>
            <p>
              Exercitationem quos. Unde corrupti tortor eros eiusmod risus,
              cursus venenatis sodales ipsam.
            </p>
            <Link to="/">Apply Now</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Study;
