import Heading from "../shared/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Mousewheel } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const reviews = [
  {
    name: "Alexandra Mitchell",
    rating: 5,
    review_text:
      "I had the most incredible pizza experience at this place! From the moment I stepped in, the delightful aroma of freshly baked pizza greeted me, making my mouth water in anticipation. The atmosphere was warm and inviting, and the friendly staff made me feel right at home. Now, let's talk about the pizza itself. Oh my, it was an absolute masterpiece! The crust was thin, perfectly crispy, and had that wonderful smoky flavor that only a wood-fired oven can produce.",
  },
  {
    name: "Ryan Turner",
    rating: 4,
    review_text:
      "I recently visited this pizza joint, and overall, it was a satisfying experience. The ambiance was casual and relaxed, making it a great spot for a laid-back evening with friends. The service was prompt and friendly, and our pizzas arrived hot and fresh. I ordered their classic Margherita pizza, as I wanted to gauge the quality of their simple, traditional offering. The crust was thinner than I expected, but it had a nice crunch and a pleasant, slightly charred taste.",
  },
  {
    name: "Emma Thompson",
    rating: 5,
    review_text:
      "Oh my goodness, this pizza was out of this world! The crust was perfectly thin and crispy, just the way I like it. The sauce had a delightful tang, and the toppings were fresh and abundant. I ordered the 'Meat Lover's' pizza, and it was a carnivore's dream come true. Every bite was a burst of flavor, and I couldn't get enough. The service was impeccable, and the restaurant had a cozy ambiance. I can't wait to come back for more of this pizza perfection!",
  },
  {
    name: "Andrew Johnson",
    rating: 4,
    review_text:
      "I had a great pizza experience at this place. The crust was good, with a nice chewy texture, and the sauce had a pleasant sweetness to it. I opted for the 'Veggie Supreme,' and I loved the variety of colorful vegetables on top. The pizza was well-balanced and not overly greasy. The only reason I'm giving it 4 stars instead of 5 is that the service was a bit slow, but the taste made up for it. I'll definitely be back to try their other pizzas!",
  },
  {
    name: "Sophie Anderson",
    rating: 3,
    review_text:
      "It was an okay pizza experience. The crust was a bit too thick for my liking, and the toppings seemed a little sparse. The flavor was decent, but it didn't blow me away. I might give it another chance to try a different pizza next time. The service was friendly, though, and the prices were reasonable.",
  },
  {
    name: "James Roberts",
    rating: 5,
    review_text:
      "Absolutely loved the pizza here! The crust was like a heavenly blend of crispy and chewy, and the sauce had a nice zing to it. I went with the 'Hawaiian Paradise,' and the combination of ham and pineapple was surprisingly delicious. Each slice was like a tropical getaway in my mouth. The staff was attentive and helpful, and the atmosphere was lively. This place has earned a spot on my list of favorite pizza joints.",
  },
  {
    name: "Grace Wilson",
    rating: 2,
    review_text:
      "I'm sorry to say that I was disappointed with the pizza I had here. The crust was undercooked and doughy, and the sauce lacked flavor. The toppings were also uninspiring. It's a shame because the reviews were promising, but my experience didn't match up. I hope they can work on improving their pizza.",
  },
];

const CustomerReview = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32 px-3 lg:px-0">
      <Heading subTitle={"What Say Our Clients"} title={"Customer Reviews"} />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Mousewheel, Autoplay]}
        className="h-52"
      >
        {reviews.map(({ name, rating, review_text }, index) => (
          <SwiperSlide
            key={index}
            className="grid place-items-center text-center"
          >
            <div>
              <h1 className="text-xl lg:text-3xl font-bold uppercase">
                {name}
              </h1>
              <div className="flex justify-center my-3">
                <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              </div>
              <p>{review_text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
