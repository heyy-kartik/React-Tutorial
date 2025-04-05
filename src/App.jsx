import React from 'react'
import Header from './Header'
import './App.css' 

function App() {
  const Title = () =>(
    <h5 className="head" tabIndex={5}> Namaste React JSX</h5>
  )
  
const jsxHeading = <h1 className='tabIndex'>Namaste React 🚀</h1>
  return (
    <>
     
     
      <h1>React  Tutorials</h1>
      <h1>Hello World</h1>
    <Title/>
      <div className="card">
        {jsxHeading}
       
    This is Day 01. I'm going to learn react.js From Akshay Saini   
    <Header/>
       </div>
   
  
    </>
  )
} 
export default App
