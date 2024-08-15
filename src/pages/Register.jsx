import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Register = () => {
    const [showPassword, setShowPassword] = useState(true);
    return (
        <>
      <Helmet>
        <title> Epicurean Arena | Register </title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left lg:w-1/2 lg:ml- mt-24 ">
            <span className="font-bold text-3xl text-gray-400">
              Your presence cause our
              <span className="lg:ml-12"> glad be with Us.</span>
            </span>
          </div>
          <div className="card shrink-0 lg:w-1/2  shadow-2xl bg-base-100">
            <form className="card-body">
              <h1 className="text-center font-bold text-3xl lg:text-4xl text-gray-400">
                Please SignUp
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  name="photoUrl"
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <p
                  className="absolute right-5 bottom-3 text-2xl"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </p>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <p className="text-center my-2">
              Already Have an Account ? Please{" "}
              <Link to="/signIn" className="btn-link">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
    );
};

export default Register;