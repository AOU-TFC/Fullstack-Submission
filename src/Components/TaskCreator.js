import React, { useState } from "react";
import "Styles/TaskCreator.css";
import ID_Generator from "Services/ID_Generator";

export default function TaskCreator() {
  const [taskInfo, setTaskInfo] = useState({
    TaskName: "",
    TaskId: "",
    Submissions: [],
  });

  const handleInput = (e) => {
    e.preventDefault();
    setTaskInfo({ ...taskInfo, [e.target.name]: e.target.value });
  };

  const handleGenerate = () => {
    let ID = ID_Generator();
    setTaskInfo({ ...taskInfo, TaskId: ID });
  };

  return (
    <React.Fragment>
      <form className="creator-container">
        <div className="input">
          <input
            type="text"
            placeholder="Task Name"
            name="TaskName"
            onChange={handleInput}
          />
        </div>
        <div className="input">
          <input
            type="text"
            placeholder="ID"
            name="TaskID"
            readOnly
            value={taskInfo.TaskId}
          />
          <button type="button" className="copy">
            CC
          </button>
          <button type="button" className="generate" onClick={handleGenerate}>
            Generate
          </button>
        </div>
        <button type="submit">Create</button>
      </form>
    </React.Fragment>
  );
}
