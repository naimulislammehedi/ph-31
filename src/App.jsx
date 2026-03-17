import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import ToDo from './Todo'; 

function App() {
  // const [count, setCount] = useState(0)
  const time = 50; 

  return (
    <>
    <h1>React Core Concepts</h1>
    <ToDo task="Learn React" isDone={true} time={time}></ToDo>
    <ToDo task="Revise JS" isDone={false}></ToDo>
    <ToDo task="Take a shower" isDone={false} time=""></ToDo>
    {/* <Student></Student>
    <Student></Student>
    <Person></Person>
    <Developer name="Mozumder" tech="JS"></Developer>
    <Developer name="Razon" tech="Python"></Developer>
    <Player name="tamim" runs="5000"></Player>
    <Player name="mushi" runs="5000"></Player>
    <Salami event="Roja Eid" amount="1000"></Salami> */}
    </>
  )
}

function Salami({event, amount = 0}) {
  return (
    <div className="student">
      <p>Salamir for: {event}</p>
      <p>Amount: {amount}</p>
    </div>
  )
}

// const {name, runs} = {name: 'tamim', runs: '5000'}
function Player({name, runs}) {
  // console.log(props); 
  return (
    <div className="student">
    <h3>Name: {name} </h3>
    <p>Runs: {runs}</p>

    </div>
  )
}

// const {name, tech} = {name: 'Razon', tech: 'Python'}

function Developer(props) {
  console.log(props)
  return(
    <div style={{
      border: '2px solid green', 
      borderRadius: '20px'
    }}>
      <h3>Developer: {props.name} </h3>
      <p>Technology: {props.tech} </p>
    </div>
  )
}

function Person () {
  const age = 17;
  const name = 'Jolil';  

  const personStyle = {
    color: 'red', 
    textAlign: 'right'
  }

  return (
    <p id='' title='tooltip' style={personStyle}>I am a person: {name} {age}</p>
  )
}

function Student() {
  return (
    <div className='student'>
      <p>Name: </p>
      <p>Dept: </p>
    </div>
  )
}

function Sports() {
  return (
    <div>
      <h3>Cricket</h3>
      <p>Playing and loosing</p>
      <ul>
        <li>Kola</li>
        <li>Komola</li>
      </ul>
    </div>
  )
}

export default App
