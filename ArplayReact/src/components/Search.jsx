import React from 'react';

function Search() {
  return (
    <div style={styles.search}>
      <h1>Search for your favorite music</h1>
      <p>Coming soon...</p>
    </div>
  );
}

const styles = {
  search: {
    color: 'white',
    backgroundColor: '#1c1c1c',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  }
};

export default Search;