import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../../firebase.config";
export const AuthContext = createContext(null);



// -------------------------------------------
const AuthProvider = ({ children }) => {
            const [user, setUser] = useState(null);
            const [loading,setLoading]=useState(true)

            const createUser = (email, password) => {
              setLoading(true)
              return createUserWithEmailAndPassword(auth, email, password);
  };



  const logUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (toUser) => {
      setUser(toUser);
    setLoading(false)

    });
    return () => {
      unsubscribe;
    };

  });

  const logOut=()=>{
    setLoading(true)
    return signOut(auth)

  }


  const authInfo = { user, createUser, logUser,logOut,loading };

  return (
    <AuthContext.Provider value={authInfo}>
      
      {children}
      
      </AuthContext.Provider>
  );
};

export default AuthProvider;
AuthProvider.propTypes = {
  children: PropTypes.node,
};




