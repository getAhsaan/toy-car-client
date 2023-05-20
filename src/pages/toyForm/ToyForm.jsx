import React, { useState } from "react";
import "../toyForm/ToyForm.css"; // Import the CSS file for styling
import { toast } from "react-toastify";
import { useAuth } from "../../hooks/hook";

const ToyForm = () => {
  const { user } = useAuth();

  const [pictureURL, setPictureURL] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState(`${user?.displayName || ""}`);
  const [subcategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const car = {
      pictureURL,
      name,
      sellerName,
      sellerEmail: user?.email,
      subcategory,
      price: parseFloat(price),
      rating,
      quantity,
      description,
    };

    fetch(`http://localhost:5000/cars`, {
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
      });
  };

  return (
    <>
      <h2 className="md:text-5xl text-3xl my-8 text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
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
                <label>Toy Name:</label>
                <input
                  className="text-xl"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              <div className="form-group uppercase md:w-1/2">
                <label>Seller Name:</label>
                <input
                  className="text-xl"
                  type="text"
                  defaultValue={sellerName}
                  onChange={(e) => setSellerName(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group uppercase">
              <label>Seller Email:</label>
              <input
                className="text-xl"
                type="email"
                value={user?.email}
                readOnly
              />
            </div>

            <div className="md:flex justify-between gap-4 items-center">
              <div className="form-group uppercase md:w-1/3">
                <label>Sub-category:</label>
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
                <label>Price:</label>
                <input
                  className="text-xl"
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group uppercase md:w-1/3">
                <label>Rating:</label>
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
                <label>Picture URL of the toy:</label>
                <input
                  className="text-xl"
                  type="url"
                  value={pictureURL}
                  onChange={(e) => setPictureURL(e.target.value)}
                />
              </div>

              <div className="form-group uppercase md:w-1/2">
                <label>Available Quantity:</label>
                <input
                  className="text-xl"
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
            </div>

            <div className="form-group uppercase">
              <label>Detail Description:</label>
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
