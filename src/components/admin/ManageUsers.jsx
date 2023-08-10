import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ROLE } from "../../utilities/auth-constant";
import useAllUsers from "../../hooks/useAllUsers";
import { no_image } from "../../utilities/image-constant";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";

const ManageUsers = () => {
  useTitle("Manage users");
  const [allusers, refetch, isLoading] = useAllUsers();
  const [instance] = useAxiosSecure();
  const { user } = useAuth();
  const handleDeleteUser = (id, uid) => {
    instance
      .delete(`/delete-user?uid=${user?.uid}&mid=${id}&fid=${uid}`)
      .then((res) => {
        if (res.data.deletedCount) {
          refetch();
        }
      });
  };

  return (
    <div>
      <table className="text-center table table-auto">
        <thead>
          <tr>
            <th>Display Picture</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {!isLoading &&
            allusers?.map(
              ({ _id, uid, displayName, email, photoURL, role }) => (
                <tr key={_id}>
                  <div className="my-1 lg:my-3 w-10 lg:w-20 h-10 lg:h-20 mx-auto rounded-full overflow-hidden border">
                    <img
                      src={photoURL ? photoURL : no_image}
                      alt="profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <td>{displayName}</td>
                  <td>{email}</td>
                  <td className="uppercase">{role}</td>
                  <td>
                    {role === ROLE && (
                      <button
                        onClick={() => handleDeleteUser(_id, uid)}
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
    </div>
  );
};

export default ManageUsers;
