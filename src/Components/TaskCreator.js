import React, { useState } from 'react';
import "Styles/TaskCreator.css";

export default function TaskCreator() {
    const [taskInfo, setTaskInfo] = useState({
        TaskName: '',
        TaskId: '',
        Submissions: []
    });

    const handleInput = (e) => {
        setTaskInfo({ ...taskInfo, [e.target.name]: e.taget.value });
    }

    return (
        <React.Fragment>
            <form className='creator-container'>
                <div className='input'>
                    <input type='text' placeholder='Task Name' name='TaskName' onChange={handleInput} />
                </div>
                <div className='input'>
                    <input type='text' placeholder='ID' name='TaskID' readOnly onChange={handleInput} />
                    <button type='button' className='copy'>CC</button>
                    <button type='button' className='generate' >Generate</button>
                </div>
                <button type='submit'>Create</button>
            </form>
        </React.Fragment>
    )
}
