import React, { useState } from "react";
import "Styles/TaskCreator.css";
import ID_Generator from "Services/ID_Generator";
import { createTask } from "Services/Creations";

export default function TaskCreator({setModalOpen}) {
  const [taskInfo, setTaskInfo] = useState({
    TaskName: "",
    TaskId: "",
    Submissions: [],
  });

  const handleInput = (e) => {
    e.preventDefault();
    setTaskInfo({ ...taskInfo, [e.target.name]: e.target.value });
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(
        `${window.location.protocol}//${window.location.hostname}/form/${taskInfo.TaskId}`
      )
      .then(alert("Link Copied!"));
  };

  const handleGenerate = () => {
    let ID = ID_Generator();
    setTaskInfo({ ...taskInfo, TaskId: ID });
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    await createTask(taskInfo);
    window.location.reload();
    setModalOpen = false;
  };
  const CloseModal = () => {
    window.location.reload();
  }
  return (
    <React.Fragment>
      <div className="CreateModal">
        <form className="creator-container" onSubmit={handleCreate}>
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
          </div>
          <button type="button" className="copy" onClick={handleCopy}>
              <ion-icon id="copy" name="copy-outline"></ion-icon><p>Copy Link</p>
            </button>
            <button type="button" className="generate" onClick={handleGenerate}>
              <ion-icon id="generate" name="sparkles-outline"></ion-icon><p>Generate</p>
            </button>
          <button type="submit" className="createBtn">
            Create
          </button>
          <button className="closeBtn" type="button" onClick={CloseModal}>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
