import React, { useState, useEffect } from "react";

import "./style.sass";

export default function Home() {
  useEffect(() => {
    const localData = localStorage.getItem("isSend");
    setIsSend(localData);
  }, []);
  const [isSend, setIsSend] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsSend(true);
    localStorage.setItem("isSend", true);
  };
  return (
    <>
      <section className="home-section">
        <div className="container">
          <div className="introduce">
            <h1>БГУИР - территория больших возможностей</h1>
          </div>
          <div className="form-info">
            {isSend ? (
              <h3>
                В ближайшее время мы вам отправим дополнительную информацию!
              </h3>
            ) : (
              <>
                <h2>Для получения дополнительной информации заполните форму</h2>
                <form>
                  <input type="text" placeholder="Имя" />
                  <input type="text" placeholder="Фамилия" />
                  <input
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    placeholder="email"
                  />
                  <input
                    type="tel"
                    pattern="+[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    placeholder="телефон"
                  />
                  <button type="submit" onClick={handleClick}>
                    отправить
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
