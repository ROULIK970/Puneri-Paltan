import React, { useEffect, useState, useRef } from "react";
import "./Header.css";
import puneriPaltanLogo from '../../../assets/puneri-paltan-logo.gif'
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const [openNavElements, setOpenNavElements] = useState(false)
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);

  const navRoutes = [
    {
      name: "Players",
      to: "/players",
    },

    {
      name: "Paltan World",
      to: "/paltan-world",
    },
    {
      name: "Tickets",
      to: "https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current) {
        setShowNav(false);
      } else if (currentScroll < lastScroll.current) {
        setShowNav(true);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //set lastcroll to 0
  //currenscroll to window.scrollY
  //if currentScroll>lastscroll setshownav-->false
  //else showNav-->true

  return (
    <header className={`navbar ${showNav ? "nav-down" : "nav-up"}`}>
      <nav
        className="bg-[#0000004d] h-[100px] flex mx-auto w-[95%] skew-x-[-15deg] text-[#333] relative"
        style={{
          boxShadow:
            "inset 0 0 0 rgb(255 255 255 / 15%), 0 1px 5px rgb(0 0 0 / 8%)",
        }}
      >
        {openNavElements ? (
          <IoMdClose
            className="lg:hidden mt-[30px] me-[15px] mb-[8px] skew-x-[15deg] py-[9px] px-[10px] text-[80px] opacity-100 text-[#f40] cursor-pointer transition-all .5s ease-out sm:absolute sm:right"
            onClick={() => setOpenNavElements(false)}
          />
        ) : (
          <GiHamburgerMenu
            className="lg:hidden mt-[30px] me-[15px] mb-[8px] skew-x-[15deg] py-[9px] px-[10px] text-[80px] opacity-100 text-[#f40] cursor-pointer sm:absolute sm:right"
            onClick={() => setOpenNavElements(true)}
          />
        )}

        <div className="ml-[80px]">
          <NavLink to="/">
            <img
              className="skew-x-[15deg]  w-[80px] md:w-[120px] absolute right-0 lg:left-0"
              src={puneriPaltanLogo}
              alt="puneri paltan"
            />
          </NavLink>
        </div>
        <ul className="hidden lg:flex justify-center items-center w-[100%] text-white skew-x-[18deg]">
          {navRoutes.map((route, i) => (
            <NavLink key={i} to={route.to}>
              <p className="py-[15px] font-[600] text-[12px] italic px-[10px] hover:text-[#ff7500] transition-all duration-700 ease-in-out">
                {route.name}
              </p>
            </NavLink>
          ))}
        </ul>
      </nav>
      {openNavElements && (
        <div className="bg-[#000] mx-auto w-[95%] px-[15px] ">
          <ul>
            {navRoutes.map((route, i) => (
              <NavLink key={i} to={route.to}>
                <p className="lg:hidden h-[60px] text-white py-[15px] px-[16px] flex justify-center items-center italic font-[600] hover:text-[#ff7500] transition-all duration-700 ease-in-out">
                  {route.name}
                </p>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
