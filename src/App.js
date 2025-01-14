import React,{useState,useEffect} from 'react';
import Input from "./Input";
import cities from "./cities.json"

function App() {

 const CityDatas = () => JSON.parse(JSON.stringify(cities));

const [hintValue,setHintValue]=useState("");
const onChange=(event)=>{
if(!!event.target.value == false)
{setHintValue("");}
else
{let city=cities.find(c => c.startsWith(event.target.value));
setHintValue(city);}
}

   return <div>
   <Input handleChange={event => onChange(event)} hint={hintValue}/>
   </div>
}

export default App;
