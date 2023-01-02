import axios from "axios";
import React, { useEffect, useState } from "react";
import { SearchBar } from "./components/SearchBar";
import { Clima } from "./components/Clima";
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?'
const API_KEY = '&appid=2c1be39682383f31f0ff18c5c3cc1cb5'

function App() {
 
  const [pais , setPais] = useState('')
  const [paices , setPaices] = useState('')
  const [clima ,setClima] = useState([])
  useEffect(()=>{
    const FechApi = async ()=>{
      const response = await axios.get(`${API_URL}q=${paices}${API_KEY}`)
      setClima([response.data , ...clima])
    }
    FechApi()
  },[paices])


const handleSubtmit= (e) =>{
e.preventDefault()
setPaices(pais)
}
const handleClick= (id)=>{
  setClima(clima.filter(pai => pai.id!==id))
}
  return (
    <div className="container ">
      <h1 className="text-light text-center mt-5">Api Weather</h1>
        <SearchBar handleSubtmit={handleSubtmit} setPais={setPais}/>
        <Clima clima={clima} handleClick={handleClick}/>
    </div>
  );
}

export default App;
