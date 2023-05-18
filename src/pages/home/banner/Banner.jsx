import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero md:h-[500px] rounded-xl"
        style={{
          backgroundImage: `url("https://i.ibb.co/TcHFpZ3/toybanner.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-orange-300">
              Rev Up the Fun at Toy Car Zone!
            </h1>
            <p className="mb-5 font-bold">
              Unleash the thrill of toy cars at Toy Car Zone. Discover our
              collection of vehicles, tracks, and accessories for endless racing
              adventures. Start your engines and ignite the fun!
            </p>
            <div className="inline-flex items-center justify-center w-full">
              <hr className="w-64 h-1 my-8  border-0 rounded dark:bg-orange-300" />
              <div className="absolute px-4 -translate-x-1/2 dark:bg-slate-900 left-1/2 font-bold rounded-lg p-2">
                Let's Explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
