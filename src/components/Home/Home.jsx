import React, { useEffect } from "react";
import homeImg from "../../assets/puneri-paltan-homeImg.webp";
import bgImage from "../../assets/description-bg-new.jpg";
import { SimpleSlider } from "../global/Slider/Slider";
import { useDispatch } from "react-redux";
import { getAllPlayers } from "../../app/actions/player-action";
import { Link } from "react-router-dom";
import buyTicketsImg from "../../assets/buy-tickets-homepage_s11.png";
import tickets from "../../assets/tickets.png";
import paltanWorldHomeBgImg from "../../assets/paltan-world-home-bg.jpg";
import paltanWorldHomePage from "../../assets/paltan-world-homepage_s11.png";
import puneriWorldBg from "../../assets/puneri-world-bg_S111.jpg";
import puneriWorldRightDust from "../../assets/puneri-world-right-dust.png";
import puneriWorldMiddleDust from "../../assets/puneri-world-middle-dust.png";
import puneriWorldLeftDust from "../../assets/puneri-world-left-dust.png";
import newsBg from "../../assets/news-bg.jpg";
import newsBanner from "../../assets/news-banner.jpg";
import forceMotors from "../../assets/partners/force_motors.png";
import bateryAI from "../../assets/partners/Batery-Ai_logo.png";
import korloskarBrother from "../../assets/partners/korloskar-brother-logo.png";
import stihl from "../../assets/partners/stihl-logo.png";
import hint from "../../assets/partners/hint_logo.png";
import vikramTea from "../../assets/partners/vikram-tea.png";
import f1Focus from "../../assets/partners/F1-Focus11_logo.png";
import radio from "../../assets/partners/radio.png";
import icon from "../../assets/partners/icon-logo.png";
import shivNaresh from "../../assets/partners/shiv-naresh-logo.png";
import SlantedButton from "../global/SlantedButton/SlantedButton";
import AOS from "aos";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlayers());
  }, []);

  return (
    <div>
      {/* home page banner */}
      <img
        className="bg-cover h-[100%] w-[100%] bg-no-repeat"
        src={homeImg}
        alt="patan-image"
      />

      <section
        style={{ backgroundImage: `url(${bgImage})` }}
        className="bg-top bg-no-repeat relative"
      >
        {/* home page description */}
        <div className="lg:w-[970px] max-w-screen-xl relative  h-screen  text-[#ff7500]  mx-auto px-[15px] table">
          <div className="absolute text-white h-[125px] w-[2px] bg-white left-[50%] top-[23%] translate-x-[50%] z-10"></div>
          <h6 className="text-white text-[20px] tracking-[65px] leading-[110%] ml-[0.5rem] mt-[0.4rem] absolute left-[53%] top-[23%] translate-x-[-50%]">
            SCROLL
          </h6>
          <p className="leading-[1.3] sm:text-[20px] md:text-[30px] px-[50px] py-[30px] lg:text-[38px] text-justify bg-[position:30%_20%] h-screen table-cell align-bottom w-[100%] relative bg-cover font-[700]">
            Puneri Paltan is currently one of the top performing teams in the
            Pro Kabaddi League. With a mix of unstoppable energy, honed-out
            skills and steely nerves, here's a force that consistently looks
            forward to perform better, challenge its opponents and make a
            difference.
          </p>
        </div>

        {/* home page team description */}
        <section className="pt-[80px] relative flex lg:flex-row md:flex-col sm:flex-col">
          {/* "players" text */}
          <div className="w-1/3 ps-[4%] pe-[15px] md:mx-auto sm:mx-auto">
            <div className=" h-[65vh] w-full flex items-center justify-center">
              <h2
                data-aos="fade-down"
                className="text-[90px] text-center text-[#ff7500] tracking-[7px] ml-[20%] mt-[-15px] "
              >
                PLAYERS
              </h2>
            </div>
          </div>

          {/* players slide */}
          <div className="w-[66.66%] md:mx-auto text-[#ff7500] h-full sm:mx-auto">
            <SimpleSlider slidesToShow={3} />
            <div className="absolute w-[66.66%] ">
              <Link to="/players">
                <SlantedButton
                  name="Enter"
                  positionClass="bottom-[50px] absolute"
                />
              </Link>
            </div>
          </div>
        </section>

        {/* tickets section */}
        <div className="py-[100px]">
          <div className="relative lg:h-[400px] md:h-[300px] md:w-[670px]  mx-[auto] px-[15px] mb-[-23%] skew-x-[-15deg] lg:w-[970px] z-20">
            <a href="https://in.bookmyshow.com/sports/pro-kabaddi-league-season-11-2024/ET00414457">
              <div className="w-[49%] h-[100%] bg-[#2b2521] inline-block relative ">
                <img
                  className=" relative skew-x-[15deg]"
                  src={buyTicketsImg}
                  alt="tickets buy"
                />
              </div>
              <div className="w-[50%] h-[100%] ml-[-5px] bg-black inline-block">
                <img src={tickets} alt="" />
              </div>
              <div className="absolute top-[45%] left-[31%] ">
                <button className="bg-[#ff7500] w-[225px] h-[40px] opacity-[0.9] border-[2px] border-white text-[20px] text-white py-[8px] px-[30px] z-[999] text-center">
                  Buy Tickets
                </button>
              </div>
            </a>
          </div>
        </div>

        {/* Paltan World */}

        <section
          className="h-auto md:pt-[220px] w-auto relative bg-repeat sm:mt-[-150px] md:mt-[-150px]"
          style={{ backgroundImage: `url(${paltanWorldHomeBgImg})` }}
        >
          <div
            className="w-[100%] bg-bottom-center mt-[100px] bg-no-repeat h-auto relative pb-[60px]"
            style={{ backgroundImage: `url(${puneriWorldBg})` }}
          >
            <img
              src={paltanWorldHomePage}
              className="relative z-[9]"
              alt="paltan-world"
            />
            <img
              src={puneriWorldRightDust}
              className="absolute left-[66%] top-[20%] w-[330px] z-[99] mix-blend-screen"
              alt="dust"
            />
            <img
              src={puneriWorldMiddleDust}
              className="absolute left-[36%] top-[-55px] rotate-[11deg] z-[1] "
              alt="dust"
            />
            <img
              src={puneriWorldLeftDust}
              className="absolute top-0  z-[1] "
              alt="dust"
            />
            <div className="absolute top-[38%] right-[27%] translate-x-[50%] z-[9]">
              <h2
                data-aos="fade-down"
                className="md:text-[70px] sm:text-[50px] lg:text-[110px] text-[#ff7500] tracking-[7px] font-[400px]"
              >
                PALTAN
              </h2>
              <h2
                data-aos="fade-up"
                className="md:text-[70px] sm:text-[50px] mt-[-20%] ml-[7%] text-white translate-y-[20px] lg:text-[110px] tracking-[7px] m-0"
              >
                WORLD
              </h2>
              <Link to="/paltan-world">
                <SlantedButton name="Enter" positionClass="right-[0px] " />
              </Link>
            </div>
          </div>
        </section>

        <section
          className="py-[150px] bg-center bg-no-repeat h-auto w-auto relative"
          style={{ backgroundImage: `url(${newsBg})` }}
        >
          <div
            className="bg-center h-[561px] mb-[50px] lg:w-[970px] w-auto relative bg-no-repeat mx-auto px-[15px]"
            style={{ backgroundImage: `url(${newsBanner})` }}
          >
            <div className="mx-[-15px]">
              <div className="flex flex-col justify-center items-center text-center h-[561px] w-[100%] align-middle">
                <h2
                  data-aos="fade-down"
                  className="lg:text-[90px] md:text-[70px] sm:text-[70px] text-[70px] text-center mb-[-4%] tracking-[7px] text-[#ff7500]"
                >
                  PUNERI PALTAN
                </h2>
                <h2
                  data-aos="fade-up"
                  className="lg:text-[90px] md:text-[70px] sm:text-[70px] text-center tracking-[7px] font-[400] text-white mt-[20px]"
                >
                  IN THE NEWS
                </h2>
              </div>
              <div className="mt-[-25px] text-center px-[15px]">
                <Link to="/paltan-world">
                  <SlantedButton name="Enter" positionClass="left-[360px]" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#ff7500] h-[100px] relative w-[90%] mt-[-50px] mx-auto skew-x-[-15deg]">
          <div className="px-[15px] lg:w-[970px] w-auto flex lg:flex-row flex-col h-full items-center">
            <h3
              data-aos="zoom-in"
              className=" text-center skew-x-[15deg] text-white text-[22px] lg:text-[28px] tracking-[2px] leading-[110%] "
            >
              SUBSCRIBE TO OUR NEWSLETTER
            </h3>
            <div className="lg:w-1/2 skew-x-[-15deg]">
              <form action="" className="skew-x-[15deg] ">
                <input
                  type="text"
                  placeholder="Enter Your email Id"
                  className="lg:py-[0.5rem] lg:px-[3rem] px-[1.5rem] py:[0.4rem] md:py-[0.5rem] md:px-[3rem] sm:py-[0.5rem] sm:px-[3rem]"
                />
                <button className="form-btn w-[20px] text-[10px]">Go</button>
              </form>
            </div>
          </div>
        </section>

        <section className="pb-[100px]">
          <div className="lg:w-[970px] md:w-auto sm:w-auto mx-auto px-[15px]">
            <div className="mx-[-15px] w-[100%]">
              <h2
                data-aos="zoom-in"
                className="text-center py-[30px] text-[70px] lg:text-[110px] tracking-[7px] text-[#ff7500]"
              >
                PARTNERS
              </h2>
            </div>
            <div className="flex justify-center  w-[100%]">
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://www.forcemotors.com/"
              >
                <img className="h-auto mx-auto" src={forceMotors} alt="logo" />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Principal Partner
                </h6>
              </a>
            </div>
            <div className="flex justify-center  w-[100%]">
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://batery.ai/"
              >
                <img className="h-auto mx-auto" src={bateryAI} alt="logo" />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Powered By
                </h6>
              </a>
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://www.kirloskarpumps.com/"
              >
                <img
                  className="h-auto mx-auto"
                  src={korloskarBrother}
                  alt="logo"
                />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Associate Partner
                </h6>
              </a>
            </div>
            <div className="flex justify-center  w-[100%]">
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://www.stihl.com/en"
              >
                <img className="h-auto mx-auto" src={stihl} alt="logo" />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Co-Partner
                </h6>
              </a>
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://www.hintworld.com/"
              >
                <img className="h-auto mx-auto" src={hint} alt="logo" />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Co-Partner
                </h6>
              </a>
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://www.vikramtea.com/"
              >
                <img className="h-auto mx-auto" src={vikramTea} alt="logo" />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Co-Partner
                </h6>
              </a>
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://www.focus11.net/"
              >
                <img className="h-auto mx-auto" src={f1Focus} alt="logo" />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Co-Partner
                </h6>
              </a>
            </div>
            <div className="flex justify-center  w-[100%]">
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://www.radiocity.in/"
              >
                <img className="h-auto mx-auto" src={radio} alt="logo" />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Radio Partner
                </h6>
              </a>
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://www.forcemotors.com/"
              >
                <img className="h-auto mx-auto" src={icon} alt="logo" />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Travel Partner
                </h6>
              </a>
              <a
                className="w-[16.66%] px-[16px] pt-[30px]"
                href="https://shivnaresh.in/"
              >
                <img className="h-auto mx-auto" src={shivNaresh} alt="logo" />
                <h6 className="text-center text-[16px] tracking-[2px] pt-[20px]">
                  Kit Partner
                </h6>
              </a>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}
