import React from "react";

const ExploreCard = ({ restaurant }) => {
  const name = restaurant?.info?.name ?? "";
  const imageUrl = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const price = restaurant?.info?.cfo?.text;
  const offers = restaurant?.bulkOffers ?? [];
  const cuisines = restaurant?.info?.cuisine
    ?.map((item) => item.name)
    .slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const proOffer = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1 ? proOffer : offers.length === 1 ? offers[0].text : null;

  return (
    <div className="mt-[12px] mb-[24px] p-[10px] rounded-[15px] border border-solid border-transparent cursor-pointer hover:border-[#e8e8e8] hover:shadow-xl">
      <div className="h-[248px] w-[328px] rounded-[15px] relative">
        <img
          className="h-full w-full rounded-[15px] object-cover"
          src={imageUrl}
          alt={name}
        />
        {discount && (
          <span className="inline-block absolute left-0 bottom-3 bg-[#256fef] text-[#fff] text-[14px] px-[6px] rounded-r-sm">
            {discount}
          </span>
        )}
      </div>
      <div>
        <div className="flex justify-between my-2 ">
          <h4 className="text-[17px] text-[#1c1c1c] font-medium text-ellipsis overflow-hidden whitespace-nowrap max-w-[230px]">
            {name}
          </h4>
          {rating && (
            <div className="flex items-center bg-[#267e3e] px-1 rounded-[6px] text-[13px] text-[#fff]">
              <span>{rating}</span>
              <i class="fa-regular fa-star"></i>
            </div>
          )}
        </div>
        <div className="flex justify-between my-2 text-[14px] text-[#696969]">
          {cuisines && (
            <div className="text-ellipsis flex items-center gap-1">
              {cuisines.map((item, i) => (
                <span className="">
                  {item}
                  {cuisines.length - 1 > i ? "," : ""}
                </span>
              ))}
            </div>
          )}
          {price && <p className="text-ellipsis">{price}</p>}
        </div>
        <div className="flex justify-end text-[#383838] text-[12px] font-medium">
          <span>{deliveryTime}</span>
        </div>
      </div>
    </div>
  );
};

export default ExploreCard;
