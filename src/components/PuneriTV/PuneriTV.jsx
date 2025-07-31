import React from "react";
import puneriTVBanner from "../../assets/puneri-tv-banner-bg.jpg";
import bannerTitleBg from "../../assets/banner-title.png";
import puneriTvDescBanner from "../../assets/puneri-tv-desc-banner-s11.png";
import { useDispatch, useSelector } from "react-redux";
import { getSeasonTVList } from "../../app/actions/puneriTV-action";
import { useEffect } from "react";
import SlantedDesc from "../global/SlantedDesc/SlantedDesc";
import Loading from "../global/Loading/Loading";
import playBtn from "../../assets/play.png";
import PuneriTvModal from "../global/PuneriTvModal/PuneriTvModal";
import puneriTVMobileBanner from "../../assets/puneri-tv-mob-banner-s11.jpg"
import { useState } from "react";
import galleryImg from "../../assets/puneri-gallery-2024.png";
import { Link } from "react-router-dom";

export default function PuneriTV() {
  const dispatch = useDispatch();
  const tvList = useSelector((state) => state.puneriTV.tvList);
  const status = useSelector((state) => state.puneriTV.loading);
  const [showModal, setShowModal] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    dispatch(getSeasonTVList(6));
  }, []);

  return (
    <section>
      <div
        className="bg-center bg-no-repeat h-[700px] relative hidden sm:flex"
        style={{ backgroundImage: `url(${puneriTVBanner})` }}
      >
        <div className="h-[700px] text-center pb-[130px] flex items-end w-1/2 justify-center">
          <img className="relative" src={bannerTitleBg} alt="" />
          <h1 className="text-white absolute left-50% text-[70px] lg:text-[120px]">
            PUNERI <br /> TV
          </h1>
        </div>
        <div className="w-1/3 h-[700px] hidden lg:flex items-end">
          <img className=" " src={puneriTvDescBanner} alt="" />
        </div>
      </div>
      <div>
        <img src={puneriTVMobileBanner} className="block sm:hidden" alt="" />
      </div>

      {status === "loading" && <Loading />}
      {status === "succeeded" && (
        <div className="lg:w-[970px] mx-auto md:w-[750px]">
          <div className="py-[3em]">
            <div className=" mx-auto px-[15px]">
              <div className="px-[15px]">
                <ul className="text-center skew-x-[-15deg] flex justify-center gap-4">
                  <li className="pr-[7px]">
                    <button
                      className="py-[15px] px-[20px] text-[18px] text-white bg-[#f70]"
                      onClick={() => dispatch(getSeasonTVList(6))}
                    >
                      Season 10
                    </button>
                  </li>
                  <li className="pr-[7px] ">
                    <button
                      className="py-[15px] px-[20px] text-[18px] text-white bg-[#f70]"
                      onClick={() => dispatch(getSeasonTVList(7))}
                    >
                      Season 11
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 grid-cols-1  px-4 ">
            {tvList?.map((singleTv) => (
              <div
                key={singleTv.id}
                className="w-auto h-auto px-[15px] relative cursor-pointer"
                onClick={() => {
                  setShowModal(true);
                  setSelectedVideo(singleTv.url);
                }}
              >
                <img
                  src={`https://img.youtube.com/vi/${singleTv?.url}/hqdefault.jpg`}
                  alt={singleTv.name}
                  className="w-full sm:mb-[0px] mb-[30px]"
                />
                <img
                  src={playBtn}
                  className="absolute sm:top-[30%] sm:right-[40%] top-[20%] right-[40%]"
                  alt=""
                />
                <SlantedDesc
                  name={singleTv.name}
                  styles="md:text-[18px] py-[7px] px-[42px] h-[73px] sm:text-[14px]"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {showModal && (
        <PuneriTvModal
          closeModal={closeModal}
          showModal={showModal}
          selectedVideo={selectedVideo}
        />
      )}
      <Link to="/gallery">
        <div
          className="py-[70px] bg-no-repeat cursor-pointer bg-cover relative transition-transform duration-500 hover:scale-110"
          style={{
            backgroundImage: `url(${galleryImg})`,
            backgroundSize: "120%",
            backgroundPosition: "50% 30%",
          }}
        >
          <h4 className="z-999 text-white text-[26px] tracking-[1px] text-center">
            GALLERY
          </h4>
        </div>
      </Link>
    </section>
  );
}
