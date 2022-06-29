import React, { useState, useEffect } from "react";
import axios from "axios";
import Body from "./components/body"

function App() {
  const [nasaData, setNasaData] = useState({})

  useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
      setNasaData(res.data)
    })
    .catch(err => {
      
    })
  
}, [])

if(!nasaData){
  return(
    <div>loading...</div>
  )
}

  return (
    <div>
      
        <Body info = {nasaData}/>
  
    </div>
  );
}

export default App;
