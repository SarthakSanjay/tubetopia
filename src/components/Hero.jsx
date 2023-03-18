import React from 'react'
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import Feed from "./Feed"
import styled from 'styled-components'
import "../App.css"
const Hero = () => {
  return (
    <Container>
        <SearchBar id="searchbar" />
        <div>
        <NavBar />
        <Feed />
        </div>       
    </Container>
  )
}
const Container = styled.div`
display: grid;
grid-template-rows: 50px auto;

div{
    display: grid;
    grid-template-columns: 200px 1fr;
    
}
`
export default Hero