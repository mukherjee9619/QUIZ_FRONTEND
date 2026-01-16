import axios from "axios";

export const loginUser = async (data) => {
  return axios.post("https://quiz-backend-gamma.vercel.app/api/login", data);
};
