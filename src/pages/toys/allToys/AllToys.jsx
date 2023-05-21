import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useDynamicTitle from "../../../hooks/useDynamicTitle";

const AllToys = () => {
  const LoadedAllCars = useLoaderData();
  const [allCars, setAllCars] = useState(LoadedAllCars);

  // title
  useDynamicTitle("| All Toys");

  // search
  const handleSearch = (e) => {
    const searchText = e.target.value;
    if (searchText) {
      fetch(`https://toy-car-zone-server-smoky.vercel.app/search/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          setAllCars(data);
        });
    } else {
      setAllCars(LoadedAllCars);
    }
  };
  return (
    <div>
      <h2 className="md:text-5xl text-3xl text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        All Toys
      </h2>
      <div className="form-control ">
        <div className="input-group justify-center my-8">
          <input
            type="text"
            placeholder="Search… by car name"
            className="input input-bordered"
            onChange={handleSearch}
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full border-2 my-4">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th className="text-lg">Seller Name</th>
              <th className="text-lg">Toy Name</th>
              <th className="text-lg">Sub-Category</th>
              <th className="text-lg">Price</th>
              <th className="text-lg">Quantity</th>
              <th className="text-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {allCars.map((car, index) => (
              <tr key={car._id}>
                <th className="text-xl">{index + 1}</th>
                <td className="text-xl">{car?.sellerName}</td>
                <td className="text-xl">{car?.name}</td>
                <td className="text-xl">{car?.subcategory}</td>
                <td className="text-xl">{car?.price}</td>
                <td className="text-xl">{car?.quantity}</td>
                <td>
                  <Link
                    className="btn btn-secondary"
                    to={`/single-toy/${car?._id}`}
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
