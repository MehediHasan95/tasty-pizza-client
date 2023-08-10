import { faEdit } from "@fortawesome/free-regular-svg-icons";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useAllItemsAdmin from "../../hooks/useAllItemsAdmin";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { successToast } from "../../utilities/toastBar";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ManageItems = () => {
  useTitle("Manage items");
  const { user } = useAuth();
  const [allItems, refetch, isLoading] = useAllItemsAdmin();
  const [instance] = useAxiosSecure();

  const handleDeleteItem = (id) => {
    instance.delete(`/item-delete/${id}?uid=${user?.uid}`).then((res) => {
      if (res.data.deletedCount) {
        refetch();
        successToast("Item delete successfull!");
      }
    });
  };

  return (
    <div>
      <table className="text-center table table-auto">
        <tbody>
          {!isLoading &&
            allItems.map(({ _id, name, image, price, quantity, category }) => (
              <tr key={_id}>
                <div className="my-1 lg:my-3 w-10 lg:w-20 h-10 lg:h-20 ms-auto overflow-hidden rounded-full">
                  <img
                    src={image}
                    alt="profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <td>{name}</td>
                <td>${price}</td>
                <td>
                  {quantity} <small>(items)</small>
                </td>
                <td>{category}</td>
                <td className="space-x-0 lg:space-x-2">
                  <Link to={`update-item/${_id}`}>
                    <button className="w-8 h-8 rounded-full text-orange hover:text-white hover:bg-orange bg-opacity-30 duration-300 hover:duration-300">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDeleteItem(_id)}
                    className="w-8 h-8 rounded-full text-platinum hover:text-white hover:bg-platinum bg-opacity-30 duration-300 hover:duration-300"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageItems;
