import React from "react";

const SingleToys = () => {
  return (
    <div>
      <div className="md:flex shadow-2xl my-20 gap-8 items-center rounded-xl">
        <div className="md:w-1/2  border-4 rounded p-2 m-2">
          <img className="rounded-3xl md:h-[450px]"
            src="https://i.ibb.co/z5G6DNh/gabriel-vasiliu-ISF2j-8-X1r0-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="md:w-1/2 p-2 my-2">
          <h3 className="text-2xl uppercase my-8 leading-10">
            <span className="dark:bg-slate-900 p-1 rounded-md border-b border-e">
              Toy Name :
            </span>{" "}
            Remote Control Bus / M-555
          </h3>

          <h3 className=" my-4 uppercase">
            <span className="dark:bg-slate-900 p-1 rounded-md border-b border-e">
              Seller Name :
            </span>{" "}
            Barek Bin Trump{" "}
          </h3>

          <p className="my-4">
            <span className="uppercase text-sm  dark:bg-slate-900 p-1 rounded-md border-b border-e">
              Seller Email :
            </span>{" "}
            <span className=" text-xl">barekbintrump@gmail.com</span>
          </p>

          <p className="my-4">
            <span className="uppercase text-sm dark:bg-slate-900 p-1 rounded-md border-b border-e">
              Price :
            </span>{" "}
            <span className=" text-4xl text-orange-300 mx-4">$12</span>
          </p>

          <div className="flex gap-4 items-center">
            <p className="dark:bg-slate-900 p-1 uppercase rounded-md border-b border-e">
              Rating :{" "}
            </p>
            <p className="text-4xl">****</p>
          </div>

          <p className="my-4">
            <span className="uppercase text-sm dark:bg-slate-900 p-1 rounded-md border-b border-e">
              Quantity :
            </span>{" "}
            <span className=" text-4xl text-orange-300 mx-4">18</span>
          </p>
          <p className="my-4">
            <span className="uppercase text-sm dark:bg-slate-900 p-1 rounded-md border-b border-e">
              Description :
            </span>{" "}
            <span className=" text-xl mx-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias aperiam porro cumque vero provident repudiandae, cum voluptates nam dolor culpa ullam fugiat tenetur ut tempore modi dolorum beatae maiores? Recusandae voluptate nisi tempora veniam in expedita autem aut sit amet voluptas, odio omnis vel enim hic laborum dolore,</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleToys;
