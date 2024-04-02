import React from 'react';

function TaskForm(props) {
    return (
        <div className='p-3'>

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
    );
}

export default TaskForm;