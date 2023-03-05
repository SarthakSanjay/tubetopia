import { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar'
import NavBar from './components/NavBar'
import Home from './components/Home'

function App() {

  return (
    <div className="App">
      {/* <SearchBar />
      <NavBar />
      <Home /> */}
      <div className='grid'>
        <div className='box' id='navbar'>
          <NavBar />
        </div>
        <div className='content'>
          <div className='box' id='searchbar'>
            <SearchBar />
          </div>
          <div className='box' id='home'>
            <Home />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
