import React from "react";
import "./Body.css"

export default function Body (props){
    const {info} = props
    return (
        <div>
            <div>
            <h1>{info.title} </h1>
            <h3>{info.date} </h3>
            </div>
            <div>
            <p className="bodyText">{info.explanation} </p>
            <img src= {info.url} alt="nasa" />
            </div>
            <div className="f">
            <footer><b>&copy;  {info.copyright} </b></footer>
            </div>
        </div>
    )
}