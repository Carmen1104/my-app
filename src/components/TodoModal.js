import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todoSlice';
import '../styles/Style.css';
import Button from './Button';
import { v4 as uuid } from 'uuid';

function TodoModal({ modalOpen, setModalOpen}) {
    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title && status) {
            dispatch(addTodo({
                id: uuid(),
                title,
                status,
                time: new Date().toLocaleString(),
            }));
        }   
    }
    return (
    modalOpen && (
        <div className='wrapper'>
            <div className='modContainer'>
                <div className='closeButton'>
                    <button onClick={() => setModalOpen(false)} 
                    onKeyDown={() => setModalOpen(false)}
                    tabIndex={0}>
                        Close
                    </button>
                </div>
                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                    <h1 className='formTitle'>
                        Add Task
                    </h1>
                    <label htmlFor='title'>
                        Title
                        <input type="text" id='title' value={title
                        } onChange={(e) => setTitle(e.target.value)}/>
                    </label>
                    <label htmlFor='Status'>
                        Status
                        <select name='status' id='status' value={status
                        } onChange={(e) => setStatus(e.target.value)}>
                            <option value='incomplete'>Incomplete</option>
                            <option value='Complete'>Complete</option>
                        </select>
                    </label>
                    <div className='buttonContainer'>
                        <Button type="submit">Add Task</Button>
                        <Button type="button" onClick={() => setModalOpen(false)} 
                    onKeyDown={() => setModalOpen(false)}>Cancel</Button>
                    </div>
                </form>
            </div>
        </div>
        )
  )
}

export default TodoModal;