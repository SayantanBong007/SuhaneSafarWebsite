import React from "react";

const TopFrame = ({firstHeading, secondHeading, text}) => {
  return (
    <div className="bg-[#41FFB6] pt-56 pb-48">
      <div className="flex flex-col space-y-5 items-center justify-center">
        <div>
            <h1 className="text-6xl font-bold">{firstHeading} <span className="text-amber-300">{secondHeading}</span></h1>
        </div>
        <div>
            <p className="text-2xl font-normal">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default TopFrame;
