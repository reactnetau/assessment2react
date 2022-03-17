import React, { useState, useEffect } from 'react';
import Grid from '../components/Grid';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import PaginationSetup from '../components/PaginationSetup';

const Home = ({
  movies,
  onTopMovies,
  onTopTV,
  onChangeTerm,
  theme,
  onToggleDarkMode,
}) => {
  const [pages, setPages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [name, setName] = useState('');

  function setup() {
    let pages = [];
    var i,
      j,
      temporary,
      chunk = 20;
    for (i = 0, j = movies && movies.length; i < j; i += chunk) {
      temporary = movies.slice(i, i + chunk);
      pages.push(temporary);
    }

    setPages(pages);

    console.log(pages);
  }

  useEffect(() => {
    setup();
  }, [currentIndex, movies]);

  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  const handleSubmitName = (name) => {
    setName(name);
  };

  return (
    <div
      className={
        'theme ' + (theme === 'dark' ? 'theme--dark' : 'theme--default')
      }
    >
      <Header
        onSubmitName={handleSubmitName}
        name={name}
        onTopMovies={onTopMovies}
        onTopTV={onTopTV}
        onToggleDarkMode={onToggleDarkMode}
      />
      <SearchBar onSubmit={onChangeTerm} />
      <Grid movies={pages[currentIndex]} />
      <PaginationSetup
        movies={movies}
        currentIndex={currentIndex}
        onChange={handleChange}
      />
    </div>
  );
};

export default Home;
