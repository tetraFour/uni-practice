import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import dataFacs from "../faculty.json";

import { OtherRoutesHome, FacultySection } from "../components";

const Faculty = () => {
  let { id } = useParams();
  const [fac, setFac] = useState({});
  useEffect(() => {
    const currentFaculty = dataFacs.filter((elm) => elm.id === id);
    console.log(currentFaculty);
    document.title = `БГУИР | ${currentFaculty[0].facultyName}`;
    window.scrollTo(0, 0);
    setFac(currentFaculty[0]);
  }, [id]);

  return (
    <>
      <OtherRoutesHome heading={fac.facultyName} />
      <FacultySection fac={fac} />
    </>
  );
};

export default Faculty;
