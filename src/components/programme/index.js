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
          <span>Университет и</span>
          <h2>
            Нашы <span>Специальности</span>
          </h2>
          <Strips />
        </div>
        <ul className="programme-list">
          <li className="programme-list__item">
            <House />
            <h3>Радиотехники и электроники</h3>
            <Link to="/faculties/3">Узнать больше</Link>
          </li>
          <li className="programme-list__item">
            <House />
            <h3>Инженерно-экономический</h3>
            <Link to="/faculties/6">Узнать больше</Link>
          </li>
          <li className="programme-list__item">
            <House />
            <h3>Компьютерного проектирования</h3>
            <Link to="/faculties/1">Узнать больше</Link>
          </li>
          <li className="programme-list__item">
            <House />
            <h3>Компьютерных систем и сетей</h3>
            <Link to="/faculties/4">Узнать больше</Link>
          </li>
          <li className="programme-list__item">
            <House />
            <h3>Инфокоммуникаций</h3>
            <Link to="/faculties/5">Узнать больше</Link>
          </li>
          <li className="programme-list__item">
            <House />
            <h3>Информационных технологий и управления</h3>
            <Link to="/faculties/2">Узнать больше</Link>
          </li>
        </ul>
        <Link to="/faculties" className="link-to-faculties">
          больше факультетов
        </Link>
      </div>
    </section>
  );
}
