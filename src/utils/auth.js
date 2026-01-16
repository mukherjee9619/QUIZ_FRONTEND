import { useNavigate } from "react-router-dom";

export const logout = () => {
  const navigate = useNavigate();

  localStorage.clear();
  sessionStorage.clear();
  // window.location.href = "/login";
  navigate("/login");
};
