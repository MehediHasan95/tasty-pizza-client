import useMyOrder from "../../hooks/useMyOrder";

const MyOrder = () => {
  const [orders, isLoading] = useMyOrder();

  return (
    <div>
      <div className="overflow-x-auto mb-20">
        <table className="table text-center">
          <thead className="bg-orange text-white text-base">
            <tr>
              <th>Order Date</th>
              <th>Address</th>
              <th>Price</th>
              <th>Transaction ID</th>
              <th>Transaction ID</th>
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
                        <div key={_id} className="border my-1">
                          <p>
                            {name} ({category})
                          </p>
                          <p>{price}tk</p>
                          <p>{itemId}</p>
                        </div>
                      ))}
                    </td>
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
