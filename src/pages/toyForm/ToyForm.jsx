import React, { useState } from "react";
import "../toyForm/ToyForm.css"; // Import the CSS file for styling
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/hook";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const ToyForm = () => {
  const { user } = useAuth();

  const [pictureUrl, setPictureUrl] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState(`${user?.displayName || ""}`);
  const [subcategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  // title
  useDynamicTitle("| Add A Toy");

  const handleSubmit = (e) => {
    e.preventDefault();
    const car = {
      pictureUrl,
      name,
      sellerName,
      sellerEmail: user?.email,
      subcategory,
      price: parseFloat(price),
      rating,
      quantity,
      description,
    };

    fetch(`https://toy-car-zone-server-smoky.vercel.app/cars`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(car),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Car Added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((err) => {
        toast.error(`error ${err?.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  return (
    <>
      <h2 className="md:text-5xl text-gray-500 text-3xl my-8 text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        Add A Toy
      </h2>
      <div className="md:flex gap-8 space-y-4 md:space-y-4 items-center">
        <div className="dark:bg-slate-900 p-4 md:mt-4 rounded-xl md:w-1/2 md:h-[630px]">
          <img
            className=" h-full w-full border-4 rounded-xl"
            src="https://i.ibb.co/p2qNsX5/marc-grande-VGLBD77-CJ9-Q-unsplash.jpg"
            alt=""
          />
        </div>
        <div className=" dark:bg-slate-900 p-4 rounded-xl md:w-1/2 md:h-[630px]">
          <form onSubmit={handleSubmit}>
            <div className="md:flex justify-between gap-4">
              <div className="form-group uppercase md:w-1/2">
                <label className="text-gray-500">
                  Toy Name: <span className="text-red-500">*</span>
                </label>
                <input
                  className="text-xl"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group uppercase md:w-1/2">
                <label className="text-gray-500">Seller Name:</label>
                <input
                  className="text-xl"
                  type="text"
                  defaultValue={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group uppercase">
              <label className="text-gray-500">Seller Email:</label>
              <input
                className="text-xl"
                type="email"
                value={user?.email}
                readOnly
              />
            </div>

            <div className="md:flex justify-between gap-4 items-center">
              <div className="form-group uppercase md:w-1/3">
                <label className="text-gray-500">Sub-category:</label>
                <select
                  className="text-xl"
                  value={subcategory}
                  onChange={(e) => setSubCategory(e.target.value)}
                >
                  <option value="">Select sub-category</option>
                  <option value="BusToys">Bus Toys</option>
                  <option value="TruckToys">Truck Toys</option>
                  <option value="TrainToys">Train Toys</option>
                </select>
              </div>

              <div className="form-group uppercase md:w-1/3">
                <label className="text-gray-500">
                  Price: <span className="text-red-500">*</span>
                </label>
                <input
                  className="text-xl"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
              <div className="form-group uppercase md:w-1/3">
                <label className="text-gray-500">Rating:</label>
                <input
                  className="text-xl"
                  type="number"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  min="1"
                  max="5"
                />
              </div>
            </div>

            <div className="md:flex justify-between gap-4">
              <div className="form-group uppercase md:w-1/2">
                <label className="text-gray-500">Picture URL of the toy:</label>
                <input
                  className="text-xl"
                  type="url"
                  value={pictureUrl}
                  onChange={(e) => setPictureUrl(e.target.value)}
                />
              </div>

              <div className="form-group uppercase md:w-1/2">
                <label className="text-gray-500">
                  Available Quantity: <span className="text-red-500">*</span>
                </label>
                <input
                  className="text-xl"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="form-group uppercase">
              <label className="text-gray-500">Detail Description:</label>
              <textarea
                className="text-xl"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <button type="submit">Add A Toy</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ToyForm;
