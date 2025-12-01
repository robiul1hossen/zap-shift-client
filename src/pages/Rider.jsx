import React, { use } from "react";
import { useForm, useWatch } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useLoaderData } from "react-router";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-toastify";
import Loader from "../components/Loader";

const Rider = () => {
  const { user, loading } = use(AuthContext);
  const warehouses = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const allRegion = warehouses?.map((region) => region.region);
  const region = [...new Set(allRegion)];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const handleRiderApplication = (data) => {
    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        toast.success("Your application has been submitted.");
      }
    });
  };

  const riderRegion = useWatch({ control, name: "riderRegion" });

  const districtByRegion = (region) => {
    const regionDistricts = warehouses.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <h2 className="text-4xl text-secondary font-bold mb-4">Be A Rider</h2>
      <form onSubmit={handleSubmit(handleRiderApplication)}>
        <h2 className="text-secondary text-2xl ">Rider Details</h2>
        <div className="flex gap-10 mt-6">
          <div className="w-full">
            {/* Rider info */}

            {/* rider name  */}
            <div className="w-full mt-5">
              <label className="label">Your Name</label>
              <input
                type="text"
                defaultValue={user?.displayName}
                // readOnly
                className="input outline-none w-full"
                placeholder="Rider Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-xs text-red-500">Name is required</span>
              )}
            </div>
            {/* rider email  */}
            <div className="w-full mt-5">
              <label className="label">Your Email</label>
              <input
                type="email"
                defaultValue={user?.email}
                className="input outline-none w-full"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-xs text-red-500">Email is required</span>
              )}
            </div>
            {/* nid */}
            <div className="w-full mt-5">
              <label className="label">Your NID No.</label>
              <input
                type="text"
                className="input outline-none w-full"
                placeholder="Your NID No."
                {...register("nid", { required: true })}
              />
              {errors.nid && (
                <span className="text-xs text-red-500">NID is required</span>
              )}
            </div>
            <div className="w-full mt-5">
              <label className="label">Your Age</label>
              <input
                type="number"
                className="input outline-none w-full"
                placeholder="Your Age"
                {...register("age", { required: true })}
              />
              {errors.age && (
                <span className="text-xs text-red-500">Age is required</span>
              )}
            </div>
          </div>
          <div className="w-full">
            {/* region */}
            <div className="w-full mt-5">
              <fieldset className="fieldset w-full">
                <label className="label text-[16px]">Your Region</label>
                <select
                  {...register("riderRegion", {
                    validate: (value) =>
                      value !== "Pick a region" || "Region is required",
                  })}
                  defaultValue="Pick a region"
                  className="select w-full">
                  <option disabled={true}>Pick a region</option>
                  {region.map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              {errors.riderRegion && (
                <span className="text-xs text-red-500">
                  {errors.riderRegion?.message}
                </span>
              )}
            </div>
            {/* districts */}
            <div className="w-full mt-5">
              <fieldset className="fieldset w-full">
                <label className=" label text-[16px]">Your District</label>
                <select
                  {...register("riderDistrict", {
                    validate: (value) =>
                      value !== "Pick a district" || "District is required",
                  })}
                  defaultValue="Pick a district"
                  className="select w-full">
                  <option disabled={true}>Pick a district</option>
                  {districtByRegion(riderRegion).map((r, i) => (
                    <option key={i} value={r}>
                      {r}
                    </option>
                  ))}
                </select>
                {errors.riderDistrict && (
                  <span className="text-xs text-red-500">
                    {errors.riderDistrict?.message}
                  </span>
                )}
              </fieldset>
            </div>
            <div className="w-full mt-5">
              <label className="label">Driving License</label>
              <input
                type="text"
                className="input outline-none w-full"
                placeholder="Your Driving License"
                {...register("license", { required: true })}
              />
              {errors.license && (
                <span className="text-xs text-red-500">
                  Driving License required
                </span>
              )}
            </div>
            <div className="w-full mt-5">
              <label className="label">Your Contact</label>
              <input
                type="number"
                className="input outline-none w-full"
                placeholder="Your Contact Number"
                {...register("contact", { required: true })}
              />
              {errors.contact && (
                <span className="text-xs text-red-500">
                  Contact No. required
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="text-center my-10">
          <button className="bg-primary text-secondary px-6 py-2 font-medium rounded-xl cursor-pointer">
            Be A Rider
          </button>
        </div>
      </form>
    </div>
  );
};

export default Rider;
