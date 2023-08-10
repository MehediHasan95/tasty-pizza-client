import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useMyOrder from "../../hooks/useMyOrder";
import { empty_cart } from "../../utilities/image-constant";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { successToast } from "../../utilities/toastBar";
import {
  faCircleCheck,
  faHourglassEnd,
} from "@fortawesome/free-solid-svg-icons";
import useTitle from "../../hooks/useTitle";

const MyOrder = () => {
  useTitle("My order");
  const [orders, refetch, isLoading] = useMyOrder();
  const [instance] = useAxiosSecure();
  const { user } = useAuth();

  const handleRemoveOrder = (id) => {
    instance.delete(`/order-delete/${id}?uid=${user?.uid}`).then(() => {
      refetch();
      successToast("Order delete successful!");
    });
  };

  return (
    <div>
      <div className="overflow-x-auto mb-20">
        {orders.length > 0 ? (
          <table className="table text-center">
            <thead className="bg-orange text-white text-base">
              <tr>
                <th>Order Date</th>
                <th>Address</th>
                <th>Price</th>
                <th>Transaction ID</th>
                <th>Order Items</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!isLoading &&
                orders.map(
                  ({
                    _id,
                    order_time,
                    fullName,
                    email,
                    phone,
                    address,
                    city,
                    postcode,
                    transaction_id,
                    total_price,
                    carts,
                    payment_status,
                    status,
                  }) => (
                    <tr key={_id}>
                      <th>{order_time}</th>
                      <td>
                        <p>{fullName}</p>
                        <p>{email}</p>
                        <p>{phone}</p>
                        <p>{address}</p>
                        <p>
                          {city} - {postcode}
                        </p>
                      </td>
                      <td>{total_price}tk</td>
                      <td>{transaction_id}</td>
                      <td>
                        {carts.map(({ _id, name, itemId, category, price }) => (
                          <div key={_id} className="border-b my-1">
                            <p>
                              {name} ({category})
                            </p>
                            <p>{price}tk</p>
                            <p>{itemId}</p>
                          </div>
                        ))}
                      </td>
                      <td>
                        <p className="mb-1 uppercase font-bold">
                          {payment_status ? (
                            <span className="text-green-500">
                              Payment Success
                            </span>
                          ) : (
                            <span className="text-red-500">
                              Payment pending
                            </span>
                          )}
                        </p>
                        <p className="uppercase font-bold">
                          {status ? (
                            <span className="text-green-500">
                              Order Confirm
                            </span>
                          ) : (
                            <span className="text-red-500">Order Pending</span>
                          )}
                        </p>
                      </td>
                      <td>
                        {payment_status ? (
                          <>
                            {status ? (
                              <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-2xl text-green-500"
                              />
                            ) : (
                              <FontAwesomeIcon
                                icon={faHourglassEnd}
                                className="text-2xl text-orange animate-spin"
                              />
                            )}
                          </>
                        ) : (
                          <button
                            onClick={() => handleRemoveOrder(_id)}
                            className="w-8 h-8 rounded-full text-platinum hover:text-white hover:bg-platinum bg-opacity-30 duration-300 hover:duration-300"
                          >
                            <FontAwesomeIcon icon={faTrashAlt} />
                          </button>
                        )}
                      </td>
                    </tr>
                  )
                )}
            </tbody>
          </table>
        ) : (
          <div className="grid place-items-center">
            <img src={empty_cart} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default MyOrder;
