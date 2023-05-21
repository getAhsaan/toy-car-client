import React, { useEffect, useState } from "react";
import "../toyForm/ToyForm.css"; // Import the CSS file for styling
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useDynamicTitle from "../../hooks/useDynamicTitle";

const UpdateForm = () => {
  const { id } = useParams();
  // title
  useDynamicTitle("| Update Toy");

  const [loadedToy, setLoadedToy] = useState({});
  const {
    price: prevPrice,
    description: prevDescription,
    quantity: prevQuantity,
  } = loadedToy;

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateCarInfo = {
      price,
      quantity,
      description,
    };

    // update toy
    fetch(`https://toy-car-zone-server-smoky.vercel.app/cars/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateCarInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          toast.success("Car Updated Successfully", {
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

  useEffect(() => {
    fetch(`https://toy-car-zone-server-smoky.vercel.app/cars/${id}`)
      .then((res) => res.json())
      .then((data) => setLoadedToy(data));
  }, []);

  return (
    <>
      <h2 className="md:text-5xl text-3xl text-gray-500 my-8 text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
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
                <label className="text-gray-500">Price:</label>
                <input
                  className="text-xl"
                  type="number"
                  defaultValue={prevPrice}
                  name="price"
                />
              </div>
              <div className="form-group uppercase md:w-1/2">
                <label className="text-gray-500">Quantity:</label>
                <input
                  className="text-xl"
                  type="number"
                  defaultValue={prevQuantity}
                  name="quantity"
                />
              </div>
            </div>
            <div className="form-group uppercase">
              <label className="text-gray-500">Detail Description:</label>
              <textarea
                className="text-xl"
                defaultValue={prevDescription}
                name="description"
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
