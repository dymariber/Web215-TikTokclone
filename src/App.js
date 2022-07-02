import axios from './axios';
import React, {  useEffect, useState } from 'react';
import './App.css';
import Video from './Video'

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=> {
      async function fetchPosts() {
        const response = await axios.get('/v2/posts');

        setVideos(response.data);

        return response;
      }

      fetchPosts(); 

  }, []);
  return (
    <div className="app">
      <h1>Tiktok</h1> 

      <div className='app_videos'>
        {videos.map(({url, channel, description, song, likes, messages, shares}) => (
            <Video 
            url={url}
            channel={channel}
            song={song}
            likes={likes}
            messages={messages}
            description={description}
            shares={shares} />
        )
        )}

      </div>   
    </div>


  );
}

export default App;
