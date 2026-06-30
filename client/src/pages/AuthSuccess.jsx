import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function AuthSuccess() {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(
      window.location.search
    );

    const token = params.get("token");

    if (token) {
      localStorage.setItem("authToken", token);
    }

    navigate("/dashboard");
  }, []);

  return null;
}

export default AuthSuccess;