import React, { useState } from "react";

const ExploreOption = () => {
  const [valueOne, setValueOne] = useState("hidden");
  const [valueTwo, setValueTwo] = useState("hidden");
  const [valueThree, setValueThree] = useState("hidden");
  const [valueFour, setValueFour] = useState("hidden");
  return (
    <div className="bg-[#fcfcfc]">
      <div className="max-width py-[50px]">
        <p className="mb-[20px] text-[#363636] text-[30px]">
          Explore options near me
        </p>
        <div className="flex flex-col gap-8 py-[20px] px-[24px] bg-white border border-[#e8e8e8] text-[#1c1c1c] mb-[20px] rounded-[8px] cursor-pointer">
          <div className="flex justify-between items-center border-solid">
            <p>Popular cuisines near me</p>
            <i
              className={` ${
                valueOne === "" ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"
              }`}
              onClick={() => setValueOne(`${valueOne === "" ? "hidden" : ""}`)}
            ></i>
          </div>
          <div className={`text-[#7f7979] ${valueOne}`}>
            <span>Beverages food near me</span>
            <span>Biryani food near me</span>
            <span>Burger food near me</span>
            <span>Chinese food near me</span>
            <span>Coffee food near me</span>
            <span>Desserts food near me</span>
            <span>Ice Cream food near me</span>
            <span>Italian food near me</span>
            <span>Mithai food near me</span>
            <span>Momos food near me</span>
            <span>Mughlai food near me</span>
            <span>North Indian food near me</span>
            <span>Pasta food near me</span>
            <span>Pizza food near me</span>
            <span>Rolls food near me</span>
            <span>Sandwich food near me</span>
            <span>Shake food near me</span>
            <span>South Indian food near me</span>
            <span>Street food near me</span>
            <span>Tea food near me</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-[20px] px-[24px] bg-white border border-[#e8e8e8] text-[#1c1c1c] mb-[20px] rounded-[8px] cursor-pointer">
          <div className="flex justify-between items-center border-solid">
            <p>Popular restaurant types near me</p>
            <i
              className={` ${
                valueTwo === ""
                  ? "fa-solid fa-angle-up"
                  : "fa-solid fa-angle-down"
              }`}
              onClick={() => setValueTwo(`${valueTwo === "" ? "hidden" : ""}`)}
            ></i>
          </div>
          <div className={`text-[#7f7979] ${valueTwo}`}>
            <span>Pasta food near me</span>
            <span>Pizza food near me</span>
            <span>Rolls food near me</span>
            <span>Sandwich food near me</span>
            <span>Shake food near me</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-[20px] px-[24px] bg-white border border-[#e8e8e8] text-[#1c1c1c] mb-[20px] rounded-[8px] cursor-pointer">
          <div className="flex justify-between items-center border-solid">
            <p>Top Restaurant Chains</p>
            <i
              className={` ${
                valueThree === ""
                  ? "fa-solid fa-angle-up"
                  : "fa-solid fa-angle-down"
              }`}
              onClick={() =>
                setValueThree(`${valueThree === "" ? "hidden" : ""}`)
              }
            ></i>
          </div>
          <div className={`text-[#7f7979] ${valueThree}`}>
            <span>Mughlai food near me</span>
            <span>North Indian food near me</span>
            <span>Pasta food near me</span>
            <span>Pizza food near me</span>
            <span>Rolls food near me</span>
            <span>Sandwich food near me</span>
            <span>Shake food near me</span>
            <span>South Indian food near me</span>
            <span>Street food near me</span>
            <span>Tea food near me</span>
          </div>
        </div>
        <div className="flex flex-col gap-8 py-[20px] px-[24px] bg-white border border-[#e8e8e8] text-[#1c1c1c] mb-[20px] rounded-[8px] cursor-pointer">
          <div className="flex justify-between items-center border-solid">
            <p>Cities We Deliver To</p>
            <i
              className={` ${
                valueFour === ""
                  ? "fa-solid fa-angle-up"
                  : "fa-solid fa-angle-down"
              }`}
              onClick={() =>
                setValueFour(`${valueFour === "" ? "hidden" : ""}`)
              }
            ></i>
          </div>
          <div className={`text-[#7f7979] ${valueFour}`}>
            <span>Beverages food near me</span>
            <span>Biryani food near me</span>
            <span>Burger food near me</span>
            <span>Chinese food near me</span>
            <span>Coffee food near me</span>
            <span>Desserts food near me</span>
            <span>Ice Cream food near me</span>
            <span>Italian food near me</span>
            <span>Mithai food near me</span>
            <span>Momos food near me</span>
            <span>Mughlai food near me</span>
            <span>North Indian food near me</span>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreOption;
