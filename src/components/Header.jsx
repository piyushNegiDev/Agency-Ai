import { useState } from "react";
import assets from "../assets/assets";

export default function Header({ contactRef }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header
      className="
      px-5 mx-auto
        sm:px-10
        md:px-30
        flex z-10
        py-5
        bg-white/20
        justify-between items-center sticky top-0 backdrop-blur-md
      "
    >
      <img
        src={assets.logo}
        alt=""
        className="
          h-6
          sm:h-8
        "
      />
      <ul
        className="
          hidden
          text-gray-700 font-medium
          gap-3
          lg:flex lg:gap-5
        "
      >
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#ourWork">Our work</a>
        </li>
        <li>
          <a href="#contactUs">Contact Us</a>
        </li>
      </ul>

      <div
        className="
          flex
          items-center gap-2
          sm:gap-4
        "
      >
        <button
          className="
            flex
            h-6 w-6
            border border-black rounded-full
            justify-center items-center
            sm:h-10 sm:w-10
          "
        >
          <img
            src={assets.moon_icon}
            alt=""
            className="
              h-4
              sm:h-6
            "
          />
        </button>

        <button
          onClick={() => {
            contactRef.current.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="
            hidden
            px-4 py-2
            text-white
            bg-blue-500
            rounded-2xl
            gap-5
            lg:flex
          "
        >
          Connect{" "}
          <img
            src={assets.arrow_icon}
            alt=""
            className="

            "
          />
        </button>
        <button
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
          className="
            lg:hidden
          "
        >
          <img
            src={assets.menu_icon}
            alt=""
            className="
              w-10
            "
          />
        </button>
      </div>

      <div
        className={`
          flex overflow-hidden flex-col
          h-screen
          text-white
          bg-blue-500
          transition-all
          absolute top-0
          right-0
          lg:hidden
          ${showMenu ? "sm:w-60 w-45 px-10" : "w-0 px-0"}
        `}
      >
        <button
          onClick={() => {
            setShowMenu((prev) => !prev);
          }}
          className="
            ml-auto
            text-4xl
          "
        >
          &#215;
        </button>
        <ul
          className="
            flex flex-col
            font-medium
            gap-4
          "
        >
          <li>
            <a
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
              href="#services"
            >
              Services
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
              href="#ourWork"
            >
              Our work
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                setShowMenu((prev) => !prev);
              }}
              href="#contactUs"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
