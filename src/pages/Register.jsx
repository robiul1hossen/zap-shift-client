import React, { use } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";

const Register = () => {
  const { createUser, updateUser, loginWithGoogle } = use(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    const profileImg = data.photo[0];
    createUser(data.email, data.password)
      .then(() => {
        const formData = new FormData();
        formData.append("image", profileImg);
        const imgHostingUrl = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_image_host_key
        }`;
        axios
          .post(imgHostingUrl, formData)
          .then((res) => {
            console.log(res.data.data.url);
            const updatedUser = {
              displayName: data.name,
              photoURL: res.data.data.url,
            };
            updateUser(updatedUser)
              .then(() => console.log("user updated successfully"))
              .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => console.log("google login successful"))
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h2 className="text-4xl font-extrabold">Create an Account</h2>
          <p className="text-[#606060]">Register With Zap Shift</p>
          <form onSubmit={handleSubmit(handleRegister)}>
            <fieldset className="fieldset">
              <label className="label">Photo</label>
              <input
                type="file"
                className="file-input outline-none"
                {...register("photo", { required: true })}
              />
              {errors.photo && (
                <p className="text-red-500">Photo is required</p>
              )}
              <label className="label">Name</label>
              <input
                type="text"
                {...register("name", { required: true })}
                className="input outline-none"
                placeholder="Name"
              />
              {errors.name && <p className="text-red-500">Name is required</p>}
              <label className="label">Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="input outline-none"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500">Email is required</p>
              )}
              <label className="label">Password</label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="input outline-none"
                placeholder="Password"
              />
              {errors.password && (
                <p className="text-red-500">Password is required</p>
              )}

              <button
                type="submit"
                className="btn btn-primary text-secondary mt-4">
                Signup
              </button>
              <p className="text-[#606060] text-center font-medium text-xl">
                Or
              </p>
              <button
                onClick={handleGoogleLogin}
                className="btn bg-white text-black border-[#e5e5e5]">
                <svg
                  aria-label="Google logo"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512">
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                  </g>
                </svg>
                Login with Google
              </button>
            </fieldset>
            <div>
              Already have an account? Please{" "}
              <Link className="text-blue-600" to="/login">
                Login
              </Link>{" "}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
