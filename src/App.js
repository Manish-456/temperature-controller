
import { useState } from 'react';
import './App.css';
import Temperature from './Temperature';

function App() {
 const [temperature, setTemperature] = useState(10)
 const [cold, setCold] = useState('#9595ac')
 const [emoji, setEmoji] = useState('🥶')
 const [status, setStatus] = useState('Too Much Cold')
 const incTemperature = () => {
 const newTemperature = temperature + 1;
 if (newTemperature >= 20 && newTemperature <=25){
  setCold('blue')
  setEmoji('🤧')
  setStatus('Little Bit Cold')
 }
 else if (newTemperature >25 && newTemperature <= 30){
  setCold("orange")
  setEmoji('😅')
  setStatus('Warm')
 }
 else if( newTemperature > 30 ){
  setCold('red')
  setEmoji('🥵')
  setStatus('Too Much Hot')
 }

 setTemperature(newTemperature)
 }
 const decTemperature = () => {
  const newTemperature = temperature - 1;
   if (newTemperature <= 20 ){
    setCold('rgb(100 100 177)')
    setEmoji('🥶')
    setStatus('Too Much Cold')
  } 
  else if(newTemperature <=25 ){
    setCold('blue')
    setEmoji('🤧')
    setStatus('Little Bit Cold')
  }
  else if (newTemperature >= 30 && newTemperature <= 30){
    setCold('orange')
    setEmoji('😅')
    setStatus('Warm')
  }


  setTemperature(newTemperature)
 }
 return (
  <div >
    <Temperature
    emoji = {emoji} 
    temperature = {temperature}
    cold = {cold}
    status={status}  
    incTemperature = {incTemperature}
    decTemperature = {decTemperature}/>
      
    </div>
  );
}

export default App;
