import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAddToCart from "../../hooks/useAddToCart";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { empty_cart } from "../../utilities/image-constant";

const MyCart = () => {
  const [cart] = useAddToCart();
  const [instance] = useAxiosSecure();
  const { carts, refetch, isLoading, totalValue } = cart;

  const handleRemoveCart = (id) => {
    instance.delete(`/remove-cart-item/${id}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {!isLoading && (
            <>
              {carts.length > 0 ? (
                <>
                  {carts.map(
                    ({ _id, name, image, price, quantity, category }) => (
                      <div key={_id} className="flex justify-start mb-2 border">
                        <div className="w-28 h-24 overflow-hidden">
                          <img
                            src={image}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="w-full flex justify-between items-center px-4">
                          <div className="flex justify-between items-center w-3/4">
                            <div>
                              <h1 className="tracking-wider text-xl">{name}</h1>
                              <p className="text-sm">Category: {category}</p>
                            </div>
                            <div className="flex items-center space-x-6">
                              <p className="text-orange font-bold">${price}</p>
                              <p>Quantity: {quantity}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => handleRemoveCart(_id)}
                            className="w-8 h-8 rounded-full text-platinum hover:text-white hover:bg-platinum bg-opacity-30 duration-300 hover:duration-300"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </button>
                        </div>
                      </div>
                    )
                  )}
                </>
              ) : (
                <div className="text-center">
                  <img
                    src={empty_cart}
                    alt="empty_shopping_cart"
                    className="mx-auto"
                  />
                </div>
              )}
            </>
          )}
        </div>
        <div className="col-span-1">
          <div className="p-3 border">
            <h1 className="text-center text-xl lg:text-2xl">Order Summary</h1>
            <hr className="my-2" />
            <div className="flex justify-between">
              <div className="space-y-2">
                <p>Item(s) Subtotal</p>
                <p>Shipping</p>
                <p className="font-bold">Amount Payable</p>
              </div>
              <div className="space-y-2">
                <p className="text-orange font-bold">
                  {totalValue.totalPrice} tk
                </p>
                <p className="text-orange font-bold">0.00 tk</p>
                <p className="text-orange font-bold">
                  {totalValue.totalPrice} tk
                </p>
              </div>
            </div>
            {carts.length > 0 && (
              <Link to="checkout">
                <button className="py-2 bg-orange text-white w-full mt-5 uppercase">
                  Process to Checkout
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
