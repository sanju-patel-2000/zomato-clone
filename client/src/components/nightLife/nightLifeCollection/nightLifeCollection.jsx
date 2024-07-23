import React from "react";

const NightLifeCollection = () => {
  return (
    <div className="py-[40px] bg-[rgb(248,248,248)] overflow-hidden">
      <div className="max-width">
        <h2 className="text-[#1c1c1c] text-[30px] pb-[26px]">Collections</h2>
        <div className="flex justify-between mb-4">
          <h6 className="text-[#363636] text-[18px]">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Indore, based on trends
          </h6>
          <div className="flex gap-2 items-center text-[#e03546] text-[16px]">
            <span>All collections in Indore</span>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
        <div>
          <div className="h-[320px] w-[260px] mr-[20px] rounded-[6px] relative">
            <img
              className="h-full w-full rounded-[6px] object-cover"
              src="https://b.zmtcdn.com/data/collections/21ebc8e2867c6917de5b0eb1aae8174e_1685695703.jpg"
            />
            <div className="h-full w-full rounded-[6px] absolute left-0 top-0 linear-gradiant"></div>
            <div>
              <p className="absolute left-[16px] bottom-[30px] text-[18px] text-[#fff]">
                Best Bars and Pubs
              </p>
              <div className="flex gap-2 items-center absolute left-[16px] bottom-[10px] text-[14px] text-[#fff]">
                <p>18 Places</p>
                <i className="fa-solid fa-caret-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NightLifeCollection;
