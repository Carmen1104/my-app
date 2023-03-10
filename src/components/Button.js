import React from 'react'
import '../styles/Style.css';

function Button({ children, type, ...rest}) {
  return (
    <button className='button' 
    type= {type === 'submit' ? 'submit' : 'button'} {...rest}>
        {children}
    </button>
  )
}

function SelectButton({ children, ...rest}) {
    return (
        <select className='button'{...rest}>
            {children}
        </select>
    )
}

export { SelectButton};
export default Button;