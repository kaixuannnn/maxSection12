import React from 'react'

import classes from './Button.module.css'

const Button = (props) => {
  console.log('BUTTON RUNNINGG...')
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}
// and this time the React.memo able to do its job as we ensure that all the props values
// are never change
export default React.memo(Button)
