import { Bounce } from "react-awesome-reveal";
import Heading from "../shared/Heading";

const special = [
  {
    title: "Maxican Green Wave",
    img: "https://plus.unsplash.com/premium_photo-1674147605295-53b30e11d8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  },
  {
    title: "Double Cheese Pizza",
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    title: "Margherita Pizza",
    img: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60",
  },
];

const SpecialSection = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Heading subTitle={"Fresh From Pizzon"} title={"Our Speciality"} />
      <div className="grid gap-5 lg:grid-cols-3">
        {special.map(({ title, img }, index) => (
          <Bounce key={index}>
            <div>
              <div className="col-span-1 w-52 lg:w-96 h-52 lg:h-96 rounded-full mx-auto overflow-hidden border">
                <img src={img} className="w-full h-full object-cover" />
              </div>
              <h1 className="text-xl lg:text-3xl font-bold uppercase mt-3 text-center hover:text-orange">
                {title}
              </h1>
            </div>
          </Bounce>
        ))}
      </div>
    </div>
  );
};

export default SpecialSection;
