import React, { useState } from 'react';

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={styles.player}>
      <img src="/images/album-art.jpg" alt="Album Art" style={styles.albumArt} />
      <div style={styles.controls}>
        <button onClick={togglePlay}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button>Next</button>
      </div>
    </div>
  );
}

const styles = {
  player: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#333',
    color: 'white',
    padding: '1rem',
    borderRadius: '8px',
  },
  albumArt: {
    width: '200px',
    height: '200px',
    marginBottom: '1rem',
  },
  controls: {
    display: 'flex',
    gap: '1rem',
  }
};

export default MusicPlayer;