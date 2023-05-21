import React from "react";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[500px] rounded-xl my-8"
        style={{
          backgroundImage: `url("https://i.ibb.co/TcHFpZ3/toybanner.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div
            data-aos="fade-down"
            className="max-w-md"
          >
            <h1 className="mb-5 text-5xl font-bold uppercase text-orange-300">
              Rev Up the Fun at Toy Car Zone!
            </h1>
            <p className="mb-5 text-2xl">
              Unleash the thrill of toy cars at Toy Car Zone. Discover our
              collection of vehicles, tracks, and accessories for endless racing
              adventures. Start your engines and ignite the fun!
            </p>
            <Link to={"/all-toys"}>
            <div className="inline-flex items-center justify-center w-full hover:text-white">
              <hr className="w-64 h-1 my-8  border-0 rounded bg-orange-300" />
              <div className="absolute px-4 -translate-x-1/2 dark:bg-slate-900  left-1/2 font-bold text-xl md:text-2xl rounded-lg p-2 border cursor-pointer">
                Let's Explore
              </div>
            </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
