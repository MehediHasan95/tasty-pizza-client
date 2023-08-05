import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useAllUsers = () => {
  const [instance] = useAxiosSecure();
  const { user } = useAuth();

  const {
    refetch,
    data: allusers,
    isLoading,
  } = useQuery({
    queryKey: ["all-users"],
    queryFn: async () => {
      const res = await instance.get(`/users?uid=${user?.uid}`);
      return res.data;
    },
  });
  return [allusers, refetch, isLoading];
};

export default useAllUsers;
