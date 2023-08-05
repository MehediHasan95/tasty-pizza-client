import {
  faAsterisk,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import swal from "sweetalert";
import axios from "axios";
import { errorToast, successToast } from "../../utilities/toastBar";
import useAddToCart from "../../hooks/useAddToCart";
import { ROLE } from "../../utilities/auth-constant";

const ItemDetail = () => {
  const { user, role } = useAuth();
  const navigate = useNavigate();
  const [carts] = useAddToCart();

  const { _id, name, price, image, category, description, quantity } =
    useLoaderData();
  const [selectedQty, setSelectedQty] = useState(1);
  let warningMsg = "";

  const handleQuantity = (toggle) => {
    if (toggle) {
      setSelectedQty(quantity === selectedQty ? selectedQty : selectedQty + 1);
    } else {
      setSelectedQty(selectedQty - 1 || 1);
    }
  };

  if (selectedQty === quantity) {
    warningMsg = "We have no more in stock";
  }

  const handleAddToCart = () => {
    if (user) {
      axios
        .post("https://tasty-pizza-server.vercel.app/add-to-cart", {
          uid: user?.uid,
          itemId: _id,
          name,
          price,
          image,
          category,
          quantity: selectedQty,
        })
        .then((res) => {
          if (res.data.insertedId) {
            carts.refetch();
            successToast(`"${name}" item has been added to your cart`);
          } else {
            errorToast(`"${name}" item has been already added`);
          }
        });
    } else {
      swal({
        title: "Please login",
        text: "You are not logged in",
        icon: "warning",
        button: "Login",
      }).then((value) => {
        if (value) {
          navigate("/auth");
        }
      });
    }
  };

  return (
    <div className="min-h-screen max-w-screen-xl mx-auto px-3 lg:px-0 my-10">
      <div className="grid gap-3 lg:gap-5 lg:grid-cols-2 place-items-center">
        <div className="col-span-1">
          <div className="w-80 lg:w-[30rem] h-80 lg:h-[30rem] rounded-full mx-auto overflow-hidden">
            <img
              src={image}
              alt="item_pizza"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="col-span-1">
          <div>
            <h1 className="uppercase text-xl lg:text-2xl font-bold tracking-wider">
              {name}
            </h1>

            <p className="text-orange text-xl my-5">${price}</p>
            <p className="text-[#808182] my-5">{description}</p>

            <p className="my-5 tracking-widest">
              Category:{" "}
              <span className="text-orange uppercase">{category}</span>
            </p>
            <p className="my-5 tracking-widest">
              Stock:
              <span className="text-orange uppercase mx-2">{quantity}</span>
              <small>(items)</small>
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <div className="flex items-center space-x-2">
              <p>Quantity:</p>
              <button
                onClick={() => handleQuantity(false)}
                className="btn rounded-none border-none"
              >
                -
              </button>
              <p className="px-8 py-2 border">{selectedQty}</p>
              <button
                onClick={() => handleQuantity(true)}
                className="btn rounded-none border-none"
              >
                +
              </button>
            </div>

            {role === ROLE && (
              <button
                onClick={handleAddToCart}
                className="w-2/5 py-2 bg-orange text-white uppercase"
              >
                <FontAwesomeIcon icon={faShoppingBasket} className="me-2" />
                <span>Add to Cart</span>
              </button>
            )}
          </div>

          <div className="h-16">
            {warningMsg && (
              <p className="text-platinum my-3">
                <FontAwesomeIcon icon={faAsterisk} className="me-2" />
                {warningMsg}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
