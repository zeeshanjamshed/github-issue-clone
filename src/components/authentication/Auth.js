import React from "react";
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

export default function Auth() {
  const token = localStorage.getItem("_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  },[token]);

  return (
    <div>
      <Outlet />
    </div>
  );
}
