import React from 'react'
import styled from 'styled-components'

const Video = ({imgUrl,title,channelName,uploadDate}) => {
    
  return (
    <Container>
        <div className='thumbnail'>
            <img src={imgUrl} alt='' />
        </div>
        <div className='heading'>
            <span>ci</span>
            <p>{title.split(" ").slice(0 , 10).join(" ")}</p>
        </div>
            <div className='channel-date'>
            <p>{channelName}</p>
            <p>{uploadDate} </p>
            </div>
    </Container>

  )
}

const Container = styled.div`
/* background-color: wheat; */
/* border: 1px solid white; */
margin: 40px 0;
height:250px;
width: 336px;
display: grid;
grid-template-columns: 50px 1fr;
grid-template-rows: 180px 50px 1fr;

.thumbnail{
    grid-column: 1/3;
    height: 180px;
    img{
        height: 180px;
        object-fit: cover;
        width: 100%;
        border-radius: 20px;
    }
}
.heading{
    display: grid;
    grid-template-columns: 50px 1fr;
    margin: 5px 0;
    grid-column: 1/3;
    grid-row: 2/3;
    span{
        height: 40px;
        width: 40px;
        border-radius: 50%;
        background-color: whitesmoke;
        /* padding: 0 5px; */
        /* margin: 0 5px; */
    }
    p{
        width:100%;
        font-size: 14px;
        margin: 5px 5px;
    }
}
.channel-date{
    /* border: 1px solid red; */
    grid-column: 2/3;
    display: flex;
    font-size: 12px;
}
`
export default Video