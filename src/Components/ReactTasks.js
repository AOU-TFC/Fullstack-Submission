import React from "react";
import "Styles/React.css";
import Sidebar from "./Sidebar";
import Tasks from "./Tasks";
import { Outlet } from "react-router-dom";
export default function ReactTasks() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Sidebar />
        <Tasks />
      </div>
      <Outlet />
    </React.Fragment>
  );
}
