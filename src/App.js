import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";

//components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";

function App() {
  const [menuBtn, setMenuBtn] = useState(false);
  const menuBtnClick = () => {
    setMenuBtn(!menuBtn);
  };

  return (
    <div className="overflow-x-hidden">
      <BrowserRouter>
        <Header menuBtnClick={menuBtnClick} />
        <Menu menuBtnClick={menuBtnClick} menuBtn={menuBtn} />
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Section1 />
                <Section2 />
                <Section3 />
              </main>
            }
          ></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Contact />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
