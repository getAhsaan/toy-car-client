import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

const ErrorPage = () => {
  const err = useRouteError();
  const { error, status, statusText } = err;
  console.log(err);
  return (
    <>
        <div className="container flex flex-col md:flex-row items-center justify-center bg-gray-900 p-8 text-gray-700 border-2 md:w-2/3  mx-auto">
          <div className="md:w-1/2 mx-auto">
            <div className="text-6xl md:text-9xl text-center font-dark font-bold text-white">
              {status || "404"}
            </div>
            <p className="text-3xl md:text-6xl font-light leading-normal text-center text-orange-300">
              {statusText || "Sorry we couldn't find this page."}
            </p>
            <p className="mb-8 text-white text-xl md:text-2xl text-center ">
              {error?.message ||
                "But don't worry, you can find plenty of other things on our homepage."}
            </p>
            <p className="text-center text-white">
              <Link
                to="/"
                className="btn btn-secondary btn-outline w-2/3 mb-4"
              >
                back to home
              </Link>
            </p>
          </div>
          <div>
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_cr9slsdh.json"
          ></Player>
          </div>
        </div>
    </>
  );
};

export default ErrorPage;
