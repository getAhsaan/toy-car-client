import React, { useState } from "react";
import "../toyForm/ToyForm.css"; // Import the CSS file for styling

const UpdateForm = () => {
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const updateCarInfo = {
      price,
      quantity,
      description,
    };
    
  };

  return (
    <>
      <h2 className="md:text-5xl text-3xl my-8 text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        Update This Toy
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
            <div className="md:flex justify-between gap-4 items-center">
              <div className="form-group uppercase md:w-1/2">
                <label>Price:</label>
                <input
                  className="text-xl"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="form-group uppercase md:w-1/2">
                <label>Quantity:</label>
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

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateForm;
