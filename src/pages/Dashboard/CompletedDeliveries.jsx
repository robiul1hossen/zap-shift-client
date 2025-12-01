import React, { use } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { AuthContext } from "../../context/AuthContext";
import { useQuery } from "@tanstack/react-query";

const CompletedDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user?.email, "rider_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=parcel_delivered`
      );
      return res.data;
    },
  });
  const calculatePayoutAmount = (parcel) => {
    if (parcel.senderDistrict === parcel.receiverDistrict) {
      return parcel.price * 0.6;
    } else {
      return parcel.price * 0.8;
    }
  };
  return (
    <div>
      <h2 className="text-2xl font-bold">
        {" "}
        Completed Deliveries {parcels.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Parcel Amount</th>
              <th>Payout Amount</th>
              <th>Pickup Location</th>
              <th>Delivery Location</th>
              <th>Created Ata</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.price}</td>
                <td>{calculatePayoutAmount(parcel)}</td>
                <td>{parcel.receiverDistrict}</td>
                <td>{parcel.createdAt}</td>
                <td>{parcel.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedDeliveries;
