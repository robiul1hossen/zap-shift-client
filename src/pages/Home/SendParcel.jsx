import React, { use } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const SendParcel = () => {
  const { user } = use(AuthContext);
  const warehouses = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const allRegion = warehouses.map((region) => region.region);
  const region = [...new Set(allRegion)];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    let cost = 0;
    console.log(data);
    const sameDistrict = data.senderDistrict === data.receiverDistrict;
    if (data.parcelType === "Document") {
      if (sameDistrict) {
        cost = 60;
      } else {
        cost = 80;
      }
    }
    if (data.parcelType === "Non Document") {
      if (Number(data.parcelWeight) <= 3) {
        if (sameDistrict) {
          cost = 110;
        } else {
          cost = 150;
        }
      }
      if (Number(data.parcelWeight) > 3) {
        if (sameDistrict) {
          cost = Number(data.parcelWeight) * 40;
        } else {
          cost = Number(data.parcelWeight) * 40 + 40;
        }
      }
    }
    data.price = Number(cost);
    data.parcelWeight = Number(data.parcelWeight);

    Swal.fire({
      title: "Are you sure?",
      text: `Your parcel cost $${data.price}, want to proceed?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed to pay",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/parcels", data).then((res) => {
          if (res.data.insertedId) {
            navigate("/dashboard/my-parcels");
            toast.success("Your parcel has been created. Please pay.");
          }
        });
      }
    });
  };
  const senderRegion = useWatch({ control, name: "senderRegion" });
  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtByRegion = (region) => {
    const regionDistricts = warehouses.filter((c) => c.region === region);
    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  return (
    <div className="bg-white p-10 rounded-b-2xl mb-[100px]">
      <div>
        <h2 className="text-4xl font-bold text-secondary">Send a Parcel</h2>
        <h4 className="text-2xl font-medium mt-4 text-secondary">
          Enter your parcel details
        </h4>
      </div>
      <div>
        <form onSubmit={handleSubmit(handleSendParcel)}>
          {/* parcel type */}
          <div className="mt-10">
            <label className="label">
              <input
                type="radio"
                {...register("parcelType")}
                value="Document"
                className="radio"
                defaultChecked
              />
              Document
            </label>
            <label className="label">
              <input
                type="radio"
                {...register("parcelType")}
                value="Non Document"
                className="radio ms-10"
              />
              Non Document
            </label>
          </div>
          {/* parcel name & weight*/}
          <div className="mt-6">
            <fieldset className="fieldset flex gap-10">
              <div className="w-full">
                <label className="label">Parcel Name</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Parcel Name"
                  {...register("parcelName", { required: true })}
                />
                {errors.name && (
                  <span className="text-xs text-red-500">
                    Parcel Name is required
                  </span>
                )}
              </div>
              <div className="w-full">
                <label className="label">Parcel Weight (KG)</label>
                <input
                  type="number"
                  className="input outline-none w-full"
                  placeholder="Parcel Weight (KG)"
                  {...register("parcelWeight", { required: true })}
                />
                {errors.parcelWeight && (
                  <span className="text-xs text-red-500">
                    Parcel Weight is required
                  </span>
                )}
              </div>
            </fieldset>
          </div>
          <div className="flex gap-10 mt-14">
            <div className="w-full">
              {/* sender info */}
              <h2 className="text-secondary text-2xl ">Sender Details</h2>
              {/* sender name  */}
              <div className="w-full mt-5">
                <label className="label">Sender Name</label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  readOnly
                  className="input outline-none w-full"
                  placeholder="Sender Name"
                  {...register("senderName", { required: true })}
                />
                {errors.senderName && (
                  <span className="text-xs text-red-500">
                    Sender Name is required
                  </span>
                )}
              </div>
              {/* sender email  */}
              <div className="w-full mt-5">
                <label className="label">Sender Email</label>
                <input
                  type="email"
                  defaultValue={user?.email}
                  className="input outline-none w-full"
                  placeholder="Sender Email"
                  {...register("senderEmail", { required: true })}
                />
                {errors.senderEmail && (
                  <span className="text-xs text-red-500">
                    Sender Email is required
                  </span>
                )}
              </div>
              {/* region */}
              <div className="w-full mt-5">
                <fieldset className="fieldset w-full">
                  <label className="label">Sender Region</label>
                  <select
                    {...register("senderRegion", {
                      validate: (value) =>
                        value !== "Pick a region" ||
                        "Sender Region is required",
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
                {errors.senderRegion && (
                  <span className="text-xs text-red-500">
                    {errors.senderRegion?.message}
                  </span>
                )}
              </div>
              {/* districts */}
              <div className="w-full mt-5">
                <fieldset className="fieldset w-full">
                  <label className=" label">Sender District</label>
                  <select
                    {...register("senderDistrict", {
                      validate: (value) =>
                        value !== "Pick a district" ||
                        "Sender District is required",
                    })}
                    defaultValue="Pick a district"
                    className="select w-full">
                    <option disabled={true}>Pick a district</option>
                    {districtByRegion(senderRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.senderDistrict && (
                    <span className="text-xs text-red-500">
                      {errors.senderDistrict?.message}
                    </span>
                  )}
                </fieldset>
              </div>
              {/* sender address */}
              <div className="w-full mt-5">
                <label className="label">Sender Address</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Sender Address"
                  {...register("senderAddress", { required: true })}
                />
                {errors.senderAddress && (
                  <span className="text-xs text-red-500">
                    Sender Address is required
                  </span>
                )}
              </div>
              {/* sender phone */}
              <div className="w-full mt-5">
                <label className="label">Sender Phone No</label>
                <input
                  type="number"
                  className="input outline-none w-full"
                  placeholder="Sender Phone No"
                  {...register("senderPhone", { required: true })}
                />
                {errors.senderPhone && (
                  <span className="text-xs text-red-500">
                    Sender Phone No is required
                  </span>
                )}
              </div>

              {/* sender pickup instruction */}
              <div className="w-full mt-5">
                <label className="label">Pickup Instruction</label>
                <textarea
                  className="input outline-none w-full"
                  placeholder="Pickup Instruction"
                  {...register("senderInstruction", { required: true })}
                />
                {errors.senderInstruction && (
                  <span className="text-xs text-red-500">
                    Sender Instruction is required
                  </span>
                )}
              </div>
            </div>
            <div className="w-full">
              {/* receiver info */}
              <h2 className="text-secondary text-2xl ">Receiver Details</h2>
              {/* receiver name  */}
              <div className="w-full mt-5">
                <label className="label">Receiver Name</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Receiver Name"
                  {...register("receiverName", { required: true })}
                />
                {errors.receiverName && (
                  <span className="text-xs text-red-500">
                    Receiver Name is required
                  </span>
                )}
              </div>
              {/* region */}
              <div className="w-full mt-5">
                <fieldset className="fieldset w-full">
                  <label className="label">Receiver Region</label>
                  <select
                    {...register("receiverRegion", {
                      validate: (value) =>
                        value !== "Pick a region" ||
                        "Receiver Region is required",
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
                  {errors.receiverRegion && (
                    <span className="text-xs text-red-500">
                      {errors.receiverRegion?.message}
                    </span>
                  )}
                </fieldset>
              </div>
              {/* districts */}
              <div className="w-full mt-5">
                <fieldset className="fieldset w-full">
                  <label className=" label">Receiver District</label>
                  <select
                    {...register("receiverDistrict", {
                      validate: (value) =>
                        value !== "Pick a district" ||
                        "Receiver District is required",
                    })}
                    defaultValue="Pick a district"
                    className="select w-full">
                    <option disabled={true}>Pick a district</option>
                    {districtByRegion(receiverRegion).map((r, i) => (
                      <option key={i} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  {errors.receiverDistrict && (
                    <span className="text-xs text-red-500">
                      {errors.receiverDistrict?.message}
                    </span>
                  )}
                </fieldset>
              </div>
              {/* receiver address */}
              <div className="w-full mt-5">
                <label className="label">Receiver Address</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Receiver Address"
                  {...register("receiverAddress", { required: true })}
                />
                {errors.receiverAddress && (
                  <span className="text-xs text-red-500">
                    Receiver Address is required
                  </span>
                )}
              </div>
              {/* receiver phone */}
              <div className="w-full mt-5">
                <label className="label">Receiver Phone No</label>
                <input
                  type="number"
                  className="input outline-none w-full"
                  placeholder="Receiver Phone No"
                  {...register("receiverPhone", { required: true })}
                />
                {errors.receiverPhone && (
                  <span className="text-xs text-red-500">
                    Receiver Phone No is required
                  </span>
                )}
              </div>
              {/* receiver district */}
              {/* receiver pickup instruction */}
              <div className="w-full mt-5">
                <label className="label">Pickup Instruction</label>
                <textarea
                  className="input outline-none w-full"
                  placeholder="Pickup Instruction"
                  {...register("receiverInstruction", { required: true })}
                />
                {errors.receiverInstruction && (
                  <span className="text-xs text-red-500">
                    Receiver Instruction is required
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <button className="bg-primary text-secondary px-6 py-2 font-medium rounded-xl cursor-pointer">
              Send Parcel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
