import React from "react";

const DiningFilters = () => {
  return (
    <div className="w-full bg-[#fff] sticky top-0 z-10 py-[8px]">
      <div className="max-width flex">
        <div className="flex items-center gap-1 mr-[1rem] my-[1rem] border border-solid border-[#cfcfcf] text-[#9c9c9c] bg-[#fff] rounded-[0.5rem] px-[0.7rem] py-[0.3rem] cursor-pointer">
          <i class="fa-solid fa-filter"></i>
          <span className="text-[15px]">Filters</span>
        </div>
        <div className="flex items-center mr-[1rem] my-[1rem] border border-solid border-[#cfcfcf] text-[#9c9c9c] bg-[#fff] rounded-[0.5rem] px-[0.7rem] py-[0.3rem] cursor-pointer">
          <span className="text-[15px]">Offers</span>
        </div>
        <div className="flex items-center mr-[1rem] my-[1rem] border border-solid border-[#cfcfcf] text-[#9c9c9c] bg-[#fff] rounded-[0.5rem] px-[0.7rem] py-[0.3rem] cursor-pointer">
          <span className="text-[15px]">Rating: 4.0+</span>
        </div>
        <div className="flex items-center mr-[1rem] my-[1rem] border border-solid border-[#cfcfcf] text-[#9c9c9c] bg-[#fff] rounded-[0.5rem] px-[0.7rem] py-[0.3rem] cursor-pointer">
          <span className="text-[15px]">Pet Friendly</span>
        </div>
        <div className="flex items-center gap-1 mr-[1rem] my-[1rem] border border-solid border-[#cfcfcf] text-[#9c9c9c] bg-[#fff] rounded-[0.5rem] px-[0.7rem] py-[0.3rem] cursor-pointer">
          <span className="text-[15px]">Outdoor Seating</span>
        </div>
        <div className="flex items-center gap-1 mr-[1rem] my-[1rem] border border-solid border-[#cfcfcf] text-[#9c9c9c] bg-[#fff] rounded-[0.5rem] px-[0.7rem] py-[0.3rem] cursor-pointer">
          <span className="text-[15px]">Serves Alcohol</span>
        </div>
        <div className="flex items-center gap-1 mr-[1rem] my-[1rem] border border-solid border-[#cfcfcf] text-[#9c9c9c] bg-[#fff] rounded-[0.5rem] px-[0.7rem] py-[0.3rem] cursor-pointer">
          <span className="text-[15px]">Open Now</span>
        </div>
      </div>
    </div>
  );
};

export default DiningFilters;
