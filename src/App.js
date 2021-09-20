import React, { Component } from 'react';
import './App.css';
import Message from './Message/Message'

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    text: 'Empty text message',
    myMess: []
  }

  handleInput = (e) => {
    // console.log('Changed', e.target.value)
    this.setState({
      text: e.target.value
    })
  }

  addMessage = () => {
    let arr = this.state.myMess
    let m = 
    {
      date: String(new Date()),
      text: this.state.text,
    }
    arr.unshift(m)
    this.setState({
      myMess: arr,
    })
  }

  render() {
    const headline = {
      textAlign: "center",
      display: "block",
      width: "100%",
      fontSize: "24px",
      margin: "60px auto"
    }
    const container = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
    // const theDate = this.state.date
    // const theText = this.state.text
    const myMess = this.state.myMess

    let messages = []
    if (myMess.length > 0) {
      messages = myMess.map((elem, index) => {
        return (
          <Message
            text={elem.text}
            date={elem.date}
            key={index} />
        )
      })
    }
    return (
      <div style={container}>
        <h1 style={headline}>Headline</h1>
        <input
          style={{ marginBottom: "10px" }}
          type="text" onChange={this.handleInput} />
        <button
          style={{ width: "80px" }}
          onClick={this.addMessage}
        >
          To publish
        </button>
        {messages}
      </div >

    );
  }
}

export default App;
