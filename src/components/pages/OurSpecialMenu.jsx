import Heading from "../shared/Heading";
import Menu from "./Menu";

const OurSpecialMenu = () => {
  return (
    <div className="my-32 px-3 lg:px-0 bg-raisinBlack">
      <Heading
        subTitle={"Fresh From Pizzon"}
        title={"Our Special Menu"}
        isWhite={true}
      />
      <div className="max-w-screen-xl mx-auto">
        <Menu isWhite={true} limit={true} />
      </div>
    </div>
  );
};

export default OurSpecialMenu;
