import React, { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Layout from "../../layout/Layout";

export default function Protected() {
  const token = localStorage.getItem("_token");
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  return (
      <Layout>
        <Outlet />
      </Layout>
  );
}
