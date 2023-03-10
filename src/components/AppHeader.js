import React, { useState} from 'react'
import Button, { SelectButton } from "./Button";
import '../styles/Style.css';
import TodoModal from './TodoModal';

function AppHeader() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className='appHeader'>
            <Button onClick={() => setModalOpen(true)}>
                Add Task
            </Button>
            <SelectButton id='status'>
                <option value="all">All</option>
                <option value="incomplete">Incomplete</option>
                <option value="completed">Completed</option>
            </SelectButton>
            <TodoModal modalOpen = {modalOpen} setModalOpen = {setModalOpen}></TodoModal>
        </div>
    )
}

export default AppHeader;
