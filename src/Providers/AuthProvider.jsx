/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { jwtDecode } from "jwt-decode";

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = sessionStorage.getItem("access-token");
    if (getUserData) {
      const data = jwtDecode(getUserData);
      setUser((prevUser) => ({
        ...prevUser,
        extendedData: data,
      }));
    }
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await signInWithPopup(auth, googleProvider);
      const { user } = result;

      // Perform additional actions if needed

      setLoading(false);
      setUser(user);
    } catch (error) {
      setLoading(false);
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleEmailPasswordSignIn = async (email, password) => {
    try {
      setLoading(true);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const { user } = result;

      // Perform additional actions if needed

      setLoading(false);
      setUser(user);
    } catch (error) {
      setLoading(false);
      console.error("Email/Password Sign-In Error:", error);
    }
  };

  const handleEmailPasswordSignUp = async (email, password) => {
    try {
      setLoading(true);
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const { user } = result;

      // Perform additional actions if needed

      setLoading(false);
      setUser(user);
    } catch (error) {
      setLoading(false);
      console.error("Email/Password Sign-Up Error:", error);
    }
  };

  const handleLogout = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        sessionStorage.removeItem("access-token");

        setLoading(false);
        setUser(null);

        window.location.href = "/";
      })
      .catch((error) => {
        setLoading(false);
        console.error("Logout Error:", error);
      });
  };

  const handleLogoutUIP = () => {
    setLoading(true);
    sessionStorage.removeItem("access-token-uip");

    setLoading(false);
    setUser(null);

    window.location.href = "/";
  };

  const authInfo = {
    user,
    loading,
    handleGoogleSignIn,
    handleLogout,
    setUser,
    handleLogoutUIP,
    handleEmailPasswordSignIn,
    handleEmailPasswordSignUp,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
