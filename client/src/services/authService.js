const API =
  "http://localhost:5000";
import api from "../lib/api";

export const loginWithGithub = () => {
  window.location.href =
    `${API}/api/auth/github`;
};

export const getCurrentUser = async () => {
  const { data } =
    await api.get("/auth/me");

  return data.user;
};