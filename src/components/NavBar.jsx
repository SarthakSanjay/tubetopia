import React, { useState } from 'react'
import styled from 'styled-components'


const NavBar = () => {
    
      const handleClick = (value) => {
        return value

      }
  return (
    <Container>
       <ul className='items'>
        <li onClick={() => handleClick('Home')}>Home</li>
        <li onClick={() => handleClick('Sports')}>Sports</li>
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
    width: 100%;
    /* position: fixed; */

    ul{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        li{
            list-style: none;
            height:40px ;
            width: 70px;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        li:hover{
            background-color: red;
        }
    }


`
export default NavBar