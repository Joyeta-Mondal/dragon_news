import { createContext, useEffect, useState } from "react";
import app from "../components/Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  //   create new user
  const createNewUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // observer to observe if a user is logged in, signed up or signed out. This only executes once.
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //   user login
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  //   log out
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    createNewUser,
    userLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
