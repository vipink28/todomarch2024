import React from 'react';
import TaskForm from './TaskForm';

function Popup(props) {
    const { dataType, data } = props;

    return (
        <div className="modal" tabindex="-1" id='task-popup'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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
                                        <TaskForm />
                                    </div> :
                                    <div>Delete</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;