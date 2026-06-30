const API =
  "http://localhost:5000";

export const loginWithGithub = () => {
  window.location.href =
    `${API}/api/auth/github`;
};