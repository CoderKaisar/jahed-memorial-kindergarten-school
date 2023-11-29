import React, { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = () => {
  // const [user, setUser] = useState(null);

  // const createUser = (email, password) => {
  //   createUserWithEmailAndPassword(auth, email, password);
  // };
  const authInfo = {};
  return <AuthContext.Provider value={authInfo}></AuthContext.Provider>;
};

export default AuthProvider;
