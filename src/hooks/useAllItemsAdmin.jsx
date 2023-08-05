import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllItemsAdmin = () => {
  const { user } = useAuth();
  const [instance] = useAxiosSecure();

  const {
    refetch,
    data: allItems,
    isLoading,
  } = useQuery({
    queryKey: ["admin-all-items"],
    queryFn: async () => {
      const res = await instance.get(`/admin-all-items?uid=${user?.uid}`);
      return res.data;
    },
  });
  return [allItems, refetch, isLoading];
};

export default useAllItemsAdmin;
