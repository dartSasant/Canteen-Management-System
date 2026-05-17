import React, { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const RegisterCard = () => {
  const [user, setuser] = useState("");

  const [password, setpassword] = useState("");

  const [visible, setvisible] = useState(false);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="border-2 rounded-box min-h-100 min-w-100 p-6 border-black border-base-300 space-y-5 shadow-lg bg-base-100 bg-zinc-950/90">
        <div className="flex flex-col space-y-3">
          <span className="text-lg text-slate-400 font-semibold">Username</span>
          <input
            className="border rounded-box bg-slate-200 text-zinc-950/90 text-lg min-h-10"
            type="text"
            onChange={(e) => setuser(e.target.value)}
            name=""
            id=""
            placeholder="Username"
          />
        </div>
        <div className="flex flex-col space-y-3">
          <span className="text-lg text-slate-400 font-semibold">Email</span>
          <input
            className="border rounded-box min-h-10 bg-slate-200 text-zinc-950/90 text-lg"
            type="email"
            placeholder="example12@gmail.com"
          />
        </div>
        <div className="flex flex-col space-y-3 relative">
          <span className="text-lg text-slate-400 font-semibold">Password</span>
          <input
            className="border rounded-box min-h-10 bg-slate-200 text-zinc-950/90 text-lg pr-12"
            type={visible ? "text" : "password"}
            onChange={(e) => setpassword(e.target.value)}
            placeholder="Password"
          />

          <div
            className="absolute inset-y-0 right-3 flex items-center pt-7 cursor-pointer text-2xl"
            onClick={() => setvisible(!visible)}
          >
            {visible ? (
              <BsEye className="text-black " />
            ) : (
              <BsEyeSlash className="text-black" />
            )}
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn btn-primary mt-5 w-full text-lg">
            Register
          </button>
        </div>
        <div className="flex justify-center">
          <a className="text-blue-500 text-xl font-bold" href="">
            login
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
