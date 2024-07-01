import React from 'react';
import "Styles/React.css";
import Sidebar from './Sidebar';
import Tasks from './Tasks';
export default function ReactTasks() {
  return (
    <React.Fragment>
      <div className='wrapper'>
        <Sidebar />
        <Tasks />
      </div>
    </React.Fragment>
  )
}
