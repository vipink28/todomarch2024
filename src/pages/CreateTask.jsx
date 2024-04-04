import React, { useContext, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';

function CreateTask(props) {
    const { latestTask } = useContext(TaskContext);
    const [isUpdate, setIsUpdate] = useState(false);
    const edit = () => {
        setIsUpdate(true);
    }
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='d-flex align-items-center justify-content-center h-100 col-lg-6 flex-column bg-primary'>
                    <TaskForm isUpdate={isUpdate} data={latestTask} />
                </div>
                <div className='d-flex align-items-center justify-content-center h-100 col-lg-6 flex-column'>

                    <div className='card bg-primary text-white w-75 p-3'>
                        <div className='d-flex'>
                            <h3>Latest Task</h3>
                            <button className='btn btn-info ms-auto' onClick={edit}>Edit</button>
                        </div>
                        <h4>{latestTask?.title}</h4>
                        <p>{latestTask?.description}</p>
                        <div className='d-flex text-warning'>
                            <p>Due Date: {latestTask?.duedate}</p>
                            <p className='ms-auto'>Modified On: {latestTask?.modifiedon}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CreateTask;