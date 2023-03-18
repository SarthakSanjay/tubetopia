import { useState } from 'react'
import './App.css'
import Component1 from './components/Component1'
import Component2 from './components/Component2'
import Hero from './components/Hero'

function App() {

  return (
    <div className="App">
      {/* <SearchBar />
      <NavBar />
      <Home /> */}
      {/* <div className='grid'>
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
      </div> */}
      {/* <Hero /> */}

<Component1 />
<Component2 />
      
    </div>
  )
}

export default App
