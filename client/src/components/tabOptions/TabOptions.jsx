import { useState } from "react";
import Delivery from "../delibery/Delivery";
import DiningOut from "../diningOut/DiningOut";
import NightLife from "../nightLife/NightLife";

const TabOptions = () => {
  const [activeTab, setActiveTab] = useState("Delivery");

  return (
    <>
      <div className="mt-12 box-shadow">
        <div className="max-width flex items-center">
          <div className="flex flex-col px-5 gap-5">
            <div
              className="flex items-center gap-3 cursor-pointer px-5"
              onClick={() => setActiveTab("Delivery")}
            >
              <div
                className="w-[60px] h-[60px] rounded-[50%] flex items-center justify-center"
                style={{
                  backgroundColor: `${
                    activeTab === "Delivery" ? "#fceec0" : "#f8f8f8"
                  }`,
                }}
              >
                <img
                  src={
                    activeTab === "Delivery"
                      ? "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png"
                      : "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
                  }
                  alt="delivery-image"
                  className="w-[30px] h-[30px]"
                />
              </div>
              <span
                className="text-[20px] text-[#696969]"
                style={{
                  color: `${activeTab === "Delivery" ? "#ef4f5f" : ""}`,
                }}
              >
                Delivery
              </span>
            </div>
            <hr className="mb-[-3px]"
              style={{
                backgroundColor: `${activeTab === "Delivery" ? "#ff7e8b" : ""}`,
                height: "0.2rem",
              }}
            />
          </div>
          <div className="flex flex-col px-5 gap-5">
            <div
              className="flex items-center gap-3 px-5 cursor-pointer"
              onClick={() => setActiveTab("Dining Out")}
            >
              <div
                className="w-[60px] h-[60px] rounded-[50%] flex items-center justify-center"
                style={{
                  backgroundColor: `${
                    activeTab === "Dining Out" ? "#e5f3f3" : "#f8f8f8"
                  }`,
                }}
              >
                <img
                  src={
                    activeTab === "Dining Out"
                      ? "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png"
                      : "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
                  }
                  alt="dining-out-image"
                  className="w-[30px] h-[30px] rounded-[50%]"
                />
              </div>
              <span
                className="text-[20px] text-[#696969]"
                style={{
                  color: `${activeTab === "Dining Out" ? "#ef4f5f" : ""}`,
                }}
              >
                Dining Out
              </span>
            </div>
            <hr className="mb-[-3px]"
              style={{
                backgroundColor: `${
                  activeTab === "Dining Out" ? "#ff7e8b" : ""
                }`,
                height: "0.2rem",
              }}
            />
          </div>
          <div className="flex flex-col px-5 gap-5">
            <div
              className="flex items-center gap-3 px-5 cursor-pointer"
              onClick={() => setActiveTab("NightLife")}
            >
              <div
                className="w-[60px] h-[60px] rounded-[50%] flex items-center justify-center"
                style={{
                  backgroundColor: `${
                    activeTab === "NightLife" ? "#edf4ff" : "#f8f8f8"
                  }`,
                }}
              >
                <img
                  src={
                    activeTab === "NightLife"
                      ? "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png"
                      : "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
                  }
                  alt="night-life-image"
                  className="w-[30px] h-[30px] rounded-[50%]"
                />
              </div>
              <span
                className="text-[20px] text-[#696969]"
                style={{
                  color: `${activeTab === "NightLife" ? "#ef4f5f" : ""}`,
                }}
              >
                NightLife
              </span>
            </div>
            <hr className="mb-[-3px]"
              style={{
                backgroundColor: `${
                  activeTab === "NightLife" ? "#ff7e8b" : ""
                }`,
                height: "0.2rem",
              }}
            />
          </div>
        </div>
      </div>
      {tabContent(activeTab)}
    </>
  );
};

const tabContent = (tab) => {
  switch (tab) {
    case "Delibery":
      return <Delivery />;
    case "Dining Out":
      return <DiningOut />;
    case "NightLife":
      return <NightLife />;
    default:
      return <Delivery />;
  }
};

export default TabOptions;
