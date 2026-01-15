import React from "react";
import arrow_icon from "../../../public/breadcrum_arrow.png";

const Breadcrum = ({ product }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-[16px] font-medium text-[#555] my-5">
      <span className="bg-gradient-to-r from-red-500 to-[#20201f] bg-clip-text text-transparent font-bold">
        Home
      </span>
      <img
        src={arrow_icon}
        alt=""
        className="w-3 h-3 object-contain"
      />

      <span className="bg-gradient-to-r from-red-500 to-[#20201f] bg-clip-text text-transparent font-bold">
        shop
      </span>
      <img
        src={arrow_icon}
        alt=""
        className="w-3 h-3 object-contain"
      />

      <span className="bg-gradient-to-r from-red-500 to-[#20201f] bg-clip-text text-transparent font-bold">
        {product.category}
      </span>
      <img
        src={arrow_icon}
        alt=""
        className="w-3 h-3 object-contain"
      />

      <span className="bg-gradient-to-r from-red-500 to-[#20201f] bg-clip-text text-transparent font-bold">
        {product.name}
      </span>
    </div>
  );
};

export default Breadcrum;
