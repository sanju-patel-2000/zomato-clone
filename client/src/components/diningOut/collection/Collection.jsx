import Slider from "react-slick";
import NextArrow from "./../../delibery/carouselArrows/NextArrow";
import PrevArrow from "./../../delibery/carouselArrows/PrevArrow";

const resData = [
  {
    id: 1,
    imageUrl:
      "https://b.zmtcdn.com/data/collections/1749fe546fc6c0fb1dfe9f284984a9fc_1718628023.png",
    title: "Newly opened places",
    place: 9,
  },
  {
    id: 2,
    imageUrl:
      "https://b.zmtcdn.com/data/collections/1861a2246de9e8cc96569b5dc4c3405c_1685696585.jpg",
    title: "Best Luxury Dining Places",
    place: 12,
  },
  {
    id: 3,
    imageUrl:
      "https://b.zmtcdn.com/data/collections/aaccef7199995c73258750f61c1961f0_1685696893.jpg",
    title: "Romantic Dining Places",
    place: 11,
  },
  {
    id: 4,
    imageUrl:
      "	https://b.zmtcdn.com/data/collections/61d06b1dc0a478a6216bcf07ff8b2d67_1685698994.jpg",
    title: "Great Cafes",
    place: 20,
  },
  {
    id: 5,
    imageUrl:
      "https://b.zmtcdn.com/data/collections/047d79ba26a7d5fec76b22ecf4a5ae02_1685698329.png",
    title: "Local Favoorite Places",
    place: 12,
  },
  {
    id: 6,
    imageUrl:
      "	https://b.zmtcdn.com/data/collections/8049ed160722a4dcf04adde41aaac43e_1718626389.jpg",
    title: "Pan Asian Restaurants",
    place: 10,
  },
  {
    id: 7,
    imageUrl:
      "	https://b.zmtcdn.com/data/collections/d54e4b6a1158807ed119c9741510ea73_1685698615.jpg",
    title: "Seren Rooftop Places",
    place: 14,
  },
  {
    id: 8,
    imageUrl:
      "https://b.zmtcdn.com/data/collections/6d15bb3be793058440ed5e7006149c07_1685697152.jpg",
    title: "Great Buffets",
    place: 13,
  },
];

const Collection = () => {
  const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="py-[40px] bg-[rgb(248,248,248)] overflow-hidden">
      <div className="max-width">
        <h2 className="text-[#1c1c1c] text-[30px] pb-[26px]">Collections</h2>
        <div className="flex justify-between mb-4">
          <h6 className="text-[#363636] text-[18px]">
            Explore curated lists of top restaurants, cafes, pubs, and bars in
            Indore, based on trends
          </h6>
          <div className="flex gap-2 items-center text-[#e03546] text-[16px]">
            <span>All collections in Indore</span>
            <i className="fa-solid fa-caret-right"></i>
          </div>
        </div>
        <Slider {...settings}>
          {resData.map((item) => {
            return (
              <div key={item.id}>
                <div className="h-[320px] w-[260px] mr-[20px] rounded-[6px] relative">
                  <img
                    className="h-full w-full rounded-[6px] object-cover"
                    src={item.imageUrl}
                  />
                  <div className="h-full w-full rounded-[6px] absolute left-0 top-0 linear-gradiant"></div>
                  <div>
                    <p className="absolute left-[16px] bottom-[30px] text-[18px] text-[#fff]">{item.title}</p>
                    <div className="flex gap-2 items-center absolute left-[16px] bottom-[10px] text-[14px] text-[#fff]">
                      <p>{item.place} Places</p>
                      <i className="fa-solid fa-caret-right"></i>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Collection;

