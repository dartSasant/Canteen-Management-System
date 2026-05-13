import React from "react";

const LoginCard = () => {
  return (
    <div>
      <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-96 border p-6 shadow-lg">

        <legend className="fieldset-legend text-2xl font-bold mb-2">
          Login
        </legend>

        <label className="label text-sm">Email</label>
        <input
          type="email"
          className="input input-bordered w-full"
          placeholder="Enter your email"
        />

        <label className="label text-sm mt-3">Password</label>
        <input
          type="password"
          className="input input-bordered w-full"
          placeholder="Enter your password"
        />

        <button className="btn btn-neutral mt-5 w-full">
          Login
        </button>

      </fieldset>
    </div>
  );
};

export default LoginCard;