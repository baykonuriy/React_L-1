import React from "react"
import classes from './Button.module.css'

export const Button = (props) =>{
    let buttonClass = ''
    switch(props.name){
        case 'ghost': buttonClass = 'ghost'
        break
        case 'primary': buttonClass = 'primary'
        break
        default: buttonClass = 'ghost'
    }

    return(
        <button
            className={classes[buttonClass]}
            onClick={props.clickHandler}>
            {props.title}
        </button>
    )
}