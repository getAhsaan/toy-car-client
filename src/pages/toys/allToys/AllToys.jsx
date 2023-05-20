import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allCars = useLoaderData();
  return (
    <div>
      <h2 className="md:text-5xl text-3xl text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        All Toys
      </h2>
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
