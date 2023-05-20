import React from 'react';

const AllToys = () => {
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
        <th className='text-lg'>Seller Name</th>
        <th className='text-lg'>Toy Name</th>
        <th className='text-lg'>Sub-Category</th>
        <th className='text-lg'>Price</th>
        <th className='text-lg'>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th className='text-xl'>1</th>
        <td className='text-xl'>Cy Ganderton</td>
        <td className='text-xl'>Quality Control Specialist</td>
        <td className='text-xl'>Blue</td>
        <td className='text-xl'>Blue</td>
        <td className='text-xl'>Blue</td>
        <td className='btn btn-secondary'>View Details</td>
      </tr>
      <tr>
        <th className='text-xl'>2</th>
        <td className='text-xl'>Cy Ganderton</td>
        <td className='text-xl'>Quality Control Specialist</td>
        <td className='text-xl'>Blue</td>
        <td className='text-xl'>Blue</td>
        <td className='text-xl'>Blue</td>
        <td className='btn btn-secondary'>View Details</td>
      </tr>
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllToys;