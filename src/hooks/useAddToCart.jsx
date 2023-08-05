import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAddToCart = () => {
  const { user, loading } = useAuth();
  const [instance] = useAxiosSecure();

  const {
    refetch,
    data: carts = [],
    isLoading,
  } = useQuery({
    queryKey: ["add-to-cart"],
    enabled: !loading,
    queryFn: async () => {
      const res = await instance.get(`/add-to-cart?uid=${user?.uid}`);
      return res.data;
    },
  });

  const totalValue = carts.reduce(
    (accumulator, item) => {
      accumulator.totalQty += item.quantity;
      accumulator.totalPrice += item.quantity * item.price;
      return accumulator;
    },
    { totalQty: 0, totalPrice: 0 }
  );

  return [{ carts, refetch, isLoading, totalValue }];
};

export default useAddToCart;
