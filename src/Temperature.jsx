import React from 'react'
import './Temperature.css'

const Temperature = (props) => {

 return (
    <div className='main'>
      <h1 className='container'><em>Temperature Controller</em></h1>
      <div className="temperature">
       <div className="tempt-main" style={{backgroundColor: props.cold }}>
        <div className="tempt-inner">
         <h2 className='number'>{props.temperature}°C</h2>
         <h1>{props.emoji}</h1>
         <h3 className='status' style={{color: props.cold}}>{props.status}</h3>
        <hr /> 
        </div>
       
        <div className="controller">
         <button onClick={props.incTemperature} className='inc-C' type='button'>+</button>
         <button onClick={props.decTemperature} className='dec-C' type='button'>-</button>
        </div>
       </div>
      </div>
    </div>
  )
}

export default Temperature
