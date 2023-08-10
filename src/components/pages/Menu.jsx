import { useEffect, useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const menuCategory = ["all", "pizza", "burger", "desert", "drink", "salad"];

const Menu = ({ isWhite, limit }) => {
  useTitle("Menu");
  const [selectIndex, setSelectIndex] = useState(0);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const selectCategory = menuCategory[selectIndex];
    axios
      .get(
        `https://tasty-pizza-server.vercel.app/all-items?category=${selectCategory}&limit=${
          limit ? 8 : 0
        }`
      )
      .then((res) => {
        setMenu(res.data);
      });
  }, [limit, selectIndex]);

  return (
    <div
      className={`max-w-screen-xl mx-auto px-3 lg:px-0 ${
        isWhite ? "text-white" : "text-raisinBlack my-10"
      }`}
    >
      <Tabs
        selectedIndex={selectIndex}
        onSelect={(index) => setSelectIndex(index)}
      >
        <TabList className="max-w-max flex mx-auto bg-[#2B2C2D] text-white rounded-full">
          {menuCategory.map((e, index) => (
            <Tab
              key={index}
              className="w-20 lg:w-40 py-1 lg:py-2 text-center rounded-full cursor-pointer uppercase"
              selectedClassName="bg-orange border-none text-white outline-none"
            >
              {e}
            </Tab>
          ))}
        </TabList>

        {menuCategory.map((e, index) => (
          <TabPanel key={index}>
            {menu.length > 0 ? (
              <div className="grid gap-3 lg:gap-10 md:grid-cols-2 lg:grid-cols-4 py-8">
                {menu?.map(({ _id, name, price, description, image }) => (
                  <div key={_id} className="text-center">
                    <Link to={`/item-detail/${_id}`}>
                      <div className="w-40 lg:w-52 h-40 lg:h-52 mx-auto rounded-full overflow-hidden hover:scale-105 duration-300 hover:duration-300">
                        <img
                          src={image}
                          alt={name}
                          className="w-full h-full object-cover "
                        />
                      </div>

                      <h1 className="text-base lg:text-xl hover:text-orange my-3 uppercase cursor-pointer">
                        {name}
                      </h1>
                    </Link>

                    <p className="text-[#808182]">
                      {description?.slice(0, 80)}
                    </p>
                    <p className="text-orange font-bold my-3">${price}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="min-h-[50vh] grid place-items-center">
                <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
              </div>
            )}
          </TabPanel>
        ))}
      </Tabs>
    </div>
  );
};

export default Menu;
