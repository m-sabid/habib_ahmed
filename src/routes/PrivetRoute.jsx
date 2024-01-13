/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Navigate } from "react-router";
import { jwtDecode } from "jwt-decode";

const PrivateRoute = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      const storedToken = sessionStorage.getItem("access-token");
      if (storedToken) {
        try {
          const decodedData = jwtDecode(storedToken);
          const userRole = decodedData.role;
          setIsAdmin(userRole === "admin");
        } catch (error) {
          console.error("Error decoding token:", error);
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }
      setInitialLoad(false);
    };

    checkAuthentication();
  }, []); // Removed [user] from the dependency array as it seems unnecessary

  // Redirect to login only if there is an access token, isAdmin is still false, and initialLoad is false
  if (!initialLoad && !isAdmin) {
    return <Navigate to="/login" />;
  }

  // Return the children if authenticated and admin, or if there is an access token
  return children;
};

export default PrivateRoute;
