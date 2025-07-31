import React from "react";
import paltanWorldBanner from "../../assets/paltan-world-banner-desktop-s11.png";
import puneriTV from '../../assets/puneri-tv-2024.png'
import puneriGallery from "../../assets/puneri-gallery-2024.png";
import { Link } from "react-router-dom";

export default function PaltanWorld() {
  return (
    <section>
      <div className="relative mx-auto">
        <img className="lg:h-auto min-h-[281px] min-w-[225px]" src={paltanWorldBanner} alt="" />
      </div>
      <div className="mx-auto flex lg:flex-row flex-col">
        <Link
          style={{ backgroundImage: `url(${puneriTV})` }}
          className="h-[670px] bg-no-repeat bg-center bg-cover lg:w-1/2 "
          to="/puneri-tv"
        >
          <div>
            <h3 className="text-white text-[70px] tracking-[6px] lg:h-[670px]  flex justify-center items-center">
              PUNERI TV
            </h3>
          </div>
        </Link>

        <Link
          style={{ backgroundImage: `url(${puneriGallery})` }}
          className="lg:h-[670px] bg-no-repeat bg-center bg-cover lg:w-1/2 "
          to="/gallery"
        >
          <div>
            <h3 className="text-white text-[70px] tracking-[6px] h-[670px]  flex justify-center items-center">
              GALLERY
            </h3>
          </div>
        </Link>
      </div>
    </section>
  );
}
