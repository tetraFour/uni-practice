import React from "react";

import { ReactComponent as Strips } from "../../assets/images/strips.svg";

import "./style.sass";

const Highlights = () => {
  return (
    <section className="highlights-section">
      <div className="container">
        <div className="preview-block">
          <span>БГУИР</span>
          <h2>
            И наша <span>История</span>
          </h2>
          <Strips />
        </div>
        <ul className="highlights-list">
          <li className="highlights-list__item">
            <a href="https://www.bsuir.by/ru/istoriya">1964 год</a>
            <p>
              Постановлением Совета Министров БССР N 78 от 27 февраля 1964 года
              15 марта в г. Минске открыт Минский радиотехнический институт
              (МРТИ).
            </p>
          </li>
          <li className="highlights-list__item">
            <a href="https://www.bsuir.by/ru/istoriya">1978 год</a>
            <p>
              вузу присуждено 1-е место и переходящее Красное Знамя Министерства
              высшего и среднего специального образования СССР и ЦК профсоюза
              работников просвещения, высшей школы и научных учреждений за
              успехи в работе.
            </p>
          </li>
          <li className="highlights-list__item">
            <a href="https://www.bsuir.by/ru/istoriya">2004 год</a>
            <p>
              Решением Коллегии Министерства образования Республики Беларусь
              университет признан соответствующим требованиям, предъявляемым к
              статусу ведущего вуза в отрасли.
            </p>
          </li>
          <li className="highlights-list__item">
            <a href="https://www.bsuir.by/ru/istoriya">2012 год</a>
            <p>
              Постановлением Совета Министров Республики Беларусь N55 от 19
              января 2012 года БГУИР присуждена Премия Правительства Республики
              Беларусь за достижения в области качества по итогам 2011 года.
            </p>
          </li>
          <li className="highlights-list__item">
            <a href="https://www.bsuir.by/ru/istoriya">2014 год</a>
            <p>
              Указом Президента Республики Беларусь от N 299 27 июня 2014 года
              БГУИР стал победителем по итогам 2013 года среди организаций,
              осуществляющих научные исследования и разработки, и занесен на
              Республиканскую доску Почета.
            </p>
          </li>
          <li className="highlights-list__item">
            <a href="https://www.bsuir.by/ru/istoriya">2017 год</a>
            <p>
              Указом Президента Республики Беларусь от N 222 23 июня 2017 года
              БГУИР определен победителем по итогам 2016 года среди организаций,
              осуществляющих научные исследования и разработки и занесен на
              Республиканскую доску Почета в номинации "Наука"
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Highlights;
