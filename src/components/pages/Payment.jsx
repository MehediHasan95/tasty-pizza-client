import moment from "moment/moment";
import useAddToCart from "../../hooks/useAddToCart";
import { useReducer } from "react";
import { SHIPPING_INPUT } from "../../utilities/auth-constant";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { errorToast } from "../../utilities/toastBar";

const Payment = () => {
  const { user } = useAuth();
  const [cart] = useAddToCart();
  const { carts, totalValue } = cart;
  const [instance] = useAxiosSecure();
  const time = moment().format("DD MMMM YYYY");
  const order_time = moment().format("MMMM DD,YYYY hh:mm:ss A");
  const initialState = {
    fullName: "",
    email: "",
    phone: "",
    address: "",
    postcode: "",
    city: "",
  };
  const shippingReducer = (state, action) => {
    switch (action.type) {
      case SHIPPING_INPUT:
        return {
          ...state,
          [action.payload.name]: action.payload.value,
        };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer(shippingReducer, initialState);

  const handleCreatePaymentIntent = () => {
    const { fullName, email, phone, address, postcode, city } = state;
    if (fullName && email && phone && address && postcode && city) {
      instance
        .post(`/create-payment-intent?uid=${user?.uid}`, {
          ...state,
          carts,
          total_price: totalValue.totalPrice,
          order_time,
          uid: user.uid,
        })
        .then((res) => {
          if (res.data.url) {
            window.location.replace(res.data.url);
          }
        });
    } else {
      errorToast("empty filed can not be submitted");
    }
  };

  return (
    <div>
      <div className="grid gap-3 lg:grid-cols-3">
        <div className="lg:col-span-2 p-3">
          <h1 className="text-xl uppercase font-bold mb-5">Shipping Details</h1>
          <div>
            <label>
              <p className="mb-1">Full Name*</p>
              <input
                type="text"
                name="fullName"
                onChange={(e) =>
                  dispatch({
                    type: SHIPPING_INPUT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                className="w-full p-3 mb-3 border outline-none"
              />
            </label>
            <label>
              <p className="mb-1">Email</p>
              <input
                type="email"
                name="email"
                onChange={(e) =>
                  dispatch({
                    type: SHIPPING_INPUT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                className="w-full p-3 mb-3 border outline-none"
              />
            </label>
            <label>
              <p className="mb-1">Phone No*</p>
              <input
                type="text"
                name="phone"
                onChange={(e) =>
                  dispatch({
                    type: SHIPPING_INPUT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                className="w-full p-3 mb-3 border outline-none"
              />
            </label>
            <label>
              <p className="mb-1">Address*</p>
              <input
                type="text"
                name="address"
                onChange={(e) =>
                  dispatch({
                    type: SHIPPING_INPUT,
                    payload: { name: e.target.name, value: e.target.value },
                  })
                }
                className="w-full p-3 mb-3 border outline-none"
              />
            </label>

            <div className="flex justify-between">
              <div className="w-[49%]">
                <p className="mb-1">Postcode/Zip*</p>
                <input
                  type="text"
                  name="postcode"
                  onChange={(e) =>
                    dispatch({
                      type: SHIPPING_INPUT,
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                  className="w-full p-3 mb-3 border outline-none"
                />
              </div>
              <div className="w-[49%]">
                <p className="mb-1">Town/City*</p>
                <input
                  type="text"
                  name="city"
                  onChange={(e) =>
                    dispatch({
                      type: SHIPPING_INPUT,
                      payload: { name: e.target.name, value: e.target.value },
                    })
                  }
                  className="w-full p-3 mb-3 border outline-none"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-1 p-3">
          <h1 className="text-xl uppercase font-bold mb-5">Your Order</h1>

          {carts.map(({ name, price, quantity, image }) => (
            <>
              <div className="flex items-center space-x-3">
                <div className="w-24 h-24 overflow-hidden">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="uppercase font-bold">{name}</h1>
                  <p className="text-orange font-bold">{price} tk</p>
                  <p>Qty: {quantity}</p>
                </div>
              </div>
              <hr className="my-3" />
            </>
          ))}

          <div className="mt-10">
            <div className="flex justify-between bg-[#F5F5F5] p-3">
              <div>
                <p>Order Places:</p>
                <p>Item(s) Subtotal:</p>
                <p>Shipping</p>
                <p className="text-orange font-bold">Grand Total:</p>
              </div>
              <div>
                <p>{time}</p>
                <p className="text-orange font-bold">
                  {totalValue.totalPrice} tk
                </p>
                <p>0.00 tk</p>
                <p className="text-orange font-bold">
                  {totalValue.totalPrice} tk
                </p>
              </div>
            </div>
            <button
              onClick={handleCreatePaymentIntent}
              className="py-2 bg-orange text-white w-full rounded-full mt-5 uppercase"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
