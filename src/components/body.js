import React from "react";
import styled from "styled-components";


const BodyStyling = styled.div`

div {
    display: flex;
    flex-direction: column;
    align-items: center;
}

p {
    font-size: 1.5rem;
    
}

footer {
    padding-top: 1.5rem;
    font-size: 1.5rem;
}


`

export default function Body (props){
    const {info} = props
    return (
        <BodyStyling>
            <div>
            <h1>{info.title} </h1>
            <h3>{info.date} </h3>
            </div>
            <div>
            <p>{info.explanation} </p>
            <img src= {info.url} alt="nasaPhoto" />
            </div>
            <div className="f">
            <footer><b>&copy;  {info.copyright} </b></footer>
            </div>
        </BodyStyling>
    )
}