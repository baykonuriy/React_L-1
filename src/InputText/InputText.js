import React from "react"
import classes from './InputText.module.css'

export const InputText = (props)=>{

    return(
        <div className={classes['container']}>
            <label
                className={classes['label']} 
                htmlFor={props.forOrId}>
                {props.title}
            </label>
            <input
                type="text"
                value={props.value}
                onChange={props.inputHandle}
                placeholder={props.placeholder}
                id={props.forOrId}
                className={classes['InputText']}/>
        </div>
        
    )
}