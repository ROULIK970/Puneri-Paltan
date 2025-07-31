import React from 'react'
import galleryBanner from "../../assets/gallery-banner.jpg";
import bannerTitle from "../../assets/banner-title.png";
import galleryDescBanner from "../../assets/puneri-gallery-desk-banner-s11.png";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function SingleGallery() {

    const gallery = useSelector(state => state.gallery.gallery)
    
    const {galleryid} = useParams()


  return (
    <section>
      <div
        className="h-[700px] bg-center bg-no-repeat relative flex "
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

      <div className="py-[50px] mx-auto">
        {gallery
          ?.filter((item) => item.id === galleryid)
          ?.map((item) => (
            <div key={item.id}>
              <h3 className="text-[20px] md:text-[50px] text-[#f40] text-center w-[80%] tracking-[2px] mx-auto pb-[30px]">
                {item.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-[50px]">
                {item.match_images.map((matchImg,i) => (
                  <img key={i} src={matchImg} alt="" />
                ))}
              </div>
            </div>
          ))}
      </div>      
    </section>
  );
}
