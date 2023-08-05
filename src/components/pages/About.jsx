import { Slide } from "react-awesome-reveal";
import { aboutPizzon } from "../../utilities/image-constant";
import Heading from "../shared/Heading";

const About = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32 px-3 lg:px-0">
      <div className="grid gap-10 lg:gap-40 lg:grid-cols-2 place-items-center">
        <div className="col-span-1">
          <Slide direction="left">
            <Heading
              subTitle={"Delicious Restaurant"}
              title={"About Pizzon"}
              isLeft={true}
            />
            <p className="mb-7 lg:mb-9 text-center lg:text-left">
              Sit amet, consectetur adipiscing elit quisque eget maximus velit,
              non eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit. Sit amet, consectetur adipiscing elit
              quisque eget maximus velit, non eleifend libero curabitur Sit
              amet, consectetur adipiscing elit quisque eget maximus velit, non
              eleifend libero curabitur dapibus mauris sed leo cursus
              aliquetcras suscipit. Sit amet, consectetur adipiscing elit
              quisque eget maximus velit, non eleifend libero curabitur
            </p>
            <div className="text-center lg:text-left">
              <button className="bg-orange text-white py-3 w-3/12 rounded-full uppercase hover:bg-white hover:text-orange hover:border hover:border-orange duration-300 hover:duration-300">
                View More
              </button>
            </div>
          </Slide>
        </div>
        <div className="col-span-1">
          <Slide direction="right">
            <img
              src={aboutPizzon}
              alt="about_pizzon"
              className="w-3/4 lg:w-full mx-auto lg:mx-0"
            />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default About;
