import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Header = () => {
  const { isLoggedIn, setIsLoggedIn, setLogin, setSignup, hidden, setHidden } =
    useContext(GlobalContext);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <div className="max-width w-full h-[4.5rem] flex items-center gap-10">
      <img
        className="max-w-[127px] h-[27px]"
        src="	https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato logo"
      />
      <div className="h-[80%] grid grid-cols-9">
        <div className="col-span-7 grid grid-cols-3 gap-2 p-1 h-full border border-solid border-[rgb(232,232,232)] rounded-[2px] header-shadow">
          <div className="h-full p-1 flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-red-400 text-xl"></i>
            <input
              className="h-full grow border-none outline-none"
              type="text"
              placeholder="Indore, India"
            />
          </div>
          <div className="col-span-2 h-full p-1 flex items-center gap-2">
            <div className="w-[2px] h-[45%] bg-[#c3baba]"></div>
            <i class="fa-solid fa-magnifying-glass text-xl text-[#b7afaf] ml-3 "></i>
            <input
              className="h-full grow border-none outline-none"
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
            />
          </div>
        </div>

        {isLoggedIn ? (
          <div className="h-full col-span-2 text-[20px] relative flex flex-col justify-center items-end">
            <div
              className="h-[32px] w-[32px] text-center border-[2px] border-solid border-[#272525] rounded-full text-[#a81414] transition-all duration-100 ease-linear active:scale-110"
              onClick={() => setHidden("block")}
            >
              <i className="fa-solid fa-user"></i>
            </div>
            <div
              className={`${hidden} absolute top-[55px] rounded-[2px] pl-5 pr-10 py-3 bg-[rgb(255,255,255)] my-shadow flex flex-col gap-4 justify-center items-center cursor-pointer right-[-30px] `}
            >
              <i class="fa-solid fa-right-from-bracket" onClick={logout}></i>
              <i class="fa-solid fa-gear"></i>
            </div>
          </div>
        ) : (
          <div className="h-full col-span-2 flex items-center justify-end gap-[20px]">
            <div>
              <button
                onClick={() => setLogin(true)}
                className="text-[#817d7dcf] text-[18px]"
              >
                Log in
              </button>
            </div>
            <div>
              <button
                onClick={() => setSignup(true)}
                className="text-[#817d7dcf] text-[18px]"
              >
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
