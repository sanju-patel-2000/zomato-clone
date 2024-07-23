import ExploreSection from "../delibery/exporeSection/ExploreSection";
import AddSection from "../diningOut/addSection/AddSection";
import NightLifeCollection from "./nightLifeCollection/nightLifeCollection";
import NightLifeFillers from "./NightLifeFillters/NightLifeFillers";

const NightLife = () => {
  return (
    <>
      <NightLifeCollection />
      <NightLifeFillers />
      <AddSection />
      <ExploreSection collectionName="NightLife: Night Clubs,pubs and bars in Indore" />
    </>
  );
};

export default NightLife;
