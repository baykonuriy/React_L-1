import React, { useState } from "react";
import classes from './User.module.css'

function computedCouner(){
    console.log('computedCouner...')
    return Math.trunc(Math.random() * 20)
}

export const UserOne = () =>{
    // const [counter, setCounter] = useState(0)
    const [counter, setCounter] = useState(()=>{
        return computedCouner()
    })

    const [state, setState] = useState({
        title: 'Заголовок',
        date: Date.now()
    })

    function increment(){
        setCounter(counter + 1)
    }

    function decrement(){
        setCounter(counter - 1)
    }
   
    return(
        <>
            <div className={classes['contaiter']}>
                <p>Counter: {counter}</p>
                <button
                    onClick={increment}
                    className={classes['btn']}>
                    +
                </button>
                <button
                    onClick={decrement}
                    className={classes['btn']}>
                        -
                </button>
                <button 
                    onClick={()=> setState(
                        {   
                            ...state,
                            title: 'hui'
                        }
                        )}>
                    Изменить текст
                </button>
            </div>
            <p>{JSON.stringify(state, null, 2)}</p>
        </>
    
    )
    
}
   


     
