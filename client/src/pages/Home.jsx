import { useContext } from "react";
import Header from "../components/header/Header";
import TabOptions from "../components/tabOptions/TabOptions";
import Footer from "../components/footer/Footer";
import ExploreOption from "../components/ExploreThing/ExploreOption";
import Login from "../components/auth/Login";
import Signup from "../components/auth/Signup";
import { GlobalContext } from "../context/GlobalContext";

const Home = () => {
  const {login,setLogin,signup,setSignup} = useContext(GlobalContext)
  return (
    <div className="relative">
      {login ? <Login setLogin={setLogin} /> : <></>}
      {signup ? <Signup setSignup={setSignup} /> : <></>}
      <Header setLogin={setLogin} setSignup={setSignup} />
      <TabOptions />
      <ExploreOption />
      <Footer />
    </div>
  );
};

export default Home;
