import React, { use } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const AssignDeliveries = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = use(AuthContext);
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email, "rider_assigned"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/rider?riderEmail=${user?.email}&deliveryStatus=rider_assigned`
      );
      return res.data;
    },
  });
  const handleDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = { deliveryStatus: status };
    const message = ` Status updating with the message ${status
      .split("_")
      .join(" ")}`;
    axiosSecure
      .patch(`parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          toast.success(message);
          refetch();
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold">
        Assigned Deliveries {parcels.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Parcel Type</th>
              <th>Delivery District</th>
              <th>Confirmations</th>
              <th>Other Actions</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.parcelType}</td>
                <td>{parcel.receiverDistrict}</td>
                <td>
                  {parcel.deliveryStatus === "rider_arriving" ||
                  parcel.deliveryStatus === "parcel_pickup" ? (
                    <span>Accepted</span>
                  ) : (
                    <>
                      <button
                        onClick={() =>
                          handleDeliveryStatusUpdate(parcel, "rider_arriving")
                        }
                        className="btn btn-primary text-secondary btn-sm">
                        Accept
                      </button>
                      <button className="btn btn-warning text-secondary btn-sm ms-2">
                        Reject
                      </button>
                    </>
                  )}
                </td>
                <td>
                  {parcel.deliveryStatus === "parcel_pickup" ? (
                    <span>Parcel Picked Up</span>
                  ) : (
                    <button
                      onClick={() =>
                        handleDeliveryStatusUpdate(parcel, "parcel_pickup")
                      }
                      className="btn btn-primary text-secondary btn-sm">
                      Mark As pick up
                    </button>
                  )}
                  <button
                    onClick={() =>
                      handleDeliveryStatusUpdate(parcel, "parcel_delivered")
                    }
                    className="btn btn-primary text-secondary btn-sm mx-2">
                    Mark As Delivered
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignDeliveries;
