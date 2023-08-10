import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleLeft,
  faArrowLeft,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons";
import { successToast } from "../../utilities/toastBar";
import useTitle from "../../hooks/useTitle";

const ManageItemUpdate = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const [instance] = useAxiosSecure();
  const [update, setUpdate] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useTitle(update.name ? update.name : "loading");

  useEffect(() => {
    instance
      .get(`/admin-item-update/${id}?uid=${user?.uid}`)
      .then((res) => setUpdate(res.data));
  }, [id, instance, user?.uid]);

  const handleUpdateItem = (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const price = parseFloat(e.target.price.value);
    const quantity = parseInt(e.target.quantity.value);
    const image = e.target.image.value;
    const description = e.target.description.value;
    instance
      .patch(`/admin-item-update/${id}?uid=${user?.uid}`, {
        name,
        price,
        quantity,
        image,
        description,
      })
      .then((res) => {
        if (res.data.modifiedCount) {
          successToast("Your item update successfull");
          setLoading(false);
          navigate(-1);
        }
      });
  };

  return (
    <div>
      <form
        onSubmit={handleUpdateItem}
        className="border w-full lg:w-3/6 p-5 mx-auto"
      >
        <button
          onClick={() => navigate(-1)}
          className="w-8 h-8 rounded-full bg-orange text-white"
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="text-center text-xl lg:text-3xl mb-5">
          Update your item information
        </h1>
        <input
          type="text"
          defaultValue={update.name}
          name="name"
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Item name"
        />
        <input
          type="text"
          defaultValue={update.price}
          name="price"
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Price"
        />
        <input
          type="text"
          defaultValue={update.quantity}
          name="quantity"
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Quantity"
        />
        <input
          type="text"
          defaultValue={update.image}
          name="image"
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Image url"
        />

        <textarea
          rows={5}
          type="text"
          defaultValue={update.description}
          name="description"
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Description"
        />
        <button className="w-full p-3 bg-raisinBlack hover:bg-orange text-white duration-300 hover:duration-300">
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          ) : (
            "Update now"
          )}
        </button>
      </form>
    </div>
  );
};

export default ManageItemUpdate;
