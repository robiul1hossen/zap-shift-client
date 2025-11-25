import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Link } from "react-router";

const MyParcels = () => {
  const { user } = use(AuthContext);
  const axiosSecure = useAxiosSecure();
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user?.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount) {
            refetch();
            toast.success("Your parcel has been deleted");
          }
        });
      }
    });
  };

  return (
    <div>
      <h2>all my parcels here {parcels?.length}</h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Price</th>
              <th>Payment</th>
              <th>Delivery Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {parcels.map((parcel, i) => (
              <tr key={parcel._id}>
                <th>{i + 1}</th>
                <td>{parcel.name}</td>
                <td>{parcel.price}</td>
                <td>
                  {parcel.paymentStatus === "paid" ? (
                    <span className="text-green-400">Paid</span>
                  ) : (
                    <Link>
                      <button className="btn btn-primary btn-xs text-secondary">
                        Pay
                      </button>
                    </Link>
                  )}
                </td>
                <td>{parcel?.deliveryStatus}</td>
                <td className="flex gap-1">
                  <button className="btn btn-xs">
                    <FaMagnifyingGlass />
                  </button>
                  <button className="btn btn-xs">
                    <FaEdit className="w-full" />
                  </button>
                  <button
                    onClick={() => handleDelete(parcel._id)}
                    className="btn btn-xs">
                    <FaTrash />
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

export default MyParcels;
