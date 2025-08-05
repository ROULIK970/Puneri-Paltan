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
        className="h-[100px] flex mx-auto w-full lg:w-[95%] relative overflow-hidden"
        style={{
          boxShadow:
            "inset 0 0 0 rgb(255 255 255 / 15%), 0 1px 5px rgb(0 0 0 / 8%)",
        }}
      >
        <div className="absolute inset-0 bg-[#0000004d] transform lg:skew-x-[-15deg] origin-top-left transition-transform duration-500 ease-in-out"></div>

        <div className="flex items-center justify-between w-full relative z-10 px-4 lg:px-0">
 
          <div className="lg:hidden flex items-center">
            {openNavElements ? (
              <IoMdClose
                className="text-[40px] text-[#f40] cursor-pointer"
                onClick={() => setOpenNavElements(false)}
              />
            ) : (
              <GiHamburgerMenu
                className="text-[40px] text-[#f40] cursor-pointer"
                onClick={() => setOpenNavElements(true)}
              />
            )}
          </div>

          {/* Logo */}
          <div className="flex-1 text-center lg:text-left lg:flex-none lg:ml-[80px]">
            <NavLink to="/">
              <img
                className="w-[80px] md:w-[120px] inline-block"
                src={puneriPaltanLogo}
                alt="puneri paltan"
              />
            </NavLink>
          </div>

         
          <ul className="hidden lg:flex justify-center items-center flex-1 text-white">
            {navRoutes.map((route, i) => (
              <NavLink key={i} to={route.to}>
                <p className="py-[15px] font-[600] text-[12px] italic px-[10px] hover:text-[#ff7500] transition-all duration-700 ease-in-out">
                  {route.name}
                </p>
              </NavLink>
            ))}
          </ul>
        </div>
      </nav>

     
      {openNavElements && (
        <div className="bg-[#000] mx-auto w-full lg:w-[95%] px-[15px] lg:hidden">
          <ul>
            {navRoutes.map((route, i) => (
              <NavLink
                key={i}
                to={route.to}
                onClick={() => setOpenNavElements(false)}
              >
                <li className="h-[60px] text-white py-[15px] px-[16px] flex justify-center items-center italic font-[600] hover:text-[#ff7500] transition-all duration-700 ease-in-out border-b border-gray-700 last:border-b-0">
                  {route.name}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
