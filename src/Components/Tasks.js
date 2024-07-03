import React, { useEffect, useRef, useState } from "react";
import "Styles/Tasks.css";
// import TaskCreator from "./TaskCreator";
import { getData } from "Services/GetData";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
export default function Tasks() {
  const [data, setData] = useState([]);
  const stopRender = useRef(false);
  const { task } = useParams();
  useEffect(() => {
    stopRender.current = true;
    if (stopRender.current === true) {
      const fetchData = async () => {
        const fetchedData = await getData();
        setData(fetchedData.flatMap((item) => item.Submissions));
      };
      fetchData();
      stopRender.current = false;
    }
  }, []);
  const filteredData = data.filter((item) => item.task_id === task);
  return (
    <React.Fragment>
      <div className="tasks-content">
        <div className="table-container">
          <h2>
            Table of submits{' '}
            {window.location.pathname.includes('/react-tasks') && <small>React</small>}
            {window.location.pathname.includes('/express-tasks') && <small>Express</small>}
          </h2>

          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">Short ID</div>
              <div className="col col-2">Student Name</div>
              <div className="col col-3">Branch</div>
              <div className="col col-4">Repository</div>
            </li>
            {filteredData.map((item) => (
              <li className="table-row" key={item.Id}>
                <div className="col col-1" data-label="Short ID">
                  {item.Id}
                </div>
                <div className="col col-2" data-label="Student Name">
                  {item.fName}
                </div>
                <div className="col col-3" data-label="Branch">
                  {item.branch}
                </div>
                <div className="col col-4" data-label="repository">
                  <Link className="repo" to={item.repo} target="_blank">
                    {item.repo}
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
}
