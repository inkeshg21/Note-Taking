import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from "react";

import api from "../services/api";
import verifyUserToken from "../utils/verifyUserToken";

export const AuthContext = createContext({});

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const localUser = JSON.parse(localStorage.getItem("user"));
    const localToken = localStorage.getItem("token");

    if (localUser && localToken) {
      api.defaults.headers.common.Authorization = `Bearer ${localToken}`;
      return {
        user: localUser,
        token: localToken,
      };
    }

    return null;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/auth", {
      email,
      password,
    });

    const { data } = response;

    const userData = {};

    Object.assign(userData, data);

    setUser(userData);

    localStorage.setItem("token", userData.token);
    localStorage.setItem("user", JSON.stringify(userData.user));

    api.defaults.headers.common.Authorization = `Bearer ${userData.token}`;
  }, []);

  const signOut = useCallback(() => {
    setUser(null);

    localStorage.removeItem("token");
    localStorage.removeItem("user");
  }, []);

  useEffect(() => {
    const verifyToken = async () => {
      if (user && user.token) {
        const tokenStatus = await verifyUserToken(user.token);

        if (tokenStatus.expired) {
          delete api.defaults.headers.common.Authorization;
          signOut();
          return;
        }

        if (!tokenStatus.expired) {
          api.defaults.headers.common.Authorization = `Bearer ${user.token}`;
        }
      }
    };

    verifyToken();
  }, [signOut, user]);

  return (
    <AuthContext.Provider value={{ signIn, signOut, data: user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
};
