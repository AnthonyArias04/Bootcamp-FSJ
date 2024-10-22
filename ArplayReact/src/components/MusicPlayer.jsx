import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiImagen from '../img/Spotify.jpeg'
import '../Styles/Player.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import img from '../img/AppleMusicO.jpg'
import deezer from '../img/deezer.jpg'
import imgS from '../img/1200x600SC.DN01-60.jpg'

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <>
    <h1 className='tituloPlay'>Programming Time</h1>

    <div className='row gx-5'>
      <section className='col card bg-secondary text-white p-3'>
      <img src={img} alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Apple Music</p>
        <Link to="https://music.apple.com/ec/playlist/para-programar/pl.30c9e2cf347442a2973a055ff877c0e2" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
   

      <section className='col card bg-secondary text-white p-3'>
      <img src={MiImagen} alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Spotify</p>
        <Link to="https://open.spotify.com/playlist/4h9IFile4ykWQKRGgGPRMw?si=ejWDyWhWQ823NbvyCVxvuA" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    

      <section className='col card bg-secondary text-white p-3'>
      <img src={deezer} alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Deezer</p>
        <Link to="https://deezer.page.link/RFq8zcAFxtbwRSBu5" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    </div>


    <h1 className='tituloPlay'>Study Time</h1>

    <div className='row gx-5'>
      <section className='col card bg-secondary text-white p-3'>
      <img src={imgS} alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Apple Music</p>
        <Link to="https://music.apple.com/mx/playlist/para-estudiar/pl.33c8ca1f42fc482bbbbb51b56e842126" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
   

      <section className='col card bg-secondary text-white p-3'>
      <img src='https://pickasso.spotifycdn.com/image/ab67c0de0000deef/dt/v1/img/radio/artist/6U6IOHuRO6CQ07uNc7s45e/es-419' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Spotify</p>
        <Link to="https://open.spotify.com/intl-es/artist/6U6IOHuRO6CQ07uNc7s45e?si=oNhntZ-qRgKQ-k56Cj0oig" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    

      <section className='col card bg-secondary text-white p-3'>
      <img src='https://e-cdn-images.dzcdn.net/images/cover/7c303f6e507013faa0d966faf62bec52/500x500-000000-80-0-0.jpg' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Deezer</p>
        <Link to="https://deezer.page.link/fQS9x84aakdpYAAK8" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    </div>

    <h1 className='tituloPlay'>Love Time</h1>

    <div className='row gx-5'>
      <section className='col card bg-secondary text-white p-3'>
      <img src='https://is1-ssl.mzstatic.com/image/thumb/Video125/v4/d6/c5/14/d6c514d4-521b-ecb9-a9df-204cf081d1d5/Job7d01f25b-4644-42b1-9818-d28163cffa4e-124848677-PreviewImage_preview_image_nonvideo_sdr-Time1634131413140.png/305x305cc.webp' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Apple Music</p>
        <Link to="https://music.apple.com/us/playlist/love/pl.7d7525d9145c4aba9a6295753505c98d" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
   

      <section className='col card bg-secondary text-white p-3'>
      <img src='https://i.scdn.co/image/ab67706f00000002dcb7b32f8bf2e6a7851245e3' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Spotify</p>
        <Link to="https://open.spotify.com/playlist/37i9dQZF1DX7rOY2tZUw1k?si=JA9nc5nIQPayQyTuL67AIg" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    

      <section className='col card bg-secondary text-white p-3'>
      <img src='https://e-cdn-images.dzcdn.net/images/playlist/9c828866364f8e0b5f8e23592e2ce458/500x500-000000-80-0-0.jpg' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Deezer</p>
        <Link to="https://deezer.page.link/iZpsq92tBnignWbJ6" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    </div>

    <h1 className='tituloPlay'>Happy Time</h1>

    <div className='row gx-5'>
      <section className='col card bg-secondary text-white p-3'>
      <img src='https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/bd/3c/6e/bd3c6ebe-69f8-f315-ea48-a2ac42330e6d/Jobf4f4e9dc-cab3-426e-a5ee-830983afa838-111925932-PreviewImage_preview_image_nonvideo_sdr-Time1618961680162.png/305x305cc.webp' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Apple Music</p>
        <Link to="https://music.apple.com/us/playlist/happy-hour/pl.bf37b6fdf9ee4fa4bf36133908a8c5c7" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
   

      <section className='col card bg-secondary text-white p-3'>
      <img src='https://i.scdn.co/image/ab67616d00001e0297f9083601456b34e5ff5753' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Spotify</p>
        <Link to="https://open.spotify.com/intl-es/album/16SYFRUt5v20H8KXEyXp4r?si=kx6-K9RjTbGhWbWKMo-z_A" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    

      <section className='col card bg-secondary text-white p-3'>
      <img src='https://e-cdn-images.dzcdn.net/images/playlist/def6bb873a682d71b8fdaa682c05f095/500x500-000000-80-0-0.jpg' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Deezer</p>
        <Link to="https://deezer.page.link/ZefxjjCwEoRRxERG9" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    </div>

    <h1 className='tituloPlay'>sad Time</h1>

    <div className='row gx-5'>
      <section className='col card bg-secondary text-white p-3'>
      <img src='https://is1-ssl.mzstatic.com/image/thumb/Video115/v4/54/5b/62/545b628c-da89-0194-b4be-5a6b98340140/Job274aff38-eae4-40e6-89ef-591c574b3977-124811228-PreviewImage_preview_image_nonvideo_sdr-Time1634052888950.png/305x305cc.webp' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Apple Music</p>
        <Link to="https://music.apple.com/us/playlist/sad-times/pl.74c8275991444e9f976245a6c1d49f7b" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
   

      <section className='col card bg-secondary text-white p-3'>
      <img src='https://i.scdn.co/image/ab67706f000000026a529b45bf70807cc16b1a88' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Spotify</p>
        <Link to="https://open.spotify.com/playlist/37i9dQZF1DX7qK8ma5wgG1?si=3WlkYBqDQhi7U5JLDNtFdw" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    

      <section className='col card bg-secondary text-white p-3'>
      <img src='https://e-cdn-images.dzcdn.net/images/playlist/d728ebbc8dbb3b918b27e3d2e90efe1e/500x500-000000-80-0-0.jpg' alt="Album Art" className='Img' />
      <div>
      <p className='text-decoration-underline'>Deezer</p>
        <Link to="https://deezer.page.link/iadq6R6R437aLgfx6" target='_blank'>
        <button onClick={togglePlay} className='btn btn-dark'>
          Play
        </button>
        </Link>
      </div>
      </section>
    </div>
    </>
  );
}



export default MusicPlayer;