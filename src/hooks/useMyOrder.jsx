import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useMyOrder = () => {
  const { user, loading } = useAuth();
  const [instance] = useAxiosSecure();

  const { data: orders = [], isLoading } = useQuery({
    queryKey: ["my-orders"],
    enabled: !loading,
    queryFn: async () => {
      const res = await instance.get(`/my-orders?uid=${user?.uid}`);
      return res.data;
    },
  });
  return [orders, isLoading];
};

export default useMyOrder;
