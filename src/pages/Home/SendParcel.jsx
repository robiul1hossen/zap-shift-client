import React from "react";

const SendParcel = () => {
  return (
    <div className="bg-white p-10 rounded-2xl mb-[100px]">
      <div>
        <h2 className="text-4xl font-bold text-secondary">Send a Parcel</h2>
        <h4 className="text-2xl font-medium mt-4 text-secondary">
          Enter your parcel details
        </h4>
      </div>
      <div>
        <form>
          <div className="mt-10">
            <input
              type="radio"
              name="radio-4"
              className="radio radio-primary me-2"
              defaultChecked
            />
            <label htmlFor="document"> Document</label>
            <input
              type="radio"
              name="radio-4"
              className="radio radio-primary ms-10 me-2"
            />
            <label htmlFor="document">Non Document</label>
          </div>
          <div className="mt-6">
            <fieldset className="fieldset flex gap-10">
              <div className="w-full">
                <label className="label">Parcel Name</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Parcel Name"
                />
              </div>
              <div className="w-full">
                <label className="label">Parcel Weight (KG)</label>
                <input
                  type="number"
                  className="input outline-none w-full"
                  placeholder="Parcel Weight (KG)"
                />
              </div>
            </fieldset>
          </div>
          <div className="flex gap-10 mt-14">
            <div className="w-full">
              {/* sender info */}
              <h2 className="text-secondary text-2xl ">Sender Details</h2>
              <div className="w-full mt-5">
                <label className="label">Sender Name</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Sender Name"
                />
              </div>
              <div className="w-full mt-5">
                <label className="label">Sender Address</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Sender Address"
                />
              </div>
              <div className="w-full mt-5">
                <label className="label">Sender Phone No</label>
                <input
                  type="number"
                  className="input outline-none w-full"
                  placeholder="Sender Phone No"
                />
              </div>
              <div className="w-full mt-5">
                <label className="label">Seder District</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Sender District"
                />
              </div>
              <div className="w-full mt-5">
                <label className="label">Pickup Instruction</label>
                <textarea
                  className="input outline-none w-full"
                  placeholder="Pickup Instruction"
                />
              </div>
            </div>
            <div className="w-full">
              {/* receiver info */}
              <h2 className="text-secondary text-2xl ">Receiver Details</h2>
              <div className="w-full mt-5">
                <label className="label">Sender Name</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Sender Name"
                />
              </div>
              <div className="w-full mt-5">
                <label className="label">Sender Address</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Sender Address"
                />
              </div>
              <div className="w-full mt-5">
                <label className="label">Sender Phone No</label>
                <input
                  type="number"
                  className="input outline-none w-full"
                  placeholder="Sender Phone No"
                />
              </div>
              <div className="w-full mt-5">
                <label className="label">Seder District</label>
                <input
                  type="text"
                  className="input outline-none w-full"
                  placeholder="Seder District"
                />
              </div>
              <div className="w-full mt-5">
                <label className="label">Pickup Instruction</label>
                <textarea
                  className="input outline-none w-full"
                  placeholder="Pickup Instruction"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendParcel;
