import React from "react";

export default function SlantedButton({name="Enter", positionClass=""}) {
 
  return <button className={`default-btn absolute lg:w-[280px] md:w-[200px] sm:w-[150px] ${positionClass}`}>{name}</button>;
}
