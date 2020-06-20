import React from "react";

import "./style.sass";
import { ReactComponent as Strips } from "../../assets/images/strips.svg";
import { ReactComponent as Plane } from "../../assets/images/plane.svg";
import { ReactComponent as Exam } from "../../assets/images/exam.svg";
import { ReactComponent as Money } from "../../assets/images/money.svg";
import { ReactComponent as Language } from "../../assets/images/language.svg";

const Requirements = () => {
  return (
    <section className="require-section">
      <div className="container">
        <div className="preview-block">
          <span>The Best Benifits</span>
          <h2>
            Requirements of <span>Join</span>
          </h2>
          <Strips />
        </div>
        <ul className="require-list">
          <li className="require-list__item">
            <Plane />
            <p>Visa and Residence</p>
          </li>
          <li className="require-list__item">
            <Exam />
            <p>Proof of Financial</p>
          </li>
          <li className="require-list__item">
            <Money />
            <p>Language Skills</p>
          </li>
          <li className="require-list__item">
            <Language />

            <p>University Entrance</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Requirements;
