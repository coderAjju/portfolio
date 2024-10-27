import React from 'react'
import logo from '../assets/chatapp.png'
const Project = () => {
    return (
        <div>
            <h1>Projects</h1>
            <div style={
                {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection:"column", 
                    gap:"2px",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    margin: "10px",
                    cursor: "pointer"
                }
            }>
                <img src={logo} alt="" style={{ width: "300px", height: "200px" }} />
                <span style={{
                    fontWeight: "bold",
                    fontSize: "20px",
                    color: "#fff"
                }}>ChatApp <a href="https://ajju-chat-app.vercel.app/" target="_blank">Visit</a>
                </span>
            </div>
        </div>
    )
}

export default Project