import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import axios from "axios";
import Swal from "sweetalert2";

const imageApiKey = import.meta.env.VITE_IMAGE_API;
const image_url = `https://api.imgbb.com/1/upload?key=${imageApiKey}`;

const Registration = () => {
  const { createAccount } = useContext(AuthContext);

  const handleRegistration = async (e) => {
    e.preventDefault();
    
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.files[0];
    const password = form.password.value;
    
    // Check if the image file exists before sending the request
    if (!image) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please upload the image!",});
      return;
    }

    try {
      // Upload image to imgbb
      const formData = new FormData();
      formData.append("image", image);
      const res = await axios.post(image_url, formData);
      const imageFile = res.data.data.display_url;

      // Create account and update profile
      const result = await createAccount(email, password);
      const user = result.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: imageFile,
      });

      // Reset the form after successful submission
      form.reset();
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Registration Success!!!",
        showConfirmButton: false,
        timer: 1500
      });

    } catch (error) {
      console.error("Error during registration:", error);
      alert("Error during registration. Please check the console for details.");
    }
  };

  return (
    <form onSubmit={handleRegistration} className="mt-12 mb-12 max-w-4xl container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block font-semibold text-white mb-2">Name</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-semibold text-white mb-2">Email</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-3">
        <div>
          <label htmlFor="image" className="block font-semibold text-white mb-2">Image</label>
          <input
            type="file"
            name="image"
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block font-semibold text-white mb-2">Password</label>
          <input
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            required
          />
        </div>
      </div>
      <button className="btn mt-3 bg-blue-600 border-none text-white">Register</button>
    </form>
  );
};

export default Registration;
