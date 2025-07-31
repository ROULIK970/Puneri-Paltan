import React from "react";
import galleryBanner from "../../assets/gallery-banner.jpg";
import bannerTitle from "../../assets/banner-title.png";
import galleryDescBanner from "../../assets/puneri-gallery-desk-banner-s11.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGallery } from "../../app/actions/gallery-action";
import { Link } from "react-router-dom";
import SlantedDesc from "../global/SlantedDesc/SlantedDesc";
import Loading from "../global/Loading/Loading";
import gallaryMobileBanner from "../../assets/puneri-gallery-mob-banner-s11.jpg"
import PuneriImg from "../../assets/puneri-gallery-2024.png";

export default function Gallery() {
  const dispatch = useDispatch();
  const gallery = useSelector((state) => state.gallery.gallery);
  const status = useSelector(state => state.gallery.loading)

  useEffect(() => {
    dispatch(getGallery());
  }, []);


if(status === "loading"){
  return <Loading/>
}

  return (
    status === "succeeded" && (
      <section>
        <div
          className="h-[700px] bg-center  block md:hidden "
          style={{ backgroundImage: `url(${gallaryMobileBanner})` }}
        ></div>
        <div
          className="h-[700px] bg-center bg-no-repeat relative hidden md:flex "
          style={{ backgroundImage: `url(${galleryBanner})` }}
        >
          <div className="ml-[16.66%] w-1/3 h-[700px] pb-[130px] text-center flex items-end relative">
            <img src={bannerTitle} alt="" />
            <h1 className="mt-[2rem] mb-[1.6rem] absolute top-[37%] text-[120px] text-white tracking-[16px] left-[50%] -translate-x-1/2">
              GALLERY
            </h1>
          </div>
          <div className="w-1/2 h-[700px] flex items-end">
            <img src={galleryDescBanner} alt="" />
          </div>
        </div>

        <div>
          <div className="lg:w-[970px] mx-auto py-[80px]">
            <ul className="text-center skew-x-[-15deg]">
              <li>
                <button className="bg-[#f40] py-[15px] px-[20px] text-[18px] text-white text-center">
                  SEASON 11
                </button>
              </li>
            </ul>
          </div>
          <div className="lg:w-[970px] md:w-[750px] justify-center mx-auto pb-[50px] grid grid-cols-1 md:grid-cols-2 lg:gap-6">
            {gallery.map((item, i) => (
              <Link key={i} to={`/gallery/${item.id}`}>
                <div>
                  <img className=" md:mx-auto" src={item.main_image} alt="" />
                  <SlantedDesc
                    name={item.name}
                    styles="md:text-[18px] py-[7px] px-[42px] h-[73px] sm:text-[14px]"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <Link to="/puneri-tv">
          <div
            className="py-[70px] bg-no-repeat cursor-pointer bg-cover relative transition-transform duration-500 hover:scale-110"
            style={{
              backgroundImage: `url(${PuneriImg})`,
              backgroundSize: "120%",
              backgroundPosition: "50% 30%",
            }}
          >
            <h4 className="z-999 text-white text-[26px] tracking-[1px] text-center">
              Puneri TV
            </h4>
          </div>
        </Link>
      </section>
    )
  );
}
