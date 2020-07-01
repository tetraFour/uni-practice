import React from "react";

import "./style.sass";
import { ReactComponent as Strips } from "../../assets/images/strips.svg";
import { ReactComponent as Exam } from "../../assets/images/exam.svg";
import { ReactComponent as Language } from "../../assets/images/language.svg";

const Requirements = () => {
  return (
    <section className="require-section">
      <div className="container">
        <div className="preview-block">
          <span>Наши преимущества и </span>
          <h2>
            Требования к <span>поступлению</span>
          </h2>
          <Strips />
        </div>
        <ul className="require-list">
          <li className="require-list__item">
            <Exam />
            <p>централизованное тестирование</p>
          </li>

          <li className="require-list__item">
            <Language />

            <p>аттестат о среднем образовании</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Requirements;
