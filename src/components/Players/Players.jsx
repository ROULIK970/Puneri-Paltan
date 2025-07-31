import React, {useEffect} from 'react'
import playerBanner from '../../assets/player-banner-bg_S11.jpg'
import bannerTitle from '../../assets/banner-title.png'
import playerPageBanner from '../../assets/players_page_banner_desktop_S11.png'
import { useSelector, useDispatch } from 'react-redux'
import { getPlayersCategory, getAllPlayers } from '../../app/actions/player-action'
import { Link } from 'react-router-dom'
import SlantedDesc from '../global/SlantedDesc/SlantedDesc'
import playerBannerMobile from "../../assets/players-banner-mobile_S11.jpg"
import Tilt from 'react-parallax-tilt'
import Loading from '../global/Loading/Loading'

export default function Players() {
  const dispatch = useDispatch()
    const players = useSelector((state) => state.player.players);
    const categories = useSelector((state) => state.player.categories);
    const error = useSelector((state) => state.player.error);
    const status = useSelector((state) => state.player.loading);




useEffect(() => {
  dispatch(getAllPlayers());
  dispatch(getPlayersCategory());
}, [dispatch]);

  return (
    <section className="bg-[#edeef2]">
      <section
        className="h-[600px] bg-no-repeat md:hidden  bg-cover bg-center"
        style={{ backgroundImage: `url(${playerBannerMobile})` }}
      ></section>
      <section
        className="hidden md:block lg:h-[700px] md:h-[700px] bg-center bg-no-repeat relative "
        style={{ backgroundImage: `url(${playerBanner})` }}
      >
        <div className="px-[15px] flex">
          <div className="relative w-auto lg:w-[33.33%] ml-[16.66%] h-[700px] flex flex-col justify-center">
            <img className=" h-auto " src={bannerTitle} alt="" />
            <h1 className="absolute top-[37%] left-[2%] text-[50px] lg:text-[80px] tracking-[10px]  text-white">
              PLAYERS
            </h1>
          </div>
          <div className=" w-[50%] h-[700px] hidden lg:flex flex-col justify-end">
            <img src={playerPageBanner} alt="" />
          </div>
        </div>
      </section>
      {status === "loading" && <Loading />}
      {status === "failed" && <p>{error}</p>}
      {status === "succeded" &&
        categories.length > 0 &&
        categories.map((category) => (
          <section key={category.id} className="pb-[50px]">
            <SlantedDesc
              name={category.cat_name}
              styles="text-[30px] px-[30px] py-[15px] text-center lg:w-[430px] md:w-[400px] w-[320px]"
            />
            <div className="px-[15px]">
              <div className="grid xl:grid-cols-3 lg:grid-cols-2 h-auto w-auto md:grid-cols-2 grid-cols-1 mx-[40px]">
                {players
                  ?.filter((player) => player.cat_name === category.cat_name)
                  .map((player) => (
                    <Tilt
                      key={player.id}
                      perspective={300}
                      glareEnable={false}
                      scale={1.05}
                      transitionSpeed={250}
                    >
                      <div className="pb-[50px] transition-transform duration-300 [will-change:transform] hover:[transform:perspective(300px)_rotateX(1.14deg)_rotateY(0.42deg)_scale3d(1,1,1)]">
                        <Link to={`/players/${player.id}`}>
                          <img
                            className="h-auto w-auto md:h-[351px] md:w-[351px] lg:w-[351px] lg:h-[351px] mx-auto "
                            src={player.profile_image}
                            alt=""
                          />
                          <h3 className="font-bold text-center text-[35px] tracking-[4px]">
                            {player.name}
                          </h3>
                          <h5 className="text-center text-[#ff7500] mt-[10px] tracking-[2px] m-0 text-[20px]">
                            {player.cat_name.slice(0, -1).toUpperCase()}
                          </h5>
                        </Link>
                      </div>
                    </Tilt>
                  ))}
              </div>
            </div>
          </section>
        ))}
    </section>
  );
}
