import React from "react";

import "./style.sass";
import { ReactComponent as ArrowSuccess } from "../../assets/images/arrow-success.svg";

export default function JoinUs() {
  return (
    <section className="join-us-section">
      <div className="container">
        <h2>
          Присоединяйтесь к нашему <span>УНИВЕРСИТЕТУ</span>
        </h2>
        <p>Почему тебе следует присоединиться к нам? БГУИР - это:</p>
        <ul>
          <li>
            <ArrowSuccess /> территория больших возможностей
          </li>
          <li>
            <ArrowSuccess /> лучшие преподаватели
          </li>
          <li>
            <ArrowSuccess /> активная научная деятельность
          </li>
          <li>
            <ArrowSuccess /> высокие технологии в обучении
          </li>
          <li>
            <ArrowSuccess /> перспективное будущее
          </li>
          <li>
            <ArrowSuccess /> социальные гарантии
          </li>
          <li>
            <ArrowSuccess /> здоровый образ жизни
          </li>
          <li>
            <ArrowSuccess /> яркая студенческая жизнь
          </li>
        </ul>
      </div>
    </section>
  );
}
