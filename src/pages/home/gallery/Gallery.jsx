import React from "react";

const Gallery = () => {
  return (
    <div className="mt-8">
      <h2 className="text-4xl text-center font-bold dark:bg-slate-900 p-4 md:w-1/3 mx-auto rounded-lg">
        Toy Car Gallery
      </h2>
      {/* <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className="text-blue-700 hover:text-white border border-blue-600 bg-white hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
        >
          All categories
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Shoes
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Bags
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Electronics
        </button>
        <button
          type="button"
          className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800"
        >
          Gaming
        </button>
      </div> */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div className="">
          <img
            className="md:h-80 h-32 w-96 rounded-lg border-4 grayscale-[50%] hover:grayscale-0 "
            src="https://i.ibb.co/z5G6DNh/gabriel-vasiliu-ISF2j-8-X1r0-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/p2qNsX5/marc-grande-VGLBD77-CJ9-Q-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/PzbWvFw/haseeb-modi-G3e-O0-N2hn-VQ-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/vQW3BDQ/ahmed-sheraz-r9-d-Xi6-Ffbw-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/qYkCWzT/pawan-thisara-qv-Bf-WDz-WLSw-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/Prgwt8S/haseeb-modi-AU3o-Ye-Ek-W7k-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/J53vdzn/ivan-diaz-29-JJ-fx-Ed-Y-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/zhzRBj0/haseeb-modi-Da-F4-Fo-Y0a-KA-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/cN9P0Vc/aditya-rathod-tc-rukx-VBXQ-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/v3Rq5d0/haseeb-modi-MMh2d-Fn-YLPg-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/7yrZ7dT/steinar-engeland-drw6-Rt-OKDi-A-unsplash.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="md:h-80 h-32 w-96 rounded-lg grayscale-[50%] hover:grayscale-0 border-4"
            src="https://i.ibb.co/qYkCWzT/pawan-thisara-qv-Bf-WDz-WLSw-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
