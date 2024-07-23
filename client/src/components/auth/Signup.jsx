import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

const Signup = () => {
  const { formData, setFormData, setSignup } = useContext(GlobalContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/register",
        formData
      );
      if (response.data.success) {
        setSignup(false);
      }
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div className="w-full h-full bg-[#1c1c1c] opacity-[0.90] text-white absolute z-20 overflow-hidden">
      <div className="min-h-[300px] w-[400px] bg-[#fff] rounded-[6px] pb-[24px] px-[24px] fixed top-[15%] left-[37%] z-50">
        <div className="flex justify-between items-center">
          <h2 className="text-[26px] leading-10 my-[15px] font-medium text-[#4f4f4f]">
            Sign up
          </h2>
          <span
            onClick={() => setSignup(false)}
            className="text-[#4f4f4f] text-[20px]"
          >
            <i className="fa-solid fa-xmark"></i>
          </span>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <div className="w-full flex items-center p-1 border border-solid border-[#cfcfcf] rounded-[2px] text-[#4f4f4f] text-[16px]">
            <input
              className="h-full w-full text-[16px] border-none outline-none text-[#1c1c1c] pl-3 py-2"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Name"
            />
          </div>
          <div className="w-full flex items-center p-1 border border-solid border-[#cfcfcf] rounded-[2px] text-[#4f4f4f] text-[16px]">
            <input
              className="h-full w-full text-[16px] border-none outline-none text-[#1c1c1c] pl-3 py-2"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
          </div>
          <div className="w-full flex items-center p-1 border border-solid border-[#cfcfcf] rounded-[2px] text-[#4f4f4f] text-[16px]">
            <input
              className="h-full w-full text-[16px] border-none outline-none text-[#1c1c1c] pl-3 py-2"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Password"
            />
          </div>
          <div className="flex justify-start items-center gap-3 p-1">
            <input
              className=" w-[18px] h-[18px] cursor-pointer rounded-[4px] mb-3"
              type="checkbox"
              required
            />
            <p className="text-[12px] text-[#696969] tracking-wide">
              I agree to Zomato's{" "}
              <span className="text-[#ef4f5f]">Term of Service</span>,{" "}
              <span className="text-[#ef4f5f]">Privacy Policy</span> and{" "}
              <span className="text-[#ef4f5f]">Content Policies</span>
            </p>
          </div>
          <button
            type="submit"
            className="min-w-[150px] min-h-[40px] rounded-[6px]  cursor-pointer text-[16px] text-white border-[0px] border-solid border-[#ef4f5f] bg-[#ef4f5f] px-4 transition-all duration-75 ease-linear active:scale-110"
          >
            Create account
          </button>
          <p className="text-[#363636] mb-[10px]">
            Already have an account?
            <span className="text-[#ef4f5f] cursor-pointer ml-1">Log in</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
