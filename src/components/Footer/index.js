import React from "react";

import { ReactComponent as Strips } from "../../assets/images/strips.svg";
import { ReactComponent as Phone } from "../../assets/images/phone.svg";
import { ReactComponent as Mail } from "../../assets/images/mail-icon.svg";
import { ReactComponent as Location } from "../../assets/images/location-icon.svg";

import "./style.sass";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="preview-block">
          <span>Контакты</span>
          <h2>
            Связаться с <span>Нами</span>
          </h2>
          <Strips />
        </div>
        <ul className="contacts-list">
          <li className="contacts-list__item">
            <Phone />
            <h4>Телефон</h4>
            <a href="tel:37517-270-20-33">+375 17 270-20-33</a>
          </li>
          <li className="contacts-list__item">
            <Mail />
            <h4>Электронная почта</h4>
            <a href="mailto:kanc@bsuir.by">kanc@bsuir.by</a>
          </li>
          <li className="contacts-list__item">
            <Location />
            <h4>Адрес</h4>
            <p>220013, Республика Беларусь, г. Минск, ул. П.Бровки, 6.</p>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
