import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Preloader } from "../../components";

import facultiesData from "../../faculties.json";

import "./style.sass";

const FacultiesSection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(false);
    setData([...facultiesData]);
    setIsLoading(true);
  };
  return (
    <section className="faculties-links-section">
      <div className="container">
        <ul className="faculties-links">
          {isLoading ? (
            <>
              {data.map((route) => (
                <li className="faculties-links__item" key={route.id}>
                  <img src={route.logoUrl} alt="логотип" />
                  <div className="faculties-description">
                    <Link to={`/faculties/${route.id}`}>
                      {route.facultyName}
                    </Link>
                    {route.description.map((description, id) => (
                      <p key={id}>{description}</p>
                    ))}
                  </div>
                </li>
              ))}
            </>
          ) : (
            <>
              <Preloader />
            </>
          )}
        </ul>
      </div>
    </section>
  );
};

export default FacultiesSection;
