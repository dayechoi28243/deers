import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header({ menuBtnClick }) {
  const [scrollMove, setScrollMove] = useState(false);
  const [nowSc, setNowSc] = useState(0);

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollMove = () => {
      const scrollY = window.pageYOffset;

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      // 스크롤 올렸을 때: true - 헤더 숨김, 스크롤 올렸을 때 : false - 헤더보임
      setScrollMove(scrollY > lastScrollY ? true : false);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      setNowSc(window.scrollY);
      console.log(nowSc);

      if (!ticking) {
        window.requestAnimationFrame(updateScrollMove);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll);
    //   console.log(scrollMove);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollMove]);

  return (
    <header
      style={Object.assign(
        scrollMove ? { top: "-180px" } : { top: "0px" },
        nowSc > 500
          ? {
              backgroundColor: "rgba(255,255,255,0.8)",
              boxShadow: "0 0 15px -5px rgba(0,0,0,0.2)",
              backdropFilter: "blur(7px)",
            }
          : { backgroundColor: "transparent" }
      )}
      className="w-full fixed top-0 left-0 h-20 md:h-40 flex items-center justify-between z-10 transition-all duration-500"
    >
      <div className="w-32 ml-8 md:ml-16">
        <Link to="/">
          <img className="w-full" src="./img/logo_black.png" />
        </Link>
      </div>
      <div
        onClick={menuBtnClick}
        className="flex flex-col justify-between h-7 mr-8 md:mr-16 group cursor-pointer"
      >
        <div className="w-8 h-[5px] bg-black"></div>
        <div className="group-hover:w-8 w-5 h-[5px] bg-black transition-all"></div>
        <div className="w-8 h-[5px] bg-black"></div>
      </div>
      <ul className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 gap-16 font-semibold text-[#888] hidden md:flex lg:gap-24">
        <li>
          <Link to="/about">ABOUT</Link>
        </li>
        <li>
          <Link to="/with">WITH</Link>
        </li>
        <li>
          <Link to="/search">SEARCH</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
