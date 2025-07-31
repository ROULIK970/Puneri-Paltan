import React from 'react'

export default function SlantedDesc({name, styles}) {
  return (
    <div className="px-[15px]">
      <div className="relative inline-block md:mt-[110px] mb-[60px] skew-x-[-15deg] md:my-[30px]">
        <h3
          className={`bg-[#f40] ml-[-25px]  text-[white]  md:text-right lg:text-right xl:text-right ${styles}`}
        >
          {name.toUpperCase()}
        </h3>
        <div className="absolute top-0 right-[-20px]  w-[10px] h-[73px] bg-[#f40]"></div>
        <div className="absolute top-0 right-[-36px] w-[7px] h-[73px] bg-[#f40]"></div>
      </div>
    </div>
  );
}
