import React from 'react'
import styled from 'styled-components'

const Video = ({imgUrl,title}) => {
    
  return (
    <Container>
        <div className='thumbnail'>
            <img src={imgUrl} alt='' />
        </div>
        <div className='heading'>
            <span>CL</span>
            <h3>{title}</h3>
        </div>
            <p>channel name</p>
            <p>views and time</p>
    </Container>

  )
}

const Container = styled.div`
/* background-color: wheat; */
border: 1px solid white;
margin: 10px;
height: 225px;
width: 336px;

.thumbnail{
    
    height: 180px;
    img{
        height: 180px;
        object-fit: cover;
        width: 100%;
        border-radius: 10px;
    }
}
.heading{
    display: flex;
    justify-content: space-between;
    margin: 5px;
    span{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: whitesmoke;
    }
}
`
export default Video