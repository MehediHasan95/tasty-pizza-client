import { Slide } from "react-awesome-reveal";
import {
  order1,
  order2,
  order3,
  orderBottom,
  orderTop,
} from "../../utilities/image-constant";

const data = [
  {
    title: "Order your food",
    slogan:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius",
    img: order1,
  },
  {
    title: "Delivery or pick up",
    slogan:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius",
    img: order2,
  },
  {
    title: "Delicious recepie",
    slogan:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius-Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius",
    img: order3,
  },
];

const OrderSection = () => {
  return (
    <div>
      <img src={orderTop} alt="order_top" className="bg-raisinBlack" />
      <div className="bg-orange py-20 ">
        <div className="grid gap-5 lg:gap-20 lg:grid-cols-3 max-w-screen-xl mx-auto">
          {data.map(({ title, slogan, img }, index) => (
            <Slide key={index} direction="up">
              <div className="col-span-1 text-center px-16 lg:px-0">
                <img src={img} alt={title} className="w-16 lg:w-24 mx-auto" />
                <h1 className="text-2xl uppercase font-bold my-2">{title}</h1>
                <p>{slogan}</p>
              </div>
            </Slide>
          ))}
        </div>
      </div>
      <img src={orderBottom} alt="order_bottom" className="bg-white" />
    </div>
  );
};

export default OrderSection;
