import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from 'Components/Navbar';
import "Styles/Admin.css";

export default function Admin() {
  return (
    <div className="Admin">
      <Outlet />
    </div>
  );
}
