import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { successToast } from "../../utilities/toastBar";

const AddItems = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    axios
      .post("https://tasty-pizza-server.vercel.app/add-item", {
        name: data.name,
        price: parseFloat(data.price),
        quantity: parseInt(data.quantity),
        image: data.image,
        category: data.category,
        description: data.description,
      })
      .then((res) => {
        if (res.data.insertedId) {
          setLoading(false);
          successToast("Add success");
          reset();
        }
      })
      .catch(() => setLoading(false));
  };

  return (
    <div className="grid place-items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border w-full lg:w-3/6 p-5"
      >
        <h1 className="text-center text-xl lg:text-3xl mb-5">Add A Item</h1>
        <input
          type="text"
          {...register("name", { required: true })}
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Item name"
        />
        <input
          type="text"
          {...register("price", { required: true })}
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Price"
        />
        <input
          type="text"
          {...register("quantity", { required: true })}
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Quantity"
        />
        <input
          type="text"
          {...register("image", { required: true })}
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Image url"
        />
        <select
          {...register("category", { required: true })}
          defaultValue={"DEFAULT"}
          className="w-full p-3 mb-3 focus:outline-orange border"
        >
          <option selected disabled>
            Pick one
          </option>
          <option value="pizza">Pizza</option>
          <option value="burger">Burger</option>
          <option value="desert">Desert</option>
          <option value="drink">Drink</option>
          <option value="salad">Salad</option>
        </select>

        <textarea
          rows={5}
          type="text"
          {...register("description", { required: true })}
          className="w-full p-3 mb-3 focus:outline-orange border"
          placeholder="Description"
        />
        <button className="w-full p-3 bg-raisinBlack hover:bg-orange text-white duration-300 hover:duration-300">
          {loading ? (
            <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
          ) : (
            "Add Item"
          )}
        </button>
      </form>
    </div>
  );
};

export default AddItems;
