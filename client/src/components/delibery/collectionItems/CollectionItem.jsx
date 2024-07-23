import Slider from "react-slick";
import PrevArrow from "../carouselArrows/PrevArrow.jsx";
import NextArrow from "../carouselArrows/NextArrow.jsx";

const collectionItems = [
  {
    id: 1,
    title: "Poha",
    image:
      "https://b.zmtcdn.com/data/o2_assets/1ab6211f526df5d920d41787907d1a051632716576.png",
  },
  {
    id: 2,
    title: "Samosa",
    image:
      "https://b.zmtcdn.com/data/o2_assets/bc0cc8557a06fcd3aacdd7b241cf9db71632716547.png",
  },
  {
    id: 3,
    title: "Kachori",
    image:
      "https://b.zmtcdn.com/data/o2_assets/f9d277eb1668d7abf9235302402b06001632716602.png",
  },
  {
    id: 4,
    title: "Aloo Kachori",
    image:
      "https://b.zmtcdn.com/data/dish_photos/224/42150320317358ff15330ddd0cc5d224.jpg",
  },
  {
    id: 5,
    title: "Jalebi",
    image:
      "https://b.zmtcdn.com/data/o2_assets/348a8b7fdafc56ba233c77113e7e3a491632716601.png",
  },
  {
    id: 6,
    title: "Paratha",
    image:
      "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
  },
  {
    id: 7,
    title: "Dosa",
    image:
      "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
  },
  {
    id: 8,
    title: "Sandwich",
    image:
      "https://b.zmtcdn.com/data/o2_assets/fc641efbb73b10484257f295ef0b9b981634401116.png",
  },
  {
    id: 9,
    title: "Tea",
    image:
      "https://b.zmtcdn.com/data/o2_assets/a2163bedb069e3069db0a88d7a3c848f1676534399.png",
  },
  {
    id: 10,
    title: "Idli",
    image:
      "https://b.zmtcdn.com/data/dish_images/d9766dd91cd75416f4f65cf286ca84331634805483.png",
  },
  {
    id: 11,
    title: "Vada",
    image:
      "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
  },
  {
    id: 12,
    title: "Khaman",
    image:
      "https://b.zmtcdn.com/data/dish_photos/646/70c556759b901b0363e7797211656646.jpg",
  },
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <PrevArrow />,
  prevArrow: <NextArrow />,
};

const CollectionItem = () => {
  return (
    <div className="py-[40px] bg-[#f8f8f8] overflow-hidden">
      <div className="max-width">
        <div className="collection-item-heading">Eat what makes you happy</div>
        <Slider {...settings}>
          {collectionItems.map((item) => {
            return (
              <div key={item.id}>
                <div className="h-[170px] w-[170px] rounded-[50%] bg-white">
                  <img
                    className="h-full w-full object-cover rounded-[50%]"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="text-ellipsis overflow-hidden text-[20px] mt-[6px] pl-[40px]">
                  {item.title}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default CollectionItem;
