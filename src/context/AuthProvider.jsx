import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebaseConfig";
import axios from "axios";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        axios
          .post("https://tasty-pizza-server.vercel.app/jwt", { uid: user.uid })
          .then((res) => {
            localStorage.setItem("access-token", res.data.token);
            setLoading(false);
          });
        axios
          .get(`https://tasty-pizza-server.vercel.app/role/${user?.uid}`)
          .then((res) => {
            setRole(res.data.role);
          });
      } else {
        localStorage.removeItem("access-token");
      }
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userProfileUpdate = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, { displayName, photoURL });
  };

  const googleSignIn = () => signInWithPopup(auth, new GoogleAuthProvider());

  const logOut = () => signOut(auth);
  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        loginUser,
        googleSignIn,
        createUser,
        userProfileUpdate,
        logOut,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
