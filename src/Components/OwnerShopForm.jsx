import React from 'react';

const ShopOwnerForm = () => {
  return (
    <form className="mb-24 mt-12 max-w-6xl mx-auto p-8  shadow-lg rounded-lg space-y-6">
      <h2 className="text-3xl font-extrabold mb-12 text-start text-white">Shop Owner Form</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-white font-semibold mb-2">Shop Name</label>
          <input type="text" name="shopName" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner Name</label>
          <input type="text" name="ownerName" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner Father Name</label>
          <input type="text" name="ownerFatherName" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner Mother Name</label>
          <input type="text" name="ownerMotherName" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner NID Number</label>
          <input type="text" name="ownerIdNumber" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner Address</label>
          <input type="text" name="ownerAddress" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner Blood Group</label>
          <input type="text" name="ownerBloodGroup" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner Duty</label>
          <div className="flex items-center">
            <input type="checkbox" name="ownerDuty" className="w-4 h-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
            <span className="ml-2 text-white">On Duty</span>
          </div>
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner Phone Number</label>
          <input type="text" name="ownerPhoneNumber" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner Photo</label>
          <input type="file" name="ownerPhoto" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <label className="block text-white font-semibold mb-2">Owner Shop Photo</label>
          <input type="file" name="ownerShopPhoto" className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
        Submit
      </button>
    </form>
  );
};

export default ShopOwnerForm;
