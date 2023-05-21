import { Rating } from "@smastrom/react-rating";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleToy = () => {
  const {
    name,
    price,
    sellerEmail,
    sellerName,
    quantity,
    description,
    rating,
    pictureUrl,
  } = useLoaderData();

  return (
    <div>
      <div className="md:flex shadow-2xl shadow-slate-900 my-20 gap-8 items-center rounded-xl md:border-4">
        <div className="md:w-1/2 rounded p-2 m-2 border-4 md:border-none">
          <img
            className="rounded-3xl md:h-[500px]"
            src={pictureUrl}
            alt={name}
          />
        </div>
        <div className="md:w-1/2 p-2 my-2">
          <h3 className="text-2xl uppercase my-8 leading-10">
            <span className="dark:bg-slate-900 text-gray-500 p-1 rounded-md border-b border-e">
              Toy Name :
            </span>{" "}
            {name}
          </h3>

          <h3 className=" my-4 uppercase">
            <span className="dark:bg-slate-900 text-gray-500 p-1 rounded-md border-b border-e">
              Seller Name :
            </span>{" "}
            {sellerName}
          </h3>

          <p className="my-4">
            <span className="uppercase text-sm  dark:bg-slate-900 text-gray-500 p-1 rounded-md border-b border-e">
              Seller Email :
            </span>{" "}
            <span className=" text-xl">{sellerEmail}</span>
          </p>

          <p className="my-4">
            <span className="uppercase text-sm dark:bg-slate-900 text-gray-500 p-1 rounded-md border-b border-e">
              Price :
            </span>{" "}
            <span className=" text-4xl text-orange-300 mx-4">${price}</span>
          </p>

          <div className="flex gap-4 items-center">
            <p className="dark:bg-slate-900 text-gray-500 p-1 uppercase rounded-md border-b border-e">
              Rating :{" "}
            </p>
            <p className="text-4xl">
              <Rating
                value={rating}
                readOnly
                style={{ maxWidth: 130 }}
              />
            </p>
          </div>

          <p className="my-4">
            <span className="uppercase text-sm dark:bg-slate-900 text-gray-500 p-1 rounded-md border-b border-e">
              Quantity :
            </span>{" "}
            <span className=" text-4xl text-orange-300 mx-4">{quantity}</span>
          </p>
          <p className="my-4">
            <span className="uppercase text-sm dark:bg-slate-900 text-gray-500 p-1 rounded-md border-b border-e">
              Description :
            </span>{" "}
            <span className=" text-xl mx-2">{description}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
