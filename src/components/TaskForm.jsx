import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../auth/AuthContext';
import TaskContext from '../context/TaskContext';

function TaskForm(props) {
    const init = {
        title: "",
        description: "",
        duedate: ""
    }

    const { isUpdate, data, setIsUpdate } = props;
    console.log(data);
    const [formData, setFormData] = useState(init);
    const { message, user, setMessage } = useContext(AuthContext);
    const { addTask, updateTask } = useContext(TaskContext);

    useEffect(() => {
        if (isUpdate) {
            setFormData(data);
        }
    }, [isUpdate])


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

    const submitUpdate = (e) => {
        e.preventDefault();
        updateTask(formData);
    }

    const cancel = (e) => {
        e.preventDefault();
        setIsUpdate(false);
        setFormData(init);
    }

    return (
        <div className='p-3 w-50'>
            <h3 className='text-white'>{isUpdate ? "Update Task" : "Create Task"}</h3>
            <div className="card">
                <div className="card-body">
                    <form>
                        <div className='mb-3'>
                            <label className='form-label'>Title</label>
                            <input type="text" name='title' className='form-control' value={formData?.title} onChange={handleChange} />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Description</label>
                            <textarea name='description' className='form-control' value={formData?.description} onChange={handleChange} ></textarea>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Due Date</label>
                            <input type="datetime-local" name='duedate' className='form-control' value={formData?.duedate} onChange={handleChange} />
                        </div>
                        <p>{message}</p>
                        {
                            isUpdate ?
                                <>
                                    <button className='btn btn-primary' onClick={submitUpdate}>Update Task</button>
                                    <button className='btn btn-warning ms-2' onClick={cancel}>Cancel</button>
                                </>
                                :
                                <button onClick={submitForm} className='btn btn-primary'>Create Task</button>
                        }
                    </form>
                </div>
            </div>
        </div>
    );
}

export default TaskForm;