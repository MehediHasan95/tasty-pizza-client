import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdminOrder = () => {
  const { user, loading } = useAuth();
  const [instance] = useAxiosSecure();

  const { data: allOrders = [], isLoading } = useQuery({
    queryKey: ["admin-order"],
    enabled: !loading,
    queryFn: async () => {
      const res = await instance.get(`/admin-order?uid=${user?.uid}`);
      return res.data;
    },
  });
  return [allOrders, isLoading];
};

export default useAdminOrder;
