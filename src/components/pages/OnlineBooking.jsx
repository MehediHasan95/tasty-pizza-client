import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Heading from "../shared/Heading";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { Slide } from "react-awesome-reveal";

const OnlineBooking = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-32 px-3 lg:px-0">
      <div className="grid gap-10 lg:gap-40 lg:grid-cols-2">
        <div className="col-span-1">
          <Slide direction="left">
            <Heading
              subTitle={"Fresh From Pizza"}
              title={"Book Online"}
              isLeft={true}
            />
            <div>
              <p className="text-center lg:text-left mb-5">
                Sit amet, consectetur adipiscing elit quisque eget maximus
                velit, non eleifend libero curabitur dapibus mauris sed leo
                cursus aliquetcras suscipit. Sit amet, consectetur adipiscing
                elit quisque eget maximus velit, non eleifend libero curabitur
              </p>
              <button className="flex items-center border-8 border-orange p-3 lg:p-4 bg-raisinBlack text-white text-xl lg:text-4xl font-bold space-x-4 mx-auto lg:mx-0 hover:bg-white hover:text-raisinBlack duration-300 hover:duration-300">
                <FontAwesomeIcon icon={faHeadset} />
                <p>+91 123 456 789</p>
              </button>
            </div>
          </Slide>
        </div>
        <div className="col-span-1">
          <Slide direction="right">
            <form>
              <h1 className="uppercase text-xl lg:text-3xl font-bold text-center py-5">
                Book a Table
              </h1>
              <input
                type="text"
                className="w-full border border-raisinBlack focus:outline-orange p-3 mb-5"
                placeholder="Name"
              />
              <input
                type="email"
                className="w-full border border-raisinBlack focus:outline-orange p-3 mb-5"
                placeholder="Email"
              />
              <select
                defaultValue={null}
                className="w-full border border-raisinBlack focus:outline-orange p-3 mb-5"
              >
                <option selected disabled>
                  How many persons?
                </option>
                <option value="1">Person 1</option>
                <option value="2">Person 2</option>
                <option value="3">Person 3</option>
              </select>
              <input
                type="date"
                className="w-full border border-raisinBlack focus:outline-orange p-3 mb-5"
                placeholder="Date"
              />

              <button className="bg-raisinBlack text-white py-3 w-3/12 rounded-full uppercase hover:bg-white hover:text-raisinBlack hover:border hover:border-raisinBlack duration-300 hover:duration-300">
                Book Now
              </button>
            </form>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default OnlineBooking;
