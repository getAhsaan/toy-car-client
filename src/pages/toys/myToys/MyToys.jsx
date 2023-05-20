import React from "react";

const MyToys = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
        <tr>
        <th></th>
        <th className='text-lg'>Toy Name</th>
        <th className='text-lg'>Seller Name</th>
        <th className='text-lg'>Sub-Category</th>
        <th className='text-lg'>Price</th>
        <th className='text-lg'>Quantity</th>
        <th className='text-lg'>Rating</th>
        <th className='text-lg'>Description</th>
        <th></th>
        <th></th>
      </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="my-8 border-4">
            <th>1</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                example@example.com
              </span>
            </td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <th>
              <button className="btn btn-outline btn-secondary mx-2 btn-xs">Edit</button>
              <button className="btn btn-outline btn-secondary mx-2 btn-xs">Delete</button>
            </th>
            
          </tr>
          <tr className="my-8 border-4">
            <th>1</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-sm">
                example@example.com
              </span>
            </td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <td>Purple</td>
            <th>
              <button className="btn btn-outline btn-secondary mx-2 btn-xs">Edit</button>
              <button className="btn btn-outline btn-secondary mx-2 btn-xs">Delete</button>
            </th>
            
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
