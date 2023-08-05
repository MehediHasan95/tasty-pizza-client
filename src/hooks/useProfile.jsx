import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useProfile = () => {
  const { user, loading } = useAuth();
  const [instance] = useAxiosSecure();

  const {
    refetch,
    data: profile,
    isLoading,
  } = useQuery({
    queryKey: ["profile"],
    enabled: !loading,
    queryFn: async () => {
      const res = await instance.get(`/profile?uid=${user?.uid}`);
      return res.data;
    },
  });
  return [profile, refetch, isLoading];
};

export default useProfile;
