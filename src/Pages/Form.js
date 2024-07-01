import React, { useState } from 'react'
import "Styles/Form.css";
import { db } from 'API/firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function Form() {
    const [formData, setFormData] = useState({
        fName: '',
        Id: '',
        repo: '',
        branch: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, 
        [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addDoc(collection(db, "Submissions"), formData);
            alert("Task Submitted");
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    };  

    return (
        <>
            <div className="container">
                <form className="form-container" onSubmit={handleSubmit}>
                    <p className="title">Submit your task</p>
                    <div className="input-container">
                        <input className="input" type="text" placeholder="Fullname" name='fName' onChange={handleChange} required/>
                        <input className="input" type="text" placeholder="Short ID" name='Id' onChange={handleChange} required/>
                        <input className="input" type="text" placeholder="Reposetory Link" name='repo' onChange={handleChange} required/>
                        <div className="branch">
                            <label htmlFor="Branch">Select your Branch:</label>
                            <div className="radio-inputs">
                                <label className="radio">
                                    <input type="radio" name="branch" onChange={handleChange} value='Badaro' />
                                    <span className="name">Badaro</span>
                                </label>
                                <label className="radio">
                                    <input type="radio" name="branch" onChange={handleChange} value='Tripoli' />
                                    <span className="name">Tripoli</span>
                                </label>

                                <label className="radio">
                                    <input type="radio" name="branch" onChange={handleChange} value='Antelias' />
                                    <span className="name">Antelias</span>
                                </label>
                            </div>
                        </div>
                        <button className="continue-application" type='Submit'>
                            <div>
                                <div className="pencil"></div>
                                <div className="folder">
                                    <div className="top">
                                        <svg viewBox="0 0 24 27">
                                            <path
                                                d="M1,0 L23,0 C23.5522847,-1.01453063e-16 24,0.44771525 24,1 L24,8.17157288 C24,8.70200585 23.7892863,9.21071368 23.4142136,9.58578644 L20.5857864,12.4142136 C20.2107137,12.7892863 20,13.2979941 20,13.8284271 L20,26 C20,26.5522847 19.5522847,27 19,27 L1,27 C0.44771525,27 6.76353751e-17,26.5522847 0,26 L0,1 C-6.76353751e-17,0.44771525 0.44771525,1.01453063e-16 1,0 Z">
                                            </path>
                                        </svg>
                                    </div>
                                    <div className="paper"></div>
                                </div>
                            </div>
                            Submit
                        </button>

                    </div>
                </form>
            </div>
        </>
    )
}
