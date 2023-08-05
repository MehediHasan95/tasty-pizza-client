import { bannerPizza } from "../../utilities/image-constant";
import { Slide } from "react-awesome-reveal";

const Header = () => {
  return (
    <div className="bg-raisinBlack lg:min-h-[70vh] pt-20">
      <div className="grid grid-cols-2 place-items-center max-w-screen-xl mx-auto">
        <Slide direction="left" cascade>
          <div className="text-white text-center lg:text-left">
            <h1 className="text-5xl lg:text-9xl font-bold uppercase mb-2 lg:mb-5">
              Quality f<span className="text-orange">oo</span>ds
            </h1>
            <p className="text-base lg:text-2xl uppercase lg:tracking-[0.5rem] text-orange">
              Healthy Food for healthy body
            </p>
          </div>
        </Slide>
        <Slide direction="right" cascade>
          <img
            src={bannerPizza}
            alt="banner_pizza"
            className="w-3/4 lg:w-full mx-auto"
          />
        </Slide>
      </div>
    </div>
  );
};

export default Header;
