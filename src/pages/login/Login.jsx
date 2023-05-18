import React, { useState } from "react";
import SocialLoginBtn from "../../components/SocialLoginBtn";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/hook";
import { toast } from "react-toastify";

const Login = () => {
  const [err, setErr] = useState("");

  const { createNewUserWithGoogle, loginNewUser } = useAuth();

  // handle google sign in
  const handleGoogleSignIn = () => {
    setErr("");
    createNewUserWithGoogle()
      .then((userCredential) => {
        console.log(userCredential.user);
        toast.success("login successful");
      })
      .catch((err) => setErr(err.message));
  };

  // handle login
  const handleLogin = (e) => {
    e.preventDefault();
    setErr("");

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    if (email && password) {
      loginNewUser(email, password)
        .then((result) => {
          console.log(result.user);
          toast.success("login successful");
        })
        .catch((err) => {
          setErr(err.message);
        });
    }
  };

  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 hidden md:block">
          <img className=" rounded-xl" src="https://i.ibb.co/BfTrfJK/1000-F-578183960-h-ZAw6-KNLS41-XLFFby-H2tv-Mj-Lh65-AMkj-Q.jpg" alt="" />
        </div>
        <div className="card w-full md:w-1/3 shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-2xl text-secondary mb-6">Please Login</h3>
            <h3 className="text-lg text-red-500">{err}</h3>

            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  name="password"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Login
                </button>
              </div>
              <div className="mt-6">
                <p>
                  Don't have and account?
                  <Link
                    className="text-secondary"
                    to="/sign-up"
                  >
                    {" "}
                    Sign up
                  </Link>
                </p>
              </div>
            </form>
            <div className="flex justify-between items-center gap-8 ">
              <div className="w-full bg-slate-500 h-[2px]"></div>
              <div>or</div>
              <div className="w-full bg-slate-500 h-[2px]"></div>
            </div>
            <div className="text-center">
              <div>
                <SocialLoginBtn
                  handleClick={handleGoogleSignIn}
                  icon={
                    <FcGoogle
                      size={20}
                      style={{ marginRight: "5px" }}
                    />
                  }
                >
                  Login with Google
                </SocialLoginBtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
