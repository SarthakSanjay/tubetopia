import React from 'react'
import './App.css'
import Feed from './components/Feed'
import SearchBar from './components/SearchBar'
import SideBar from './components/SideBar'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
       <div className='searchbar'>
        <SearchBar />
       </div>
       <div className='hero'>
        <div className='navbar'>
          <SideBar />
        </div>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<Feed category='' />} />
            <Route exact path='/search?q=sports&part=snippet%2Cid&regionCode=US&maxResults=50&order=date' element={<Feed category='sports' />} />
          </Routes>
        </BrowserRouter>
       </div>
      
    </div>
  )
}

export default App
