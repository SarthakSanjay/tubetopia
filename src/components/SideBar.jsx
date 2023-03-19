import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SideBar = () => {
    
  // const [NavData , setNavData] = useState("")
      const handleClick = (value) => {
        setNavData(value)
        // return value

      }
  return (
    <Container>
       <ul className='items'>
        <li onClick={() => handleClick('Home')}>Home</li>
        {/* <li>Sports</li> */}
        <li className="nav-item" >
          <Link  aria-current="page" to="/search?q=sports&part=snippet%2Cid&regionCode=US&maxResults=50&order=date">Sports</Link>
        </li>
        <li onClick={() => handleClick('News')}>News</li>
        <li onClick={() => handleClick('Music')}>Music</li>
        <li onClick={() => handleClick('Movie')}>Movie</li>
        <li onClick={() => handleClick('Gaming')}>Gaming</li>
        <li onClick={() => handleClick('Vlogs')}>Vlogs</li>
      </ul>
    </Container>
  )
}
const Container = styled.div`
    height: 100%;
    width: 150px;
    position: fixed;
    background-color: #252525;
    border-right: 1px solid gray;
    ul{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        /* border: 2px solid wheat; */
        li{
          /* border: 2px solid wheat; */
            list-style: none;
            height:40px ;
            width: 70px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: blueviolet;
        }
        li:hover{
            background-color: blueviolet;
            color: white;
        }
    }


`
export default SideBar