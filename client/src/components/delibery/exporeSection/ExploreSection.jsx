import ExploreCard from "./ExploreCard";
import { restaurants } from './../../../restaurantsData/delivery';

const ExploreSection = ({ collectionName }) => {
  return (
    <div className="max-width">
      <div className="explore-section-heading">{collectionName}</div>
      <div className="flex flex-wrap justify-between">
        {restaurants.map((restaurant) => {
          return <ExploreCard restaurant={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default ExploreSection;
