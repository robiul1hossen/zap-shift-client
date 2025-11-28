import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loader from "../../components/Loader";

const Payment = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: parcel = {}, isLoading } = useQuery({
    queryKey: ["parcels", id],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels/${id}`);
      return res.data;
    },
  });
  const handlePayment = async () => {
    const paymentInfo = {
      parcelName: parcel.parcelName,
      parcelId: parcel._id,
      senderEmail: parcel.senderEmail,
      price: parcel.price,
    };
    const res = await axiosSecure.post(`/create-payment-session`, paymentInfo);
    console.log(res.data);
    window.location.href = res.data.url;
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Parcel Payment Summary
        </h2>

        {/* Parcel Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Parcel Type */}
          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Parcel Type</p>
            <p className="font-medium">{parcel.parcelType}</p>
          </div>

          {/* Parcel Name */}
          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Parcel Name</p>
            <p className="font-medium">{parcel.parcelName}</p>
          </div>

          {/* Weight */}
          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Parcel Weight</p>
            <p className="font-medium">{parcel.parcelWeight} kg</p>
          </div>

          {/* Price */}
          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Delivery Charge</p>
            <p className="font-semibold text-green-600 text-lg">
              ৳ {parcel.price}
            </p>
          </div>
        </div>

        {/* Sender Info */}
        <h3 className="text-xl font-semibold mt-6 mb-2">Sender Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Name</p>
            <p className="font-medium">{parcel.senderName}</p>
          </div>

          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Email</p>
            <p className="font-medium">{parcel.senderEmail}</p>
          </div>

          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="font-medium">{parcel.senderPhone}</p>
          </div>

          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Region / District</p>
            <p className="font-medium">
              {parcel.senderRegion}, {parcel.senderDistrict}
            </p>
          </div>

          <div className="border p-3 rounded-lg md:col-span-2">
            <p className="text-gray-500 text-sm">Address</p>
            <p className="font-medium">{parcel.senderAddress}</p>
          </div>

          {parcel.senderInstruction && (
            <div className="border p-3 rounded-lg md:col-span-2">
              <p className="text-gray-500 text-sm">Instruction</p>
              <p className="font-medium">{parcel.senderInstruction}</p>
            </div>
          )}
        </div>

        {/* Receiver Info */}
        <h3 className="text-xl font-semibold mt-6 mb-2">
          Receiver Information
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Name</p>
            <p className="font-medium">{parcel.receiverName}</p>
          </div>

          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Phone</p>
            <p className="font-medium">{parcel.receiverPhone}</p>
          </div>

          <div className="border p-3 rounded-lg">
            <p className="text-gray-500 text-sm">Region / District</p>
            <p className="font-medium">
              {parcel.receiverRegion}, {parcel.receiverDistrict}
            </p>
          </div>

          <div className="border p-3 rounded-lg md:col-span-2">
            <p className="text-gray-500 text-sm">Address</p>
            <p className="font-medium">{parcel.receiverAddress}</p>
          </div>

          {parcel.receiverInstruction && (
            <div className="border p-3 rounded-lg md:col-span-2">
              <p className="text-gray-500 text-sm">Instruction</p>
              <p className="font-medium">{parcel.receiverInstruction}</p>
            </div>
          )}
        </div>

        {/* Pay Button */}
        <div className="mt-8 text-center">
          <button
            onClick={handlePayment}
            className="bg-primary cursor-pointer hover:bg-green-400 text-secondary px-8 py-3 rounded-lg text-lg font-semibold shadow">
            Pay ৳ {parcel.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
