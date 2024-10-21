import React from 'react';
import MusicPlayer from '../components/MusicPlayer';
import "../Styles/home.css"

function Home() {
  return (
    <div  className='home'>
      <h1 className='titulo'>Welcome to Kodigo Music</h1>
      <p>Explore a world of music with the best platform inspired by Spotify, Deezer, and Apple Music.</p>
      <MusicPlayer />
    </div>
  );
}


export default Home;



    
  

