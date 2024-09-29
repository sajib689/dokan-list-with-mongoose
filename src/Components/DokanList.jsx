import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Swal from "sweetalert2";

const DokanList = () => {
  const { data = [], isLoading, isError, refetch } = useQuery({
    queryKey: ['dokan'],
    queryFn: async () => {
      const res = await axios.get('https://dokan-list-server.vercel.app/dokan');
    
      return res.data.dokan; 
    },
  });

  const handleDelete = async (id) => {
    try {
      const res = await axios.delete(`https://dokan-list-server.vercel.app/dokan/${id}`);
      
      if (res.status === 200) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Delete Success",
          showConfirmButton: false,
          timer: 1500
        });
        refetch();  
      }
    } catch (error) {
      console.error(error);
      Swal.fire({
        position: "top-center",
        icon: "error",
        title: "Delete Failed",
        text: "Something went wrong!",
        showConfirmButton: true,
      });
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading data.</div>;

  if (!Array.isArray(data)) return <div>No data available</div>;

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold mb-8 text-white">Shop List</h2>

      {/* Add overflow auto for responsive scrolling */}
      <div className="overflow-x-auto  rounded-lg">
        <table className="table-auto w-full text-left bg-white shadow-lg rounded-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-4 py-2">Shop Name</th>
              <th className="px-4 py-2">Owner Name</th>
              <th className="px-4 py-2">Father's Name</th>
              <th className="px-4 py-2">Mother's Name</th>
              <th className="px-4 py-2">NID Number</th>
              <th className="px-4 py-2">Address</th>
              <th className="px-4 py-2">Blood Group</th>
              <th className="px-4 py-2">On Duty</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">Owner Photo</th>
              <th className="px-4 py-2">Shop Photo</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dokan) => (
              <tr key={dokan?._id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="px-4 py-2">{dokan?.shopName}</td>
                <td className="px-4 py-2">{dokan?.ownerName}</td>
                <td className="px-4 py-2">{dokan?.ownerFatherName}</td>
                <td className="px-4 py-2">{dokan?.ownerMotherName}</td>
                <td className="px-4 py-2">{dokan?.ownerIdNumber}</td>
                <td className="px-4 py-2">{dokan?.ownerAddress}</td>
                <td className="px-4 py-2">{dokan?.ownerBloodGroup}</td>
                <td className="px-4 py-2">{dokan?.ownerDuty ? "Yes" : "No"}</td>
                <td className="px-4 py-2">
                  <a href={`tel:${dokan?.ownerPhoneNumber}`} className="text-blue-500 underline">
                    {dokan.ownerPhoneNumber}
                  </a>
                </td>
                <td className="px-4 py-2">
                  <img src={dokan?.ownerPhoto} alt="Owner" className="w-16 h-16 object-cover rounded-full" />
                </td>
                <td className="px-4 py-2">
                  <img src={dokan?.ownerShopPhoto} alt="Shop" className="w-16 h-16 object-cover rounded" />
                </td>
                <td className="px-4 py-2 space-x-2 flex mt-4">
                  <button
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(dokan?._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
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

export default DokanList;
