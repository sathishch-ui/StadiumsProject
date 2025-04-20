import React from "react";
import { Routes, Route } from "react-router";
import ProtectedRoute from "./ProtectedRoute";
import DashBoardLayout from "../layouts/DashBoardLayout";
import Login from "../pages/Login";
import DashBoard from "../pages/Dashboard";
import Users from "../pages/Users";
import Sports from "../pages/Sports";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <DashBoardLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<DashBoard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/sports" element={<Sports />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
