import React,{useState} from 'react'
import styled from 'styled-components'

const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };
  return (
    <Container>
        <h1>&#123; TubeTopia &#125;</h1>
        <div className='searchbox'>
        <input placeholder='search' value={inputValue} onChange={handleChange} />
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
    height: 40px;
    width: 300px;
    border: none;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 0px 10px;
  }
  button{
  padding: 0px 10px;
    height: 40px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    background-color: orangered;
    color: white;
}

`

export default SearchBar