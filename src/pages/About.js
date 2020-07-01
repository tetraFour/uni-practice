import React, { useEffect } from "react";
import { OtherRoutesHome } from "../components";

export default function About() {
  useEffect(() => {
    document.title = "БГУИР | о нас";
  }, []);
  return (
    <div>
      <OtherRoutesHome heading="О нас" />
    </div>
  );
}
