import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Vite + React</h1>
    <Person></Person>
    <Person></Person>
    <Person></Person>
    <Sports></Sports>
    </>
  )
}

function Person () {
  const age = 17;
  const name = 'Jolil';  
  return (
    <p>I am a person: {name} {age}</p>
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
