import React ,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Video from './Video'
import fetchData from './fetchApiData.js'

const Feed = (props) => {
    const [data , setData] = useState([])

    
        useEffect(() => {
            const fetchVideos = async () => {
              const data = await fetchData(props.category);
              setData(data);
            };
            fetchVideos();
          }, []);

  return (
    <Container>

    {
        data.map((obj , index)=>{
            const {snippet} = obj
            let imgUrl = snippet.thumbnails.high.url
            let title = snippet.title
            let channelName = snippet.channelTitle
            let uploadDate= snippet.publishTime
            return <Video title={title} channelName={channelName} uploadDate={uploadDate} imgUrl={imgUrl} key={index}/> 
        })

    }
        
    </Container>
  )
}

const Container = styled.div`
/* border: 1px solid wheat; */
min-height: 100%;
height: 100%;
width: 100%;
margin: 0;
background-color: #252525;
padding: 0;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
grid-column: 2/3;
/* border: 2px solid blueviolet; */
`


export default Feed