import React from "react";

import Programme from "./../Programme";
import JoinUs from "./../JoinUs";
import Highlights from "./../Highlights";
import Study from "./../Study";
import Requirements from "./../Requirements";
import AdvicesAndHelps from "./../AdvicesAndHelps";

import "./style.sass";

export default function Home() {
  return (
    <>
      <section className="home-section">
        <div className="container">
          <div className="introduce">
            <span>Non Stop Solution for</span>
            <h1>Education Needs Complete Solutions</h1>
          </div>
          <div className="form-info">
            <form>
              <input type="text" placeholder="имя" />
              <input type="email" placeholder="email" />
              <input type="text" placeholder="имя" />
              <input type="text" placeholder="имя" />
              <button type="submit">отправить</button>
            </form>
          </div>
        </div>
      </section>
      <Programme />
      <JoinUs />
      <Highlights />
      <Study />
      <Requirements />
      <AdvicesAndHelps />
    </>
  );
}
