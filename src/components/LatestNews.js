import React from 'react'
import '../App.css';
import { useEffect, useState } from 'react';
import { AppBar, Button, IconButton } from '@mui/material';
import StarsIcon from '@mui/icons-material/Stars';
import NavBar from '../components/NavBar'
import Comment from '../components/Comment'

const LatestNews = () => {

    const [posts, setPosts] = useState([])
const [isLoading, setLoading] = useState(true)


const handleSave = () => {
  console.log('Saving')
}

  useEffect(() => {
    loadData()
    setInterval(() => loadData(),30000);

  },[])
  const loadData = async () => {
    await fetch('https://feeds.npr.org/1004/feed.json')
         .then((response) => (response.json()))
         .then((data) => {
            const dataSort = data.items.filter((item, index) => index <= 4)
            // console.log(dataSort)
            setPosts(dataSort);
            setLoading(false)
         })
         .catch((err) => {
            console.log(err.message);
         });
        }


        
            return (
              <div className="App">
                <NavBar />
                <h1 className='App-header'>NPR Latest news</h1>
                {posts.map(post => {
                  if (isLoading) {
                    return <div className="loader">Loading...</div>
                  }else {
                  return (
                    
                    <div className='News-feed' key={post.id}>
                      <row>
                        <h3 className='News-title'>{post.title}</h3>
                        <p className='News-sum'>{post.summary}</p>
                <Comment />

                      </row>
                      <row>
                        <div className='News-media'>
                        <img className='News-img' src={post.image} alt="" />
                        <IconButton onClick={handleSave}>
                        <StarsIcon />
          
                        </IconButton>
                        </div>
                        
                        
                      </row>
                      
                    </div>
                  ) }
                })}
              </div>
            );
          
}

export default LatestNews