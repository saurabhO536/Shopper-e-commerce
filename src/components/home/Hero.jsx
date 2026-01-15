import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow.png";
import model_image from "../../assets/new-model_image.png";

const Hero = () => {
  return (
    <div className="w-full h-full flex justify-between bg-gradient-to-b from-[rgb(161,52,70)] to-white">
      {/* Left */}
      <div className="flex flex-col justify-center leading-[1.1] gap-5 px-[100px] py-[100px] mb-[150px]">
        <h2 className="text-[#090909] text-[40px] font-semibold">
          New Arrivals Only
        </h2>

        <div>
          <div className="flex items-center gap-5">
            <p className="text-[#171717] text-[80px] font-bold">New</p>
            <img src={hand_icon} alt="" className="w-[105px]" />
          </div>

          <p className="text-[#171717] text-[80px] font-bold">collection</p>
          <p className="text-[#171717] text-[80px] font-bold">for everyone</p>

          <div className="flex items-center justify-center gap-[15px] w-[310px] h-[70px] mt-[30px] rounded-[75px] bg-[#fe2b2b] text-white text-[22px] font-semibold cursor-pointer">
            <div>latest-collection</div>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center justify-center w-full">
        <img
          src={model_image}
          alt=""
          className="h-[80%] w-full object-contain"
        />
      </div>
    </div>
  );
};

export default Hero;
