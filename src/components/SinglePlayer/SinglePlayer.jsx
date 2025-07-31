import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPlayers, getSinglePlayer } from "../../app/actions/player-action";
import abineshnadarajan from "../../assets/players/Puneri-Paltan-abinesh-nadarajan.png";
import adityashinde from "../../assets/players/Puneri-Paltan-aditya-shinde.png";
import aslaminamdar from "../../assets/players/Puneri-Paltan-aslam-inamdar.png";
import guaravkhatri from "../../assets/players/Puneri-Paltan-guarav-khatri.png";
import mohitgoyat from "../../assets/players/Puneri-Paltan-mohit-goyat.png";
import akashshinde from "../../assets/players/Puneri-Paltan-akash-shinde.png";
import pankajmohite from "../../assets/players/Puneri-Paltan-pankaj-mohite.png";
import sanketsawant from "../../assets/players/Puneri-Paltan-sanket-sawant.png";
import playerDescBg from "../../assets/player-desc-bg.jpg";
import {OtherPlayersSlider} from "../global/Slider/Slider";
import PageNotFound from "../PageNotFound/PageNotFound";
import SinglePlayerMobileBanner from "../../assets/Single-Player-mobile-banner.png"
import Loading from "../global/Loading/Loading";
import SlantedDesc from "../global/SlantedDesc/SlantedDesc";

export default function SinglePlayer() {
  const player = useSelector((state) => state.player.player);
  const status = useSelector(state => state.player.loading)
  const error= useSelector((state) => state.player.error);
  const dispatch = useDispatch();
  const { playerid } = useParams();



  const playerImages = {
    abineshnadarajan,
    adityashinde,
    aslaminamdar,
    guaravkhatri,
    mohitgoyat,
    akashshinde,
    pankajmohite,
    sanketsawant,
  };

  const overallStats = [
    {
      statNo: player.Matches_played,
      statDesc: "MATCHES PLAYED",
    },
    {
      statNo: player.total_ponints_earned,
      statDesc: "TOTAL POINTS EARNED",
    },
    {
      statNo: player.most_points_in_a_match,
      statDesc: "MOST POINTS IN A MATCH",
    },
    {
      statNo: player.not_out_percentage,
      statDesc: "NOT OUT PERCENTAGE",
    },
  ];

  const raidStats = [
    {
      statNo: player.no_of_super_raids,
      statDesc: "NO OF SUPER RAIDS",
    },
    {
      statNo: player.super_10s,
      statDesc: "SUPER 10S",
    },
    {
      statNo: player.avg_raid_points,
      statDesc: "AVG. RAID POINTS",
    },
  ];

  const tackleStats = [
    {
      statNo: player.no_of_super_tackles,
      statDesc: "NO. OF SUPER TACKLES",
    },
    {
      statNo: player.total_tacle_points,
      statDesc: "TOTAL TACKLE POINTS",
    },
  ];


  useEffect(() => {
    dispatch(getSinglePlayer(playerid))
    dispatch(getAllPlayers())
  }, [dispatch, playerid]);

  if (status==="loading") return <Loading/>;

  const key = player.name?.split(" ").join("").toLowerCase();
  const playerImg = playerImages[key];

  if ( playerid != player.id) {
    return <PageNotFound />;
  }
  return (
    <>
      {status === "succeded" && (
        <section>
          <div>
            <img
              className="hidden md:block"
              src={playerImg || akashshinde}
              alt=""
            />
            <img className="md:hidden" src={SinglePlayerMobileBanner} alt="" />
          </div>
          <div
            style={{ backgroundImage: `url(${playerDescBg})` }}
            className="py-[3em] bg-center bg-cover"
          >
            <div className="lg:w-[970px] w-auto px-[15px] mx-auto flex lg:flex-row flex-col">
              <div className="px-[15px] lg:w-1/3 ">
                <img className=" mx-auto" src={player.full_image} alt="" />
              </div>
              <div className="w-2/3 ml-[8.33%] px-[15px]">
                <div className="flex sm:flex-row flex-col items-center">
                  <div className="md:w-[41.66%] w-auto">
                    <h5 className="text-[22px] bg-[#f40] text-white w-[200px] tracking-[3px] text-center py-[10px] margin-auto skew-x-[-15deg]">
                      JERSEY NO.
                    </h5>
                    <h6 className="text-[20px] tracking-[1px] text-center mt-[25px] text-[#000]">
                      {player.jersey_no}
                    </h6>
                  </div>
                  <div className="md:w-[58.33%] w-auto">
                    <h5 className="m-auto w-[200px] text-[22px] text-center bg-[#f40] text-white tracking-[3px] py-[10px] skew-x-[-15deg]">
                      POSITION
                    </h5>
                    <h6 className="text-center text-[20px] mt-[25px] tracking-[1px] text-[#000] ">
                      {player.position}
                    </h6>
                  </div>
                </div>

                <div className="mt-[40px] border-b-2 border-[#c7c1c1] pb-[50px]"></div>
                <div className="pt-[40px] w-auto">
                  <h5 className="text-[22px] bg-[#f40] text-white w-[200px] tracking-[3px] text-center py-[10px] mb-[40px] skew-x-[-15deg]">
                    VITALS
                  </h5>
                </div>
                <div>
                  <table className="w-full">
                    <tbody>
                      <tr>
                        <td className="text-16px text-[#959595] py-[15px] px-[5px] text-left">
                          Name
                        </td>
                        <td className="text-[#000] text-[16px] py-[15px] px-[5px]">
                          {player.name}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-16px text-[#959595] py-[15px] px-[5px] text-left">
                          Date of birth
                        </td>
                        <td className="text-[#000] text-[16px] py-[15px] px-[5px]">
                          {" "}
                          {player.date_of_birth}{" "}
                        </td>
                      </tr>
                      <tr>
                        <td className="text-16px text-[#959595] py-[15px] px-[5px] text-left">
                          Nationality
                        </td>
                        <td className="text-[#000] text-[16px] py-[15px] px-[5px]">
                          {player.nationality}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className=" mx-auto ">
            <h2 className="text-[50px] text-center md:text-[110px] tracking-[7px] text-[#ff7500] font-[400]">
              STATISTICS
            </h2>
            <div className="py-[3em] bg-[#edeef2]">
              <div>
                <SlantedDesc name="Overall" />
                <div className="flex flex-col lg:flex-row items-center">
                  {overallStats.map((stat,i) => (
                    <div key={i} className="lg:w-[16.66%] w-auto px-[15px]">
                      <h4 className="bg-[#fff] text-center text-[#000] w-[150px] mt-[30px] mx-auto text-[40px] py-[10px]">
                        {stat.statNo}
                      </h4>
                      <h5 className="text-[#000] text-[18px] text-center tracking-[1px] my-[0.82rem]">
                        {stat.statDesc}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="py-[3em]">
              <SlantedDesc name="Raid" />
              <div className="flex lg:flex-row flex-col">
                <div className="lg:border-r-2 border-[#dbdbdb] lg:w-1/2 flex flex-col lg:flex-row lg:flex-wrap">
                  {raidStats.map((stat,i) => (
                    <div key={i} className="lg:w-1/2 px-[15px]">
                      <h4 className="mx-auto mt-[30px] w-[150px] bg-[#edeef2] text-[#000] text-center text-[40px] py-[10px]">
                        {stat.statNo}
                      </h4>
                      <h5 className="text-[#000] text-[18px] text-center tracking-[1px] font-[400] my-[0.82rem]">
                        {stat.statDesc}
                      </h5>
                    </div>
                  ))}
                </div>
                <div className="lg:w-1/2 flex lg:flex-row flex-col items-center">
                  <div className="px-[15px] lg:w-1/2">
                    <div
                      className=" rounded-full shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] w-[230px] h-[230px] m-[2em_auto] relative"
                      style={{
                        background: `linear-gradient(90deg, #ff7500 50%, transparent 50%, transparent), linear-gradient(180deg, #ff7500 50%, #ff7500 50%, #ff7500)`,
                      }}
                    >
                      <div className="w-[180px] h-[180px] flex justify-center  flex-col text-[22px] text-[#000] text-center tracking-[2px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                        TOTAL RAID <br /> <span>355</span>
                      </div>
                      {/* no api data for this olor: #000; */}
                    </div>
                  </div>

                  <div className="px-[15px] lg:w-1/2 flex flex-col justify-center items-center lg:h-[270px]">
                    <h6 className="text-[#000] text-[40px] text-center skew-x-[-10deg]">
                      47.60%
                    </h6>
                    <p className="text-[#000] pt-[10px] text-[18px]">
                      RAID STRIKE RATE
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-[3em] bg-[#edeef2] w-[100%]">
              <SlantedDesc name="Tackles" />
              <div className="flex lg:flex-row flex-col">
                <div className="lg:border-r-2 border-[#dbdbdb] lg:w-1/2 flex flex-col lg:flex-row lg:flex-wrap">
                  {tackleStats.map((stat,i) => (
                    <div key={i} className="lg:w-1/2 px-[15px]">
                      <h4 className="mx-auto mt-[30px] w-[150px] bg-[#fff] text-[#000] text-center text-[40px] py-[10px]">
                        {stat.statNo}
                      </h4>
                      <h5 className="text-[#000] text-[18px] text-center tracking-[1px] my-[0.82rem]">
                        {stat.statDesc}
                      </h5>
                    </div>
                  ))}
                </div>
                <div className="lg:w-1/2 flex lg:flex-row flex-col items-center">
                  <div className="px-[15px] lg:w-1/2">
                    <div
                      className=" rounded-full shadow-[0_2px_5px_0_rgba(0,0,0,0.16),_0_2px_10px_0_rgba(0,0,0,0.12)] w-[230px] h-[230px] m-[2em_auto] relative"
                      style={{
                        background:
                          "linear-gradient(90deg, #ff7500 50%, transparent 50%, transparent), linear-gradient(245deg, #121237 50%, #ff7500 50%, #ff7500)",
                      }}
                    >
                      <div className="w-[180px] h-[180px] flex justify-center flex-col text-[22px] text-[#000] text-center tracking-[2px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full">
                        TOTAL TACKLE <br /> <span>51</span>
                      </div>
                      {/* no api data for this  */}
                    </div>
                  </div>

                  <div className="px-[15px] lg:w-1/2 flex flex-col justify-center lg:h-[270px]">
                    <h6 className="text-[#000] text-[40px] bg-[#fff] text-center skew-x-[-10deg]">
                      39.21%
                    </h6>
                    <p className="text-[#000] pt-[10px] text-[18px]">
                      TACKLE STRIKE RATE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-[3em] mx-auto px-[15px]">
            <h2 className="text-center text-[#ff7500] text-[80px] lg:text-[110px] tracking-[7px]">
              OTHER PLAYERS
            </h2>
            <div className="lg:ml-[8.33%] skew-x-[-5deg] lg:w-[83.33%] px-[15px] mt-[-25px] z-10 bg-[#000] ">
              <OtherPlayersSlider slidesToShow={2} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
