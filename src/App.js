import React from "react";
import "Styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "Pages/Form";
import Admin from "Pages/Admin";
import ReactTasks from 'Components/ReactTasks';
import ExpressTasks from 'Components/ExpressTasks';
import Navbar from "Components/Navbar";

function App() {
  const location = window.location.pathname.includes('/secret')
  return (
    <div className="App">
      <BrowserRouter>
        {location && <Navbar />}
        <Routes>
          <Route path="/" element={<Form />}/>
          <Route path="/secret" element={<Admin />} />
          <Route path="/secret/react-tasks" element={<ReactTasks />} />
          <Route path="/secret/express-tasks" element={<ExpressTasks />} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
