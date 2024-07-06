import api from "../services/api";

const verifyUserToken = async (token) => {
  const { data } = await api.get(`/auth/verify/${token}`);
  return data.status;
};

export default verifyUserToken;
