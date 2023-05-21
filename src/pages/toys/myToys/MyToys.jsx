import React, { useEffect, useState } from "react";
import { useAuth } from "../../../hooks/hook";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const MyToys = () => {
  // get user
  const { user } = useAuth();

  const [myToys, setMyToys] = useState([]);

  // handle toy car delete
  const handleToyCarDelete = (id) => {
    if (confirm("are you sure to delete")) {
      fetch(`http://localhost:5000/cars/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            toast.success("Car Delete Successfully", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });

            const rest = myToys.filter((toy) => toy._id !== id);
            setMyToys(rest);
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
    }
  };

  // load my toy car data
  useEffect(() => {
    fetch(`http://localhost:5000/my-toys?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [user]);
  return (
    <div className=" w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>No</th>
            <th className="text-lg">Toy Pic, Name & Rating</th>
            <th className="text-lg">Seller Name & Email</th>
            <th className="text-lg">Sub-Category</th>
            <th className="text-lg">Price</th>
            <th className="text-lg">Quantity</th>
            <th className="text-lg">Description</th>
            <th className="text-lg">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myToys.map((toy, index) => (
            <tr
              key={toy._id}
              className="my-8 border-t-2 border-slate-900"
            >
              <th className="text-xl">{index + 1}</th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="">
                    <div className="mask mask-squircle w-20 h-20">
                      <img
                        src={toy?.pictureUrl}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-xl">{toy?.name}</div>
                    <div className="text-2xl opacity-50">*****</div>
                  </div>
                </div>
              </td>
              <td className="text-xl">
                {toy?.sellerName}
                <br />
                <span className="badge badge-ghost badge-lg">
                  {toy?.sellerEmail}
                </span>
              </td>
              <td className="text-xl">{toy?.subcategory}</td>
              <td className="text-2xl text-orange-300">${toy?.price}</td>
              <td className="text-2xl text-orange-300">{toy?.quantity}</td>
              <td>
                {toy?.description.slice(0, 20)}
                ...
              </td>
              <th>
                <Link
                  to={`/update-form/${toy?._id}`}
                  className="btn btn-outline btn-secondary mx-2 btn-sm"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleToyCarDelete(toy?._id)}
                  className="btn btn-outline btn-secondary mx-2 btn-sm"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
