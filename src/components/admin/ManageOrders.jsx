import useAdminOrder from "../../hooks/useAdminOrder";

const ManageOrders = () => {
  const [allOrders, isLoading] = useAdminOrder();

  return (
    <div>
      <div>
        <h1 className="text-xl lg:text-2xl mb-3">
          Total order list ({allOrders?.length} - orders)
        </h1>
        {!isLoading &&
          allOrders.map(
            ({
              _id,
              fullName,
              email,
              total_price,
              order_time,
              transaction_id,
              phone,
              address,
              city,
              postcode,
              carts,
              status,
            }) => (
              <div key={_id} className="p-3 mb-3 bg-base-300">
                <h1 className="text-xl lg:text-2xl">Transaction details</h1>
                <hr />
                <div className="flex justify-between items-center">
                  <div>
                    <h1>{fullName}</h1>
                    <p className="leading-[0.50rem] text-sm">Email: {email}</p>
                  </div>
                  <div className="text-right">
                    <p>Gross amount</p>
                    <p className="text-xl lg:text-3xl font-bold">
                      {total_price} /-Tk
                    </p>
                  </div>
                </div>
                <div className="my-3">
                  <p>{order_time}</p>
                  <p>Transaction ID: {transaction_id}</p>
                  <p>Phone No: {phone}</p>

                  <p>
                    Delivery address: {address}, {city} - {postcode}
                  </p>
                </div>
                <div>
                  <table className="table bg-base-200 rounded-none">
                    <thead className="text-sm border-b">
                      <th>Order Details</th>
                      <th className="text-right">Category</th>
                      <th className="text-right">Quantity</th>
                      <th className="text-right">Price</th>
                    </thead>
                    <tbody>
                      {carts.map(
                        ({ _id, itemId, name, category, price, quantity }) => (
                          <tr key={_id}>
                            <td className="uppercase">
                              {name} - [{itemId}]
                            </td>
                            <td className="text-right">{category}</td>
                            <td className="text-right">{quantity}</td>
                            <td className="text-right">{price}tk</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          )}
      </div>
    </div>
  );
};

export default ManageOrders;
