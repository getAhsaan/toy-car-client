import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/hook";
import { updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

const Registration = () => {
  const [err, setErr] = useState("");
  const { createNewUser, logOut } = useAuth();
  const navigate = useNavigate();

  // handleCreateUser
  const handleCreateUser = async (e) => {
    e.preventDefault();
    setErr("");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photoUrl.value;

    if (password.length < 6) {
      setErr("password must be 6 char long");
      return;
    }
    if (email && password) {
      const loggedUser = await createNewUser(email, password)
        .then((userCredential) => {
          console.log(userCredential.user);
          return userCredential.user;
        })
        .catch((err) => {
          setErr(err.message);
        });

      await updateProfile(loggedUser, {
        displayName: name,
        photoURL: photoUrl,
      })
        .then((user) => {
          console.log(user, "profile updated");
          toast.success("registration successful");
          logOut()
            .then(() => {
              console.log("logout successful");
              navigate("/login");
              console.log("after navigate");
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <div className=" min-h-screen bg-base-200">
      <div className="hero-content flex flex-col-reverse md:flex-row">
        <div className="md:w-1/2 hidden md:block">
        <img className="rounded-xl" src="https://i.ibb.co/C9CY6ss/1000-F-213939630-8r6g-G7-Dj5-Npbdwta-F0dn-Ct-Dj-We-Q5t1lr.jpg" alt="" />
        </div>
        <div className="card w-full md:w-1/3 shadow-2xl bg-base-100">
          <div className="card-body">
            <h3 className="text-2xl text-secondary mb-10">Create an Account</h3>
            <h3 className="text-lg text-red-500">{err}</h3>
            <form onSubmit={handleCreateUser}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">Name(optional)</span>
                </label>
                <input
                  type="name"
                  placeholder="name"
                  className="input input-bordered text-xl"
                  name="name"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">
                    Email <sup className="text-secondary text-lg">*</sup>
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered text-xl"
                  name="email"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">
                    Password <sup className="text-secondary text-lg">*</sup>
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered text-xl"
                  name="password"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-xl">PhotoUrl(optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="photo url"
                  className="input input-bordered text-xl"
                  name="photoUrl"
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  Sign up
                </button>
              </div>
              <div className="mt-6">
                <p className="text-xl">
                  Already have an Account?
                  <Link
                    className="text-secondary"
                    to="/login"
                  >
                    {" "}
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
