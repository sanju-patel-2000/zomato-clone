import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

const Login = () => {
  const { setIsLoggedIn, setLogin } = useContext(GlobalContext);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/login", loginData);
      console.log(res);
      if (res.data.success) {
        setIsLoggedIn(res.data.success);
        localStorage.setItem("isLoggedIn", res.data.success);
        setLogin(false);
      }
    } catch (error) {
      alert("Invalid password");
    }
  };

  return (
    <div className="w-full h-full bg-[#1c1c1c] opacity-[0.90] text-white absolute z-20 overflow-hidden">
      <div className="min-h-[300px] w-[450px] bg-[#fff] rounded-[6px] pb-[24px] px-[24px] fixed top-1/4 left-1/3 z-50">
        <div className="flex justify-between items-center">
          <h2 className="text-[26px] leading-10 my-[15px] font-medium text-[#4f4f4f]">
            Login
          </h2>
          <span
            onClick={() => setLogin(false)}
            className="text-[#4f4f4f] text-[20px]"
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="w-full flex items-center p-1 border border-solid border-[#cfcfcf] rounded-[2px] text-[#4f4f4f] text-[16px]">
            <input
              className="h-full w-full text-[16px] border-none outline-none text-[#1c1c1c] pl-3 py-2"
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="w-full flex items-center p-1 border border-solid border-[#cfcfcf] rounded-[2px] text-[#4f4f4f] text-[16px]">
            <input
              className="h-full w-full text-[16px] border-none outline-none text-[#1c1c1c] pl-3 py-2 bg-white"
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="min-w-[150px] min-h-[40px] rounded-[6px]  cursor-pointer text-[16px] text-white border-[0px] border-solid border-[#ef4f5f] bg-[#ef4f5f] px-4 transition-all duration-75 ease-linear active:scale-110"
          >
            Log in
          </button>
          <p className="text-[#363636] mb-[10px]">
            New to Zomato?
            <span
              onClick={() => {}}
              className="text-[#ef4f5f] cursor-pointer ml-1"
            >
              Create account
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
