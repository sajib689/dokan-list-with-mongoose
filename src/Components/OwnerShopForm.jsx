import React from 'react';

const ShopOwnerForm = () => {
  return (
    <form className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Shop Owner Form</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Shop Name</label>
        <input type="text" name="shopName" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner Name</label>
        <input type="text" name="ownerName" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner Father Name</label>
        <input type="text" name="ownerFatherName" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner Mother Name</label>
        <input type="text" name="ownerMotherName" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner ID Number</label>
        <input type="text" name="ownerIdNumber" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner Address</label>
        <input type="text" name="ownerAddress" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner Blood Group</label>
        <input type="text" name="ownerBloodGroup" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner Duty</label>
        <input type="checkbox" name="ownerDuty" className="mr-2 leading-tight" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner Phone Number</label>
        <input type="text" name="ownerPhoneNumber" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner Photo</label>
        <input type="file" name="ownerPhoto" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Owner Shop Photo</label>
        <input type="file" name="ownerShopPhoto" className="w-full border border-gray-300 p-2 rounded-md" />
      </div>

      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default ShopOwnerForm;
