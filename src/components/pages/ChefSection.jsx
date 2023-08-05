import Heading from "../shared/Heading";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const chefData = [
  {
    name: "Olivia Anderson",
    img: "https://themes.templatescoder.com/pizzon/html/demo/1-2/02-Classic/images/chef-2.jpg",
    title: "Executive Chef",
  },
  {
    name: "Ethan Ramirez",
    img: "https://themes.templatescoder.com/pizzon/html/demo/1-2/02-Classic/images/chef-1.jpg",
    title: "Sous Chef",
  },
  {
    name: "Sophia Lee",
    img: "https://themes.templatescoder.com/pizzon/html/demo/1-2/02-Classic/images/chef-4.jpg",
    title: "Pastry Chef",
  },
  {
    name: "William Johnson",
    img: "https://themes.templatescoder.com/pizzon/html/demo/1-2/02-Classic/images/chef-3.jpg",
    title: "Grill Master",
  },
  {
    name: "Ava Martinez",
    img: "https://themes.templatescoder.com/pizzon/html/demo/1-2/02-Classic/images/chef-4.jpg",
    title: "Saute Specialist",
  },
];

const ChefSection = () => {
  return (
    <div className="my-32 px-3 lg:px-0 bg-raisinBlack">
      <Heading
        subTitle={"Meet our experts"}
        title={"Our Best Chef"}
        isWhite={true}
      />

      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="max-w-screen-xl mx-auto"
      >
        {chefData.map(({ name, img, title }, index) => (
          <SwiperSlide
            key={index}
            className="w-[18.75rem] h-[21.584rem] bg-white mb-32 hover:scale-105 duration-300 hover:duration-300"
          >
            <div className="h-[16.875rem]">
              <img
                src={img}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center my-3">
              <h1 className="text-xl font-bold uppercase">{name}</h1>
              <p>{title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ChefSection;
