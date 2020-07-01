import React, { useEffect } from "react";

import { OtherRoutesHome, FacultiesSection } from "../components";

export default function Faculties() {
  useEffect(() => {
    document.title = "БГУИР | Факультеты";
  }, []);
  return (
    <>
      <OtherRoutesHome heading="Факультеты" />
      <FacultiesSection />
    </>
  );
}
