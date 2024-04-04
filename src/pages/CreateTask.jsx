import React, { useContext } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';

function CreateTask(props) {
    const { latestTask } = useContext(TaskContext);
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='d-flex align-items-center justify-content-center h-100 col-lg-6 flex-column bg-primary'>
                    <TaskForm />
                </div>

                <div className='d-flex align-items-center justify-content-center h-100 col-lg-6 flex-column'>

                    <div className='card bg-primary text-white w-75 p-3'>
                        <div className='d-flex'>
                            <h3>Latest Task</h3>
                            <button className='btn btn-info ms-auto'>Edit</button>
                        </div>
                        <h4>{latestTask?.title}</h4>
                        <p>Description</p>
                        <div className='d-flex text-warning'>
                            <p>Due Date: 28/04/2024 10:00 AM</p>
                            <p className='ms-auto'>Modified On: 28/04/2024 10:00 AM</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateTask;