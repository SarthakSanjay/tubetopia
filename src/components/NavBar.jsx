import React from 'react'
import styled from 'styled-components'

const NavBar = () => {
  return (
    <Container>
        <ul className='items'>
            <li>Home</li>
            <li>Sports</li>
            <li>News</li>
            <li>Music</li>
            <li>Movie</li>
            <li>Gaming</li>
            <li>Vlogs</li>
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