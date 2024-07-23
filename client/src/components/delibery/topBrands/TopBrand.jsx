import Slider from "react-slick";
import PrevArrow from "../carouselArrows/PrevArrow";
import NextArrow from "../carouselArrows/NextArrow";


const topBrands = [
  {
    id: 13,
    title: "McDonald's",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625165086.png?output-format=webp",
  },
  {
    id: 14,
    title: "Nafees Restaurant",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/948574cd50798ba77c066b93e11b0e24_1617972221.png?output-format=webp",
  },
  {
    id: 15,
    title: "Oye24",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/663fe0524260a8b13f7e29234f6b0246_1650443683.png?output-format=webp",
  },
  {
    id: 16,
    title: "Tinku's",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/e8615ce7298eee6684772eab78020240_1617972313.png?output-format=webp",
  },
  {
    id: 17,
    title: "Pizza Hut",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/7059708ecf9568fc43490b7dad4c8f85_1672382255.png?output-format=webp",
  },
  {
    id: 18,
    title: "KFC",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433238.png?output-format=webp",
  },
  {
    id: 19,
    title: "Burger Farm",
    image:
      "https://b.zmtcdn.com/data/brand_creatives/logos/f905a1891242f846e44a8d1f292a13d8_1698914856.png?output-format=webp",
  }, 
];

const settings = {
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  nextArrow: <PrevArrow/>,
  prevArrow: <NextArrow/>,
};

const TopBrand = () => {
  return (
    <div className="py-[40px] overflow-hidden">
      <div className="max-width">
        <div className="top-brands-heading">Top brands for you </div>
        <Slider {...settings}>
          {topBrands.map((item) => {
            return (
              <div key={item.id}>
                <div className="h-[170px] w-[170px] rounded-[50%] bg-white shadow-lg flex justify-center items-center">
                  <img
                    className="h-[120px] w-[120px] object-cover rounded-[25%]"
                    src={item.image}
                    alt={item.title}
                  />
                </div>
                <div className="text-ellipsis overflow-hidden mt-[6px] pl-[40px]">
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

export default TopBrand;
