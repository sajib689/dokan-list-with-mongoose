import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2"; // Make sure you have imported Swal

const Login = () => {
  const { login } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    login(email, password)
      .then((result) => {
        const user = result.user;
        if (user) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  return (
    <form
      onSubmit={handleLogin}
      className="mt-12 mb-12 max-w-sm p-3 container mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block font-semibold text-white mb-2"
          >
            Email
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            name="email"
            placeholder="Enter Your Email"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block font-semibold text-white mb-2"
          >
            Password
          </label>
          <input
            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
          <p className="text-white mt-1">
            Are you have an{" "}
            <Link to="/registration" className="underline">
              account?
            </Link>
          </p>
        </div>
      </div>
      <button className="btn w-full mt-3 bg-blue-600 text-white hover:bg-blue-700 border-0">
        Login
      </button>
    </form>
  );
};

export default Login;
