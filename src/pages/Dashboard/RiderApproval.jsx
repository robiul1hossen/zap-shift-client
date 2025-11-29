import React from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { IoPersonRemoveSharp } from "react-icons/io5";
import { FaUserCheck } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import { toast } from "react-toastify";

const RiderApproval = () => {
  const axiosSecure = useAxiosSecure();
  const { data: riders = [], refetch } = useQuery({
    queryKey: ["riders", "approve"],
    queryFn: async () => {
      const res = await axiosSecure.get(`riders`);
      return res.data;
    },
  });
  const handleApproval = (rider, status) => {
    console.log(rider._id, status);
    const updatedInfo = { status: status, email: rider.email };
    console.log(updatedInfo);
    axiosSecure.patch(`/riders/${rider._id}`, updatedInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`Rider hab been ${status}`);
      }
    });
  };
  const handleReject = (rider, status) => {
    const updatedInfo = { status: status, email: rider.email };
    axiosSecure.patch(`/riders/${rider._id}`, updatedInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        toast.success(`Rider hab been ${status}`);
      }
    });
  };
  const handleDelete = (id) => {
    axiosSecure.delete(`riders/${id}`).then((res) => {
      if (res.data.deletedCount) {
        toast.success("rider application has been deleted");
      }
    });
  };
  return (
    <div>
      <h2 className="text-secondary text-2xl ">
        Pending Rider For Approval {riders.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>District</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {riders.map((rider, i) => (
              <tr key={rider._id}>
                <th>{i + 1}</th>
                <td>{rider.name}</td>
                <td>{rider.email}</td>
                <td>{rider.riderDistrict}</td>

                <td>
                  {rider.status === "approved" ? (
                    <span className="text-green-800">{rider.status}</span>
                  ) : rider.status === "reject" ? (
                    <span className="text-red-500">{rider.status}</span>
                  ) : (
                    <span className="">{rider.status}</span>
                  )}
                </td>

                <td>
                  <div className="flex gap-1">
                    <button
                      onClick={() => handleApproval(rider, "approved")}
                      className="btn btn-sm">
                      <FaUserCheck />
                    </button>
                    <button
                      onClick={() => handleReject(rider, "rejected")}
                      className="btn btn-sm">
                      <IoPersonRemoveSharp />
                    </button>
                    <button
                      onClick={() => handleDelete(rider._id)}
                      className="btn btn-sm">
                      <FaTrashCan />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiderApproval;
