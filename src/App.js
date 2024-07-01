import React from "react";
import "Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "Pages/Form";
import Admin from "Pages/Admin";
import ReactTasks from "Components/ReactTasks";
import ExpressTasks from "Components/ExpressTasks";
import Navbar from "Components/Navbar";

function App() {
  const location = window.location.pathname.includes("/secret");
  return (
    <div className="App">
      <BrowserRouter>
        {location && <Navbar />}
        <Routes>
          <Route path="/form/:task_id" element={<Form />} />
          <Route path="/secret" element={<Admin />}>
            <Route path="react-tasks" element={<ReactTasks />} />
            <Route path="express-tasks" element={<ExpressTasks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
