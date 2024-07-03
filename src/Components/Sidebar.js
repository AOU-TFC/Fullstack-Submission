import React, { useEffect, useRef, useState } from "react";
import "Styles/Sidebar.css";
import TaskCreator from "./TaskCreator";
import { getData } from "Services/GetData";
import { Link, useLocation } from "react-router-dom";
export default function Sidebar() {
  const path = useLocation();
  const [data, setData] = useState([]);
  const stopRender = useRef(false);
  const [modalOpen,setModalOpen] = useState(false);

  useEffect(() => {
    stopRender.current = true;
    if (stopRender.current === true) {
      const fetchData = async () => {
        const fetchedData = await getData();
        setData(fetchedData);
      };
      fetchData();
      stopRender.current = false;
    }
  }, []);
  return (
    <React.Fragment>
      {modalOpen && (<TaskCreator setModalOpen={setModalOpen}/>)}
      <div className="sidebar-container">
        <div className="create-btn" onClick={()=>{setModalOpen(true)}}>
          <button>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  fill="currentColor"
                  d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                ></path>
              </svg>
              Create
            </span>
          </button>
        </div>
        <div className="tasks-container">
          <ul>
            {data.map((item) => (
              <li
                key={item.id}
                className={path.pathname.includes(item.TaskID) ? "active" : ""}
              >
                <Link to={item.TaskID}>{item.TaskName}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
