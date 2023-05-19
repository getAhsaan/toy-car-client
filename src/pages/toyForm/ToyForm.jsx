import React, { useState } from "react";
import "../toyForm/ToyForm.css"; // Import the CSS file for styling

const ToyForm = () => {
  const [pictureURL, setPictureURL] = useState("");
  const [name, setName] = useState("");
  const [sellerName, setSellerName] = useState("");
  const [sellerEmail, setSellerEmail] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [quantity, setQuantity] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., API call, form validation, etc.)
    console.log({
      pictureURL,
      name,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    });
  };

  return (
    <>
    <h2 className="md:text-5xl text-3xl my-8 text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        Add A Toy
      </h2>
    <div className="form-container">
        
      <form onSubmit={handleSubmit}>
        <div className="form-group uppercase">
          <label>Picture URL of the toy:</label>
          <input
           className="text-xl"
            type="text"
            value={pictureURL}
            onChange={(e) => setPictureURL(e.target.value)}
          />
        </div>

        <div className="form-group uppercase">
          <label>Name:</label>
          <input
           className="text-xl"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group uppercase">
          <label>Seller Name:</label>
          <input
           className="text-xl"
            type="text"
            value={sellerName}
            onChange={(e) => setSellerName(e.target.value)}
          />
        </div>

        <div className="form-group uppercase">
          <label>Seller Email:</label>
          <input
           className="text-xl"
            type="email"
            value={sellerEmail}
            onChange={(e) => setSellerEmail(e.target.value)}
          />
        </div>

        <div className="form-group uppercase">
          <label>Sub-category:</label>
          <select className="text-xl"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
          >
            <option value="">Select sub-category</option>
            <option value="BusToys">Bus Toys</option>
            <option value="TruckToys">Truck Toys</option>
            <option value="TrainToys">Train Toys</option>
          </select>
        </div>

        <div className="form-group uppercase">
          <label>Price:</label>
          <input
           className="text-xl"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className="form-group uppercase">
          <label>Rating:</label>
          <input
           className="text-xl"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <div className="form-group uppercase">
          <label>Available Quantity:</label>
          <input
           className="text-xl"
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
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
    </>
  );
};

export default ToyForm;
