import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <div className="max-width pt-[48px] pb-[22px]">
        <div className="flex items-center justify-between mb-[40px]">
          <div className="w-[132px] h-[28px]">
            <img
              className="w-full h-full"
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&amp;crop=198:42;*,*"
              alt="Zomato logo"
            />
          </div>
          <div className="flex gap-3">
            <div className="  cursor-pointer py-[10px] px-[15px] border border-solid border-[#b5b5b5] rounded-[4px] flex gap-1 items-center justify-between overflow-hidden">
              <img
                className="h-[15px] w-[22px] rounded-sm"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_India.png/2560px-Flag_of_India.png"
                alt="Indian flag logo"
              />
              <select className="outline-none border-none bg-[#f8f8f8]">
                <option value="India">India</option>
                <option value="UAE">UAE</option>
              </select>
            </div>
            <div className="cursor-pointer py-[10px] px-[15px] border border-solid border-[#b5b5b5] rounded-[4px] flex gap-1 items-center overflow-hidden">
              <i className="fa-solid fa-globe"></i>
              <select className="outline-none border-none bg-[#f8f8f8]">
                <option value="">English</option>
                <option value="">Türkçe</option>
                <option value="">हिंदी</option>
                <option value="">Português (BR)</option>
                <option value="">Indonesian</option>
                <option value="">Português (PT)</option>
                <option value="">Español</option>
                <option value="">Čeština</option>
                <option value="">Slovenčina</option>
                <option value="">Polish</option>
                <option value="">Italian</option>
                <option value="">Vietnamese</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-5">
          <div>
            <h6 className="text-[14px] mb-[12px]">ABOUT ZOMATO</h6>
            <nav className="flex flex-col text-[#807e7e] text-[14px] gap-1">
              <a href=""> Who We Are</a>
              <a href=""> Blog</a>
              <a href="">Work With Us</a>
              <a href=""> Investor Relations</a>
              <a href=""> Report Fraud</a>
              <a href=""> Press Kit </a>
              <a href="">Contact Us</a>
            </nav>
          </div>
          <div>
            <h6 className="text-[14px] mb-[12px]">ZOMAVERSE</h6>
            <nav className="flex flex-col text-[#807e7e] text-[14px] gap-1">
              <a href=""> Zomato</a>
              <a href="">Blinkit</a>
              <a href="">Feeding India</a>
              <a href="">Hyperpure</a>
              <a href="">Zomaland</a>
              <a href="">Weather Union</a>
            </nav>
          </div>

          <div>
            <h6 className="text-[14px] mb-[12px]">FOR RESTAURANTS</h6>
            <nav className="flex flex-col text-[#807e7e] text-[14px] gap-1">
              <a href="">Partner With Us</a>
              <a href="">Apps For You</a>
            </nav>
          </div>
          <div>
            <h6 className="text-[14px] mb-[12px]">LEARN MORE</h6>
            <nav className="flex flex-col text-[#807e7e] text-[14px] gap-1">
              <a href="">Privacy</a>
              <a href="">Security</a>
              <a href="">Terms</a>
              <a href="">Sitemap</a>
            </nav>
          </div>
          <div className="flex flex-col">
            <h6 className="text-[14px] mb-[12px]">SOCIAL LINKS</h6>
            <div className="flex gap-2 text-[23px]">
              <div>
                <i className="fa-brands fa-linkedin"></i>
              </div>
              <div>
                <i className="fa-brands fa-square-instagram"></i>
              </div>
              <div>
                <i className="fa-brands fa-square-twitter"></i>
              </div>
              <div>
                <i className="fa-brands fa-youtube"></i>
              </div>
              <div>
                <i className="fa-brands fa-facebook"></i>
              </div>
            </div>
            <div className="mt-[20px]">
              <a
                href=""
                className=" inline-block no-underline relative w-[135px] h-[40px] mb-2"
              >
                <img
                  className="w-full h-full object-cover "
                  src="	https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png"
                  alt="App store image"
                />
              </a>
              <a
                href=""
                className="inline-block no-underline relative w-[135px] h-[40px] mb-2"
              >
                <img
                  className="w-full h-full"
                  src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png"
                  alt="Google play store image"
                />
              </a>
            </div>
          </div>
        </div>
        <hr className="mt-[50px] border border-solid border-[#cfcfcf]" />
        <p className="mt-[23px] mb-[13px] text-[13px] text-[#807e7e]">
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2024 © Zomato™ Ltd. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
