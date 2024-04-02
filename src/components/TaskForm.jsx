import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../auth/AuthContext';
import TaskContext from '../context/TaskContext';

function TaskForm(props) {


    const [formData, setFormData] = useState();
    const { message, user, setMessage } = useContext(AuthContext);
    const { addTask } = useContext(TaskContext);

    useEffect(() => {
        setMessage("");
    }, [])

    const handleChange = (e) => {
        let { name, value } = e.target;
        setFormData((prev) => {
            return {
                ...prev,
                [name]: value,
                userid: user.id,
                modifiedon: Date()
            }
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        addTask(formData)
    }


    return (
        <div className='p-3 w-50'>
            <h3 className='text-white'>Create Task</h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className='mb-3'>
                            <label className='form-label'>Title</label>
                            <input type="text" name='title' className='form-control' onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Description</label>
                            <textarea name='description' className='form-control' onChange={handleChange} ></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Due Date</label>
                            <input type="datetime-local" name='duedate' className='form-control' onChange={handleChange} />
                        </div>
                        <p>{message}</p>
                        <button onClick={submitForm} className='btn btn-primary'>Create Task</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;