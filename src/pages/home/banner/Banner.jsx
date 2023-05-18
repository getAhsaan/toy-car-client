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
            <h1 className="mb-5 text-5xl font-bold">
              Rev Up the Fun at Toy Car Zone!
            </h1>
            <p className="mb-5">
              Unleash the thrill of toy cars at Toy Car Zone. Discover our
              collection of vehicles, tracks, and accessories for endless racing
              adventures. Start your engines and ignite the fun!
            </p>
            <button className="btn btn-outline btn-secondary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
