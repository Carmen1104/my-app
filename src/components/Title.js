import React from 'react'
import '../styles/Style.css';

function Title({children}) {
  return (
    <div>
        <p className='title'> {children} </p>
    </div>
  )
}

export default Title;