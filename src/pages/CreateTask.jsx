import React, { useContext, useState } from 'react';
import TaskForm from '../components/TaskForm';
import TaskContext from '../context/TaskContext';
import { Link } from 'react-router-dom';

function CreateTask(props) {
    const { latestTask, recentTasks } = useContext(TaskContext);
    const [isUpdate, setIsUpdate] = useState(false);
    const edit = () => {
        setIsUpdate(true);
    }
    return (
        <div className='container-fluid h-100'>
            <div className='row h-100'>
                <div className='d-flex align-items-center justify-content-center h-100 col-lg-6 flex-column bg-primary'>
                    <TaskForm isUpdate={isUpdate} data={latestTask} setIsUpdate={setIsUpdate} />
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

                    <div className='card bg-primary text-white w-75 p-3 mt-4'>
                        <div className='d-flex'>
                            <h3>Recent Tasks</h3>
                        </div>
                        {
                            recentTasks?.map((task) => {
                                return (
                                    < div className='d-flex border border-warning p-2'>
                                        <p className='mb-0'>{task?.title}</p>
                                        <p className='ms-auto mb-0'>{task?.duedate}</p>
                                    </div>
                                )
                            })
                        }

                        <Link className='text-info d-inline-block mt-4' to="/task-list">View All</Link>
                    </div>



                </div>
            </div>
        </div >
    );
}

export default CreateTask;