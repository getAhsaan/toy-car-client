import React from "react";
import Marquee from "react-fast-marquee";

const Collection = () => {
  return (
    <div className="my-12">
      <p className="text-2xl text-center my-2">
        {" "}
        <span className="border p-1 rounded-md">Our Collection</span>{" "}
      </p>
      <h2 className="text-4xl text-center w-40 mx-auto border-b-2">
        Shop By Age
      </h2>
      <div className="my-8 dark:bg-slate-900 p-4 rounded-xl py-8">
        <Marquee>
        <div className="flex flex-col justify-center items-center space-y-4 mx-8 md:mx-20">
        <img src="https://i.ibb.co/9gNKjgg/jonathan-borba-Cg-WTq-Yx-HEkg-unsplash.jpg" className=" w-40 h-40 rounded-full border-4 grayscale hover:grayscale-0" alt="" />
        <p className="text-2xl">For Baby</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 mx-8 md:mx-20">
        <img src="https://i.ibb.co/vQKM70V/juan-encalada-2-Balsk-DOo-Lg-unsplash.jpg" className=" w-40 h-40 rounded-full border-4 grayscale hover:grayscale-0" alt="" />
        <p className="text-2xl">1 to 2 years</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 mx-8 md:mx-20">
        <img src="https://i.ibb.co/YyMnYnb/senjuti-kundu-Jfol-Ij-Rnve-Y-unsplash.jpg" className=" w-40 h-40 rounded-full border-4 grayscale hover:grayscale-0" alt="" />
        <p className="text-2xl">3 to 5 years</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 mx-8 md:mx-20">
        <img src="https://i.ibb.co/6HJBCgz/gift-ideas-for-7-year-old-boy.jpg" className=" w-40 h-40 rounded-full border-4 grayscale hover:grayscale-0" alt="" />
        <p className="text-2xl">6 to 8 years</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 mx-8 md:mx-20">
        <img src="https://i.ibb.co/zbQQPWY/10-Year-Old-Boy-e1573620504713-scaled.jpg" className=" w-40 h-40 rounded-full border-4 grayscale hover:grayscale-0" alt="" />
        <p className="text-2xl">9 to 11 years</p>
        </div>

        <div className="flex flex-col justify-center items-center space-y-4 mx-8 md:mx-20">
        <img src="https://i.ibb.co/0JkmtCK/360-F-183294981-QCR3z-Sgkx78q-Yr-C1rj-Um-A9q-Sn-L1-YJkl-Z.jpg" className=" w-40 h-40 rounded-full border-4 grayscale hover:grayscale-0" alt="" />
        <p className="text-2xl">12 years & up</p>
        </div>

        </Marquee>
      </div>
    </div>
  );
};

export default Collection;
