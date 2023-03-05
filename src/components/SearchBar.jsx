import React from 'react'
import styled from 'styled-components'

const SearchBar = () => {
  return (
    <Container>
        <h1>TubeTopia</h1>
        <div className='searchbox'>
        <input placeholder='search'></input>
        <button> search</button>
        </div>
    </Container>
  )
}

const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%;
width: 100%;

h1{
    color: orangered;
    margin-left:20px ;
}
.searchbox{
    margin-right:20px ;
}

input {
    height: 20px;
    width: 300px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
}
button{
    height: 20px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
}

`

export default SearchBar