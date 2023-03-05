import React from 'react'
import styled from 'styled-components'

const Video = ({imgUrl,title,channelName,uploadDate}) => {
    
  return (
    <Container>
        <div className='thumbnail'>
            <img src={imgUrl} alt='' />
        </div>
        <div className='heading'>
            <span></span>
            <h5>{title}</h5>
        </div>
            <p>{channelName}</p>
            <p>{uploadDate} </p>
    </Container>

  )
}

const Container = styled.div`
/* background-color: wheat; */
/* border: 1px solid white; */
margin: 40px 0;
height: 225px;
width: 336px;

.thumbnail{
    
    height: 180px;
    img{
        height: 180px;
        object-fit: cover;
        width: 100%;
        border-radius: 20px;
    }
}
.heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 5px 0;
    width: 100%;
    span{
        height: 50px;
        width: 50px;
        border-radius: 50%;
        background-color: whitesmoke;
        /* padding: 0 5px; */
        /* margin: 0 5px; */
    }
    h5{
        width:250px;
    }
}
`
export default Video