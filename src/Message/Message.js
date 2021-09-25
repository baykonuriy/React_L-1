import React from "react"
import classes from './Message.module.css'

export const Message = (props) => {
    return(
        <div 
            className={classes['container']}>
            <div className={classes['messagewrapper']}>
                <p className={classes['user']}>{props.userName}</p>
                <span onClick={props.removeItem}>x</span>
            </div>
            <p className={classes['paragraph']}>{props.userText}</p>
            <p className={classes['date']}>{props.date}</p>
        </div >
    )
}


