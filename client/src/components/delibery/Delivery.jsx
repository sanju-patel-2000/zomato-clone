import Filters from "./filters/Filters";
import CollectionItem from "./collectionItems/CollectionItem";
import TopBrand from "./topBrands/TopBrand";
import ExploreSection from "./exporeSection/ExploreSection";

const Delivery = () => {
  return (
    <div className="mt-[8px]">
      <Filters />
      <CollectionItem />
      <TopBrand />
      <ExploreSection collectionName="Food delivery restaurants in Indore" />
    </div>
  );
};

export default Delivery;
