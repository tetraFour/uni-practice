import React from "react";

import "./style.sass";

const FacultySection = ({ fac }) => {
  return (
    <section className="faculty-section">
      <div className="container">
        <div className="teacher-content">
          <img src={fac.teacherPic} alt="" />
          <div className="teacher-content__description">
            <h2>{fac.teacherName}</h2>
            <h3>{fac.teacherDegree}</h3>
            <h4>
              <span>Адрес деканата:</span> {fac.teacherLocation}
            </h4>
            <h4>
              <span>Телефон(ы):</span>{" "}
              {fac.teacherPhone &&
                fac.teacherPhone.map((tel, id) => (
                  <a href={`tel:${tel}`} key={id}>
                    {tel}
                    {fac.teacherPhone.length > 1 ? " " : ""}
                  </a>
                ))}
            </h4>
            <h4>
              <span>E-mail:</span>{" "}
              <a href={`mailto:${fac.teacherEmail}`}>{fac.teacherEmail}</a>
            </h4>
            <a href={fac.teacherLink} className="teacher-content__phone">
              персональная страница
            </a>
          </div>
        </div>
        <div className="faculty-description">
          <ul className="faculty-description-list">
            {fac.facultyDescription &&
              fac.facultyDescription.map((paragraph, id) => (
                <li key={id} className="faculty-description-list__item">
                  {paragraph}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FacultySection;
