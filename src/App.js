import React, {useState, useEffect, useRef} from "react"
import {InputText} from './InputText/InputText'
import {Button} from "./Button/Button"
import {Message} from './Message/Message'
import './App.css'

function App(){
  let [messageList, setMessageList] = useState([])
  let [allMessage, setAllMessage] = useState([])
  let [textMessage, setTextMessage] = useState('')
  let [autorName, setAutorName] = useState('')
  let publishedMesssageList = messageList

  const robot = useRef(
    {
      text: 'TextMessage',
      autor: 'Robot',
      date: String(new Date())
    }
  )

  function getUserText(event){
    setTextMessage(textMessage = event.target.value)
  }

  function getUserName(event){
    setAutorName(autorName = event.target.value)
  }

  function addMessage(){
    setMessageList(messageList.concat(
      {
        text: textMessage,
        autor: autorName,
        date: String(new Date())
      }))
      setAutorName(autorName = '')
      setTextMessage(textMessage = '')
  }


  function removeMessage(item){
    setAllMessage(allMessage = allMessage.filter(elem=>{
      return elem !== item
    }))
    setMessageList(messageList = messageList.filter(elem=>{
      return elem !== item
    }))
    publishedMesssageList = allMessage
  }

 

  useEffect(()=>{
    if(messageList.length > 0 && messageList[messageList.length - 1].autor !== 'Robot'){

      setAllMessage(allMessage = publishedMesssageList)
      robot.current.text = `Hi ${messageList[messageList.length - 1].autor}, some textMessage`
      publishedMesssageList.push(robot.current)

      //   ПОЧЕМУ ЭТОТ SETTIMEOUT НЕ ОБНОВЛЯЕТ СТЕЙТ?
      //   setTimeout(()=>{
      //         robot.current.text = `Hi ${messageList[messageList.length - 1].autor}, some textMessage`
      //         publishedMesssageList.push(robot.current)
      //         setAllMessage((allMessage)=>{
      //         return allMessage = publishedMesssageList
      //       })
      //       console.log('publishedMesssageList', publishedMesssageList)
      //       console.log('robot.current', robot.current)
      //       console.log('messageList', messageList)
      //       console.log('allMessage', allMessage)
      //   }, 3000)
    }
  }, [messageList])

  return(
    <div className="container">
      <InputText
        value={autorName}
        placeholder={'Write a name'}
        title={'You name'}
        forOrId={'message'}
        inputHandle={getUserName}/>
      <InputText
        value={textMessage}
        placeholder={'Write a message'}
        title={'You message: '}
        forOrId={'message'}
        inputHandle={getUserText}/>
      <Button
        title="To publish"
        name="ghost"
        clickHandler={addMessage}/>
        { 
          allMessage.map((elem, idx)=>{
            return(
              <Message
                userName={elem.autor}
                userText={elem.text}
                date={elem.date}
                key={idx}
                removeItem={()=>removeMessage(elem)}
                />
            )
          })
        }
       
    </div> 
  )

}

export default App

