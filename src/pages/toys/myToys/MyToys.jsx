import React from "react";

const MyToys = () => {
  return (
    <div className=" w-full">
      <table className="table w-full">
        {/* head */}
        <thead>
        <tr>
        <th>No</th>
        <th className='text-lg'>Toy Pic, Name & Rating</th>
        <th className='text-lg'>Seller Name & Email</th>
        <th className='text-lg'>Sub-Category</th>
        <th className='text-lg'>Price</th>
        <th className='text-lg'>Quantity</th>
        <th className='text-lg'>Description</th>
        <th className="text-lg">Action</th>
      </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="my-8 border-t-2 border-slate-900">
            <th className="text-xl">1</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="">
                  <div className="mask mask-squircle w-20 h-20">
                    <img
                      src="https://i.ibb.co/p2qNsX5/marc-grande-VGLBD77-CJ9-Q-unsplash.jpg"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div className="font-bold text-xl">Toy Name</div>
                  <div className="text-2xl opacity-50">*****</div>
                </div>
              </div>
            </td>
            <td className="text-xl">
              Zemlak, Daniel and Leannon
              <br />
              <span className="badge badge-ghost badge-lg">
                example@example.com
              </span>
            </td>
            <td className="text-xl">sub category</td>
            <td className="text-2xl text-orange-300">price</td>
            <td className="text-2xl text-orange-300">quantity</td>
            <td>{"description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint recusandae eum iure neque, quia officiis facere harum illo! Reprehenderit, earum?".slice(0, 20)}...
            </td>
            <th>
              <button className="btn btn-outline btn-secondary mx-2 btn-sm">Edit</button>
              <button className="btn btn-outline btn-secondary mx-2 btn-sm">Delete</button>
            </th>
            
          </tr>


          {/* <tr className="my-8 border-t-2 border-slate-900">
            <th>1</th>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-20 h-20">
                    <img
                      src="https://i.ibb.co/p2qNsX5/marc-grande-VGLBD77-CJ9-Q-unsplash.jpg"
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
              <button className="btn btn-outline btn-secondary mx-2 btn-sm">Edit</button>
              <button className="btn btn-outline btn-secondary mx-2 btn-sm">Delete</button>
            </th>
            
          </tr>
           */}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
