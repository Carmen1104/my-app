import { format } from 'date-fns/esm';
import React, { useEffect, useState} from 'react'
import '../styles/Style.css';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../util/getClasses';
import CheckButton from './CheckButton';

function TodoItem({ todo }) {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        if (todo.status === 'complete') {
            setChecked(true);
        } else {
            setChecked(false);
        }
    }, [todo.status]);

  return (
    <div className='items'>
        <div className='todoDetails'>
            <CheckButton checked={checked} setChecked={setChecked}/>
            <div className='texts'>
                <p className={getClasses([
                    styles.todoText,
                    todo.status === 'complete' && styles['todoText--complete'],
                ])}>,
                    {todo.title}
                </p>
                <p className='time'>
                    {format(new Date(todo.time), 'p, MM/dd/yyyy')}
                </p>
            </div>
        </div>
    </div>
  )
}

export default TodoItem;