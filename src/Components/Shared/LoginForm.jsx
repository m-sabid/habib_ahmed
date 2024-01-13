import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useForm } from "react-hook-form";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useLocation, useParams } from "react-router-dom";
import { base_url } from "./urls";
import Loader from "./Loader";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Providers/AuthProvider";

const LoginForm = () => {
  const location = useLocation();

  const { user, handleGoogleSignIn } = useContext(AuthContext);
  const { email: urlEmail, password: urlPassword } = useParams();

  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const onSubmit = async (loginData) => {
    setLoading(true);
    try {
      const { email, password } = loginData;

      const direct_data = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        `${base_url}/users/login/`,
        direct_data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        const jwtToken = response.data.token;

        // Save the JWT token to session storage
        sessionStorage.setItem("access-token", jwtToken);

        setLoading(false);
        setLoginError(null);
        window.location.href = location.state?.from || "/";
      } else {
        // Handle login error
        setLoginError("Invalid email or password");
      }
    } catch (error) {
      setLoading(false);

      toast.error(error.response.data.error, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      console.error("An error occurred:", error);
      setLoginError("An error occurred during login");
    } finally {
      // Move the location("/") outside the try block
    }
  };

  const handleGoogleLogin = async () => {
    handleGoogleSignIn();
  };

  // If login with email/password or Google account
  useEffect(() => {
    const handleLogin = async () => {
      if (user && user.extendedData === undefined) {
        try {
          const headers = {
            "Content-Type": "application/json",
          };

          // Save user data to the database
          const submittedData = {
            name: user.displayName || "Your Name",
            email: user.email || "youremail@gmail.com",
            mobile_number: user.phoneNumber || "01000000000",
            age: "2000-01-01",
            profile_picture:
              user.photoURL ||
              "https://www.shutterstock.com/image-vector/user-profile-icon-vector-avatar-600nw-2247726673.jpg",
            gender: "Not Selected",
            present_address: "Not Selected",
            permanent_address: "Not Selected",
          };

          const response = await axios.post(
            `http://localhost:5000/users/with_email`,
            submittedData,
            { headers }
          );

          // Save the JWT token to session storage for Google login
          if (response.status === 200) {
            const jwtToken = response.data.token;
            sessionStorage.setItem("access-token", jwtToken);
          }
        } catch (error) {
          console.error("Error saving user data:", error);
        } finally {
          // Move the location("/") outside the try block
          window.location.href = location.state?.from || "/";
        }
      }
    };

    handleLogin();
  }, [user, location]);

  return (
    <>
      {loading ? (
        <Loader text={"Please wait..."} />
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-10/12 md:w-1/4 mx-auto p-4 grid grid-cols-2 gap-2 rounded-md bg-gray-500 bg-opacity-50 backdrop-blur-md"
        >
          {/* Email */}
          <div className="mb-4 col-span-2">
            <label htmlFor="email" className="block text-white mb-1 font-bold">
              Email
            </label>
            <input
              type="text"
              {...register("email", { required: true })}
              placeholder="Email"
              className="input input-bordered input-accent w-full"
            />
            {errors?.email && (
              <span className="text-red-500">This field is required</span>
            )}
          </div>

          {/* Password */}
          <div className="mb-4 col-span-2 w-full">
            <label
              htmlFor="password"
              className="block text-white mb-1 font-bold"
            >
              Password
            </label>
            <div className="relative bg-white rounded-lg">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                {...register("password", { required: true })}
                className="input input-bordered w-full pr-10"
                placeholder="Password"
              />
              <button
                type="button"
                className="absolute top-1/2 right-2 transform -translate-y-1/2"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <BsEyeSlashFill className="text-gray-500" />
                ) : (
                  <BsEyeFill className="text-gray-500" />
                )}
              </button>
            </div>
            {errors.password && (
              <span className="text-red-500">Password is required</span>
            )}
          </div>

          {/* Submit Button */}
          <div className="mb-4 col-span-2">
            <input
              type="submit"
              value="Enter"
              className="btn btn-primary w-full"
            />
          </div>
        </form>
      )}
      <div className="w-10/12 md:w-1/4 justify-center items-center mx-auto flex flex-col gap-4 p-4 rounded-md bg-gray-500 bg-opacity-50 backdrop-blur-md my-5">
        <p>I haven&apos;t an account</p>
        <Link to={"/singup"} className="text-blue-700">
          {" "}
          👆 Create a account
        </Link>

        <button
          onClick={handleGoogleLogin}
          className="btn hover:border-highlight hover:bg-secondary text-white "
        >
          Login with <FaGoogle />
        </button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default LoginForm;
