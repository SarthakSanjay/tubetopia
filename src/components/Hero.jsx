import React from 'react'
import NavBar from "./NavBar"
import SearchBar from "./SearchBar"
import Home from "./Home"
import styled from 'styled-components'
const Hero = () => {
  return (
    <Container>
        <SearchBar />
        <NavBar />
        <Home />
    </Container>
  )
}
const Container = styled.div`
display: grid;
grid-template-rows: 50px 1fr;
`
export default Hero