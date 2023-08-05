import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logo } from "../../utilities/image-constant";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-raisinBlack text-white">
      <div className="max-w-screen-xl mx-auto pt-20 pb-10 px-10 lg:px-0">
        <div className="grid gap-20 lg:grid-cols-3">
          <div className="col-span-1">
            <div className="flex items-center mb-5">
              <img src={logo} alt="logo" className="w-8" />
              <h1 className="text-white text-4xl font-bold">
                <span className="text-orange">Tasty</span>Pizza
              </h1>
            </div>

            <div className="space-y-5">
              <p>
                20 Carrochan Rd, Balloch, Alexandria G83 8EG, UK 69QJ+2F
                Alexandria, United Kingdom
              </p>
              <p>PHONE - +91 123 456 789 0, +91 123 456 789 0</p>
              <p>EMAIL - info@gmail.com</p>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="uppercase font-bold text-xl mb-14">Opening Hours</h1>
            <div className="space-y-5">
              <p className="flex justify-between">
                <span>Mon - Tues :</span> <span>6:00am - 10:00pm</span>
              </p>
              <p className="flex justify-between">
                <span>Wednes - Thurs :</span> <span>6:00am - 10:00pm</span>
              </p>
              <p className="flex justify-between">
                <span>Launch :</span> <span>Everyday</span>
              </p>
              <p className="flex justify-between">
                <span>Sunday :</span>{" "}
                <span className="bg-orange text-white px-4">Closed</span>
              </p>
            </div>
          </div>
          <div className="col-span-1">
            <h1 className="uppercase font-bold text-xl mb-14">Useful Links</h1>
            <div className="space-y-1">
              <p>Privacy Policy</p>
              <p>Order Tracking</p>
              <p>Warranty and Services</p>
              <p>About</p>
              <p>Contact Us</p>
              <p>Wishlist</p>
            </div>
          </div>
        </div>
        <hr className="mt-20 mb-10" />
        <div className="flex flex-col gap-2 lg:flex-row justify-between items-center">
          <h1>Copyright © 2023 - All right reserved by Pizzon</h1>
          <div className="space-x-2">
            <button className="w-8 h-8 bg-gray-700">
              <FontAwesomeIcon icon={faFacebookF} />
            </button>
            <button className="w-8 h-8 bg-gray-700">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button className="w-8 h-8 bg-gray-700">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </button>
            <button className="w-8 h-8 bg-gray-700">
              <FontAwesomeIcon icon={faInstagram} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
