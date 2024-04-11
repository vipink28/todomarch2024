import React, { useContext, useRef } from 'react';
import TaskForm from './TaskForm';
import TaskContext from '../context/TaskContext';
import AuthContext from '../auth/AuthContext';

function Popup(props) {
    const { dataType, data } = props;
    const { deleteTask } = useContext(TaskContext);
    const { message } = useContext(AuthContext);
    const closeBtn = useRef(null);

    return (
        <div className="modal" tabindex="-1" id='task-popup'>
            <div className="modal-dialog">
                <div className="modal-content bg-primary text-white">
                    <div className="modal-header">
                        <button ref={closeBtn} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {
                            dataType === "view" ?
                                <div>
                                    <h4>{data?.title}</h4>
                                    <p>{data?.description}</p>
                                    <div className='d-flex text-warning'>
                                        <p>Due Date: {data?.duedate}</p>
                                        <p className='ms-auto'>Modified On: {data?.modifiedon}</p>
                                    </div>
                                </div> : dataType === "edit" ?
                                    <div>
                                        <TaskForm isUpdate={true} data={data} isPopup={true} closeBtn={closeBtn} />
                                    </div> :
                                    <div>
                                        <p>Are you sure? You want to delete this task?</p>
                                        <div className='d-flex'>
                                            <button className='btn btn-danger ms-auto' onClick={() => { deleteTask(data?.id) }}>Yes</button>
                                            <button className='btn btn-warning ms-2'>Cancel</button>
                                        </div>
                                    </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;