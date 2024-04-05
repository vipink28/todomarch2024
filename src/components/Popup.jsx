import React from 'react';

function Popup(props) {
    return (
        <div className="modal" tabindex="-1" id='task-popup'>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>View</div>
                        <div>Edit</div>
                        <div>Delete</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popup;