import React, { useEffect } from "react";
import {
  Home,
  Programme,
  JoinUs,
  Highlights,
  Study,
  Requirements,
  AdvicesAndHelps,
  News,
} from "../components";

const Root = () => {
  useEffect(() => {
    document.title = "БГУИР | Главная";
  }, []);
  return (
    <>
      <Home />
      <Programme />
      <JoinUs />
      <Highlights />
      <Study />
      <Requirements />
      <AdvicesAndHelps />
      <News />
    </>
  );
};

export default Root;
