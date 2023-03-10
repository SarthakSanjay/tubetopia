import React ,{useEffect, useState} from 'react'
import styled from 'styled-components'
import Video from './Video'
import fetchData from './fetchApiData.js'
import na
import { NavData } from './NavBar'
const Home = () => {
    const [data , setData] = useState([])

    // const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': 'ca219d3c12msh6b4192730914a09p11cebcjsn49ce952dd1b5',
    //         'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    //     }
    // };
    
   

    //     const fetchData = async () => {
    //         const url = "https://youtube-v31.p.rapidapi.com/search?q=trending&part=snippet%2Cid&regionCode=US&maxResults=50&order=date"
    //         const data = await fetch(url , options)
    //         const fetchedData = await data.json()
    //         setData(fetchedData.items)
    //         // console.log(fetchedData.items)
    //     }

        // useEffect(()=>{
        //    setData(fetchData("trending"))
        // },[])
        
        useEffect(() => {
            const fetchVideos = async () => {
              const data = await fetchData(navData);
              setData(data);
            };
            fetchVideos();
          }, []);

  return (
    <Container>
    <NavData.Consumer>
          {(fname) => {
            return <h1>My NavData is {fname}</h1>;
          }}
        </NavData.Consumer>
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
/* background-color: green; */
margin: 0;
padding: 0;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
`


export default Home