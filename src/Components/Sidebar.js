import React, { useEffect, useState } from "react";
import "Styles/Sidebar.css";
import { getData } from "Services/GetData";
export default function Sidebar() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await getData();
      setData(fetchedData);
    };
    fetchData();
  }, []);
  return (
    <React.Fragment>
      <div className="sidebar-container">
        <div className="create-btn">
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
              <li key={item.id}>
                <pre>{item.TaskName}</pre>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
