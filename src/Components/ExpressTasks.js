import React from "react";
import Sidebar from "./Sidebar";
import Tasks from "./Tasks";

export default function ExpressTasks() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Sidebar />
        <Tasks />
      </div>
    </React.Fragment>
  );
}
