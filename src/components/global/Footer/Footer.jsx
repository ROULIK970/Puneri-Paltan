import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import digitalLatte from '../../../assets/dl_logo.png'

export default function Footer() {

const socials = [
  {
    to: "https://www.facebook.com/puneripaltan/",
    Icon: <FaFacebookF />,
  },
  {
    to: "https://twitter.com/PuneriPaltan?ref_src:twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
    Icon: <FaTwitter />,
  },
  {
    to: "https://instagram.com/puneripaltanofficial?utm_source=ig_profile_share&igshid=m2wsuxrbs1f8",
    Icon: <FaInstagram />,
  },
  {
    to: "https://www.youtube.com/c/PuneriPaltan",
    Icon: <FaYoutube />,
  },
];

  return (
    <footer className="bg-black py-[20px]">
      <div className="w-auto lg:w-[970px] mx-auto px-[15px] flex lg:flex-row flex-col items-center  justify-between">
        <div className="mt-[10px] px-[15px] text-white text-[18px] my-[0.5rem] leading-[110%] font-[400]">
          <h6>Copyright © 2025 Puneri Paltan</h6>
        </div>
        <div className="px-[15px] flex">
          {socials.map((social, i) => (
            <a
              key={i}
              href={social.to}
              className="bg-[#444452] text-[22px] p-[15px] mr-[15px] w-[50px] h-[50px] rounded-[25px]"
            >
              {social.Icon}
            </a>
          ))}
        </div>
        <div className="px-[15px]">
          <a href="https://www.digitallatte.in/">
            <div className="flex justify-end items-center mt-[10px]">
              <div className="flex flex-col items-end">
                <p className="bg-[#ff7500] text-white py-[2px] px-[8px] rounded-[3px] text-[11px] tracking-[2px] mb-[3px]">
                  MANAGED
                </p>
                <p className="bg-[#ff7500] text-white py-[2px] px-[8px] rounded-[3px] text-[11px] tracking-[2px] mb-[3px]">
                  BY
                </p>
              </div>
              <img
                className="w-[120px] ml-[5px]"
                src={digitalLatte}
                alt="Digital Latte"
              />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
}
