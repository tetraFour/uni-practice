import React from "react";

import { ReactComponent as Strips } from "../../assets/images/strips.svg";

import "./style.sass";

const News = () => {
  return (
    <section className="news-section">
      <div className="container">
        <div className="preview-block">
          <span>Ближайшие</span>
          <h2>
            Новости и <span>События</span>
          </h2>
          <Strips />
        </div>
        <ul className="news-list">
          <li className="news-list__item">
            <h4>ЦТ</h4>
            <h5>Июнь 25, 2020</h5>
            <p>Централизованное тестирование по белорусскому языку</p>
          </li>
          <li className="news-list__item">
            <h4>ЦТ</h4>
            <h5>Июнь 26, 2020</h5>
            <p>Централизованное тестирование по русскому языку</p>
          </li>
          <li className="news-list__item">
            <h4>ЦТ</h4>
            <h5>Июнь 27, 2020</h5>
            <p>Централизованное тестирование по русскому языку</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default News;
