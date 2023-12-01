import { useState } from "react";
import { Link } from "react-router-dom";

function Footer() {
  const [f, setF] = useState(false);

  return (
    <footer className="py-20 bg-[#f4f0e8] md:flex justify-between box-border w-[100vw]">
      <div className="ml-12 md:ml-16">
        <Link to="/">
          <img className="w-24 lg:w-32" src="./img/logo_black.png" />
        </Link>
        <p className="lg:text-sm text-black/40 mt-6 text-xs">
          COPYRIGHTⒸDEERS ALL RIGHT RESERVED.
        </p>
        <label className="relative w-36 block cursor-pointer">
          <input type="checkbox" className="hidden" onChange={() => setF(!f)} />
          <div className="border-black/40 text-black/40 border w-full text-center py-1 mt-4">
            Family Site
            <svg
              className="inline ml-2 -translate-y-[2px]"
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="16"
              viewBox="0 0 512 512"
            >
              <path
                className="fill-black/40"
                d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"
              />
            </svg>
          </div>
          <div
            style={f ? { display: "block" } : { display: "none" }}
            className=" bg-[#f4f0e8] border-black/40 text-black/40 border-l border-r border-b w-36 text-center py-1 absolute top-full left-0"
          >
            <ul>
              <li className="py-1">
                <a className="hover:border-b border-black/40 mx-2" href="#">
                  Deers Store
                </a>
              </li>
              <li className="py-1">
                <a className="hover:border-b border-black/40 mx-2" href="#">
                  Deers Factory
                </a>
              </li>
            </ul>
          </div>
        </label>
      </div>
      <ul className="lg:gap-24 font-semibold md:text-xl px-12 md:ml-0 mt-8 md:mt-0 flex md:block text-sm mr-16 md:text-end justify-between w-full">
        <li className="mb-2">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="mb-2">
          <Link to="/with">WITH</Link>
        </li>
        <li className="mb-2">
          <Link to="/search">SEARCH</Link>
        </li>
        <li>
          <Link to="/ci">CI</Link>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
