import axios from "axios";
import MainForm from "../Shared/MainForm";
import { Link, useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../Shared/Loader";
import { AuthContext } from "../../Providers/AuthProvider";

const formsData = [
  {
    fieldName: "Name",
    fieldType: "string",
    fieldPlaceholder: "Name",
    isRequired: true,
  },
  {
    fieldName: "Email",
    fieldType: "email",
    fieldPlaceholder: "example@gmail.com",
    isRequired: true,
  },
  {
    fieldName: "Mobile Number",
    fieldType: "string",
    fieldPlaceholder: "Mobile Number",
    isRequired: true,
  },
  {
    fieldName: "Age",
    fieldType: "date",
    fieldPlaceholder: "YYYY-MM-DD",
    isRequired: true,
  },
  {
    fieldName: "Gender",
    fieldType: "string",
    fieldPlaceholder: "Gender",
    isRequired: true,
  },
  {
    fieldName: "Present Address",
    fieldType: "string",
    fieldPlaceholder: "Present Address",
    isRequired: true,
  },
  {
    fieldName: "Permanent Address",
    fieldType: "string",
    fieldPlaceholder: "Permanent Address",
    isRequired: true,
  },
  {
    fieldName: "Password",
    fieldType: "password",
    fieldPlaceholder: "Password",
    isRequired: true,
  },
  {
    fieldName: "Confirm Password",
    fieldType: "password",
    fieldPlaceholder: "Confirm Password",
    isRequired: true,
  },
  {
    fieldName: "Profile Picture",
    fieldType: "file",
    fieldPlaceholder: "Profile Picture",
    isRequired: true,
  },
];

function SingUpPage() {
  const { handleEmailPasswordSignUp } = useContext(AuthContext);

  const location = useLocation();
  const [loading, setLoading] = useState(false);

  const submitFunction = async (payload) => {
    console.log(payload, "payload");
    setLoading(true);
    try {
      if (payload.password !== payload["confirm_password"]) {
        throw new Error("Passwords do not match");
      }

      handleEmailPasswordSignUp(payload.email, payload.password);

      const headers = {
        "Content-Type": "application/json",
      };

      const submittedData = { ...payload, status: true };

      const response = await axios.post(
        `http://localhost:5000/users`,
        submittedData,
        { headers }
      );

      if (response.status === 200) {
        sessionStorage.setItem("access-token", response?.data?.token);
        window.location.href = location.state?.from || "/";
      }

      return response.data;
    } catch (error) {
      console.error("Network Error:", error);

      if (error.response?.data?.error) {
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
      } else {
        toast.error("Network Error. Please try again later.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }

      throw new Error("Network Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[100vh] bg-gray-400 absolute z-50 w-full left-0 top-0">
      <div className="flex flex-col justify-center items-center my-10 min-h-screen">
        {loading ? (
          <Loader />
        ) : (
          <div className="w-10/12">
            <MainForm
              formsData={formsData}
              submitFunction={submitFunction}
              isReset={true}
            />
          </div>
        )}

        <div className=" w-10/12 md:w-4/4 my-5 mx-auto flex items-center justify-center gap-4 p-4 rounded-md bg-gray-500 bg-opacity-50 backdrop-blur-md">
          <p>I haven&apos;t an account</p>
          <Link to={"/login"} className="btn text-blue-700 border-white">
            👈 Back to Login
          </Link>
        </div>
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
    </div>
  );
}

export default SingUpPage;
