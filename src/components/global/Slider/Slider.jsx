import React from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export function SimpleSlider({ slidesToShow }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const players = useSelector((state) => state.player.players);
  const error = useSelector((state) => state.player.error);
  const status = useSelector((state) => state.player.loading);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          position: "absolute",
          bottom: "15%",
          right: "10px",
          left: "auto",
          top: "auto",
          width: "45px",
          height: "35px",
          borderRadius: "25px",
          zIndex: "999",
          color: "#000",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          position: "absolute",
          bottom: "15%",
          right: "90px",
          left: "auto",
          top: "auto",
          width: "45px",
          height: "35px",
          borderRadius: "25px",
          zIndex: "999",
          color: "#000",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "black",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // < 1024px (lg)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // < 768px (md)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    afterChange: (index) => setCurrentSlide(index),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") {
    return <p className="text-center">{error}</p>;
  }

  return (
    <Slider {...settings} className="h-[620px]">
      {status === "succeded" &&
        players?.map((player, index) => {
          const centerIndex =
            (currentSlide + Math.floor(slidesToShow / 2)) % players.length;
          const isCenter = index === centerIndex;

          return (
            <div
              className={`pb-4 z-9 transition-transform ease-in-out duration-300 h-[620px]  ${
                isCenter ? "opacity-100 scale-95" : "opacity-40 scale-75"
              }`}
              style={{ transform: isCenter ? "scale(0.95)" : "scale(0.75)" }}
            >
              <img
                src={player.profile_image}
                alt="Lava"
                className="h-auto w-full object-contain relative sm:h-[full] "
              />
              <h3
                className={`mb-3 absolute text-center font-[700] text-white ${
                  isCenter
                    ? "bottom-[30%] text-5xl left-[0px]"
                    : "bottom-[60%] opacity-100 text-[22px] left-[60px]"
                }`}
              >
                {player.name}
              </h3>
              {isCenter && (
                <h5 className="mb-3 text-xl absolute bottom-[20%] z-[9999] left-[80px]">
                  {player.position}
                </h5>
              )}
            </div>
          );
        })}
    </Slider>
  );
}

export function OtherPlayersSlider({ slidesToShow }) {
  const players = useSelector((state) => state.player.players);
  const player = useSelector((state) => state.player.player);
  const error = useSelector((state) => state.player.error);
  const status = useSelector((state) => state.player.loading);

  function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          position: "absolute",
          right: "-40px",
          left: "auto",
          top: "50%",
          width: "45px",
          height: "35px",
          borderRadius: "25px",
          zIndex: "999",
          color: "#000",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f40",
          padding: "12px 30px",
        }}
        onClick={onClick}
      />
    );
  }

  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          position: "absolute",
          right: "-40px",
          left: "-40px",
          top: "50%",
          width: "45px",
          height: "35px",
          borderRadius: "25px",
          zIndex: "999",
          color: "#000",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f40",
          padding: "12px 30px",
        }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // < 1024px (lg)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // < 768px (md)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };



  if (status === "loading") {
    return <Loading />;
  }
  if (status === "failed") {
    return <p className="text-center">{error}</p>;
  }
  return (
    <Slider {...settings} className="h-[620px]">
      {status === "succeded" &&
        players
          ?.filter((p) => p.id !== player.id)
          ?.map((playerItem) => {

            if (status === "loading") return <Loading />




            return (
              <Link to={`/players/${playerItem.id}`}>
                <div className="pb-4  z-9 relative transition-transform ease-in-out duration-300 ">
                  <div className="absolute bg-[#ff7500] py-[18px] px-[10px] left-0 top-0">
                    <p>{playerItem.id}</p>
                  </div>

                  <div className="flex items-end">
                    <div className="w-[70%] h-screen skew-x-[5deg] flex flex-col items-center justify-center">
                      <h3 className="text-white text-[30px] tracking-[4px] text-center">{playerItem.name}</h3>
                      <h5 className="text-[#ff7500] text-[20px] tracking-[2px] text-center">{player.position}</h5>
                    </div>
                    <div className="w-[30%] flex items-end skew-x-[5deg]">
                      <img src={playerItem.full_image} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
    </Slider>
  );
}
