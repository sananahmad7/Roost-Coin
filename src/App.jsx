import { useState, useContext, createContext } from 'react'
import './font.css'

import './App.css'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Product';



function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  return (
    <div className='h-screen overflow-y-auto'>
      <Header />
      <Hero />
      <About />
      <Products />
    </div>


  );
}

export default App
