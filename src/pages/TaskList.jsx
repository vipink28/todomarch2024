import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TaskContext from '../context/TaskContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import Popup from '../components/Popup';

function TaskList(props) {
    const { allTasks } = useContext(TaskContext);
    return (
        <div className='container'>
            <div className='p-5 bg-primary mt-5 text-white'>
                <div className='d-flex mb-2'>
                    <h3>Task List</h3>
                    <Link className='btn btn-info ms-auto' to="/create-task">Create Task</Link>
                </div>

                <div className='py-3'>
                    <div className='row border border-light py-2 text-warning'>
                        <div className='col-1'>Id</div>
                        <div className='col-2'>Title</div>
                        <div className='col-5'>Description</div>
                        <div className='col-2'>Due Date</div>
                        <div className='col-2'>Actions</div>
                    </div>
                    {
                        allTasks?.map((task) => {
                            return (
                                <div className='row border border-light py-2'>
                                    <div className='col-1'>{task?.id}</div>
                                    <div className='col-2'>{task?.title}</div>
                                    <div className='col-5'>{task?.description}</div>
                                    <div className='col-2'>{task?.duedate}</div>
                                    <div className='col-2'>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup">
                                            <FontAwesomeIcon icon={faEye} />
                                        </span>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup">
                                            <FontAwesomeIcon icon={faPenToSquare} />
                                        </span>
                                        <span className='px-2' data-bs-toggle="modal" data-bs-target="#task-popup">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <Popup />
        </div>
    );
}

export default TaskList;