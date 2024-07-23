import Collection from "./collection/Collection";
import DiningFilters from "./diningFilters/DiningFilters";
import ExploreSection from "./../delibery/exporeSection/ExploreSection";
import AddSection from "./addSection/AddSection";

const DiningOut = () => {
  return (
    <>
      <Collection />
      <DiningFilters />
      <AddSection />
      <ExploreSection collectionName="Trending Dining Out restaurants in Indore" />
    </>
  );
};

export default DiningOut;
