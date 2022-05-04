import React from 'react'

const Button = ({ key, text, width = "50px" }) => {

    const getTextColor = text => {
        if (text === "C") return "#878787"
        if (text === "±" || text === "%") return "#878787"
        if (text === "÷" || text === "x" || text === "-" || text === "+") return "#8A2BE2"
        if (text === ".") return "black"
        if (text === "=") return "#fff"
        return "#3285ac"
    }

    return (
        <div key={key} className='btn' style={{
            color: getTextColor(text),
            fontSize: (text === "±" || text === "%") ? "18px" : "22px",
            width,
            justifyContent: (text === "0") ? "flex-start" : "center",
            backgroundColor: (text === "=") ? "#20B2AA" : "#F0F0F3"
        }}>
            {text}
        </div>
    )
}

export default Button