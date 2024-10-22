import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import "../Styles/home.css"

function Home() {
  return (
    <div  className='home'>
      <h1 className='titulo'>Welcome to Kodigo Music</h1>
      <p>Explore a world of music that KODIGO offers you by recommending playlists listened to by many users inspired by the best platforms such as Spotify, Apple Music, Deezer.</p>
      <MusicPlayer />
    </div>
  );
}


export default Home;



    
  

