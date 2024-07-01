import React, { useState } from 'react'
import "Styles/Tasks.css"
export default function Tasks() {
    const [tasks,setTasks] = useState({
        fName: '',
        Id: '',
        repo: '',
        branch: ''
    });
    return (
        <React.Fragment>
            <div className='tasks-content'>
                <div className="table-container">
                    <h2>Table of submits<small> TFC</small></h2>
                    <ul className="responsive-table">
                        <li className="table-header">
                            <div className="col col-1">Short ID</div>
                            <div className="col col-2">Student Name</div>
                            <div className="col col-3">Branch</div>
                            <div className="col col-4">reposetory</div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="Short ID">230873</div>
                            <div className="col col-2" data-label="Student Name">Super Coordinator</div>
                            <div className="col col-3" data-label="Branch">Tripoli</div>
                            <div className="col col-4" data-label="reposetory"><a className="repo" href="https://github.com/sn-sniper/submit-ui.git">https://github.com/sn-sniper/submit-ui.git</a></div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="Short ID">230181</div>
                            <div className="col col-2" data-label="Student Name">Hassan Assaad</div>
                            <div className="col col-3" data-label="Branch">Badaro</div>
                            <div className="col col-4" data-label="reposetory"><a className="repo" href="https://github.com/sn-sniper/submit-ui.git">https://github.com/sn-sniper/submit-ui.git</a></div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="Short ID">230576</div>
                            <div className="col col-2" data-label="Student Name">Estelle Youssef</div>
                            <div className="col col-3" data-label="Branch">Tripoli</div>
                            <div className="col col-4" data-label="reposetory"><a className="repo" href="https://github.com/sn-sniper/submit-ui.git">https://github.com/sn-sniper/submit-ui.git</a></div>
                        </li>
                        <li className="table-row">
                            <div className="col col-1" data-label="Short ID">230843</div>
                            <div className="col col-2" data-label="Student Name">Rana Kiwan</div>
                            <div className="col col-3" data-label="Branch">Antelias</div>
                            <div className="col col-4" data-label="reposetory"><a className="repo" href="https://github.com/sn-sniper/submit-ui.git">https://github.com/sn-sniper/submit-ui.git</a></div>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}
