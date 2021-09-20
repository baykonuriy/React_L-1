import React from "react"

// function Message() {
//     return (
//         <div>
//             <p>jascvahdb hbhbhb</p>
//         </div>
//     )
// }
const container = {
    width: "600px",
    marginTop: "12px",
    border: "1px solid rgb(16 24 40 / 10%)",
    padding: "12px",
    borderRadius: "12px",
   
}

const paragraph = {
    fontSize: "14px",
    color: "#101828",
    margin: "0 0 4px 0",
    padding: "0"
}

const date = {
    fontSize: "12px",
    color: "#101828",
    opacity: "0.6",
    margin: "0 0 4px 0",
    padding: "0"
}

const user = {
    fontSize: "12px",
    color: "blue",
    margin: "0 0 4px 0",
    padding: "0",
    fontWeight: "600",
}

export default (props) => (

    <div style={container}>
        <p style={user}>UserName</p>
        <p style={paragraph}>{props.text}</p>
        <p style={date}>{props.date}</p>
    </div >
)