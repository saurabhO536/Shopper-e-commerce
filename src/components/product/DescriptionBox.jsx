import React from "react";

const DescriptionBox = () => {
  return (
    <div className="w-[1380px] max-w-[95%] p-5 border border-[#ddd] bg-white rounded-[8px] font-sans shadow-[0_2px_8px_rgba(0,0,0,0.1)] my-[30px] mx-auto">
      {/* Navigator */}
      <div className="flex gap-5 mb-[15px] border-b-2 border-[#eee] pb-[10px]">
        <div className="font-bold text-[18px] cursor-pointer bg-gradient-to-r from-[#771801] to-[#964100] bg-clip-text text-transparent">
          Description
        </div>

        <div className="text-[18px] text-[#2d2d2b] cursor-pointer">
          Reviews(122)
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="my-[10px] leading-[1.6] text-[#333] text-[17px]">
          An ecommerce website is an online store where businesses sell goods and
          services to customers over the internet. It's a digital storefront
          that allows customers to browse, select, and purchase products, and
          facilitates the entire transaction process from payment to shipping
        </p>

        <p className="my-[10px] leading-[1.6] text-[#333] text-[17px]">
          While the traditional bricks and mortar business model is still
          relevant, e-commerce has become a preferred choice for conducting
          business for many sellers across India. Here are some of the points
          that differentiate e-commerce from the traditional, making it a better
          fit for the social media-driven generation of consumers.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
