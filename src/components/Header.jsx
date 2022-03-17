import React, { useState } from 'react';

const Header = ({ onSubmitName, onTopMovies, onTopTV, onToggleDarkMode }) => {
  const [name, setName] = useState('');
  const [nameSet, setNameSet] = useState(false);
  const [error, setError] = useState('');

  const validateSearchTerm = () => {
    const match = name.match('[a-zA-Z0-9]+$');
    console.log('search term valid', match);
    return match;
  };

  function setNameValue(e) {
    setName(e.target.value);
  }

  function submitName() {
    if (validateSearchTerm(name)) {
      onSubmitName(name);
      setNameSet(true);
      setError('');
    } else {
      setError('Name must be letters and numbers only.');
    }
  }

  function renderView() {
    if (nameSet == false) {
      return (
        <div>
          <input
            type="text"
            placeholder="Enter name"
            className="name-input"
            onChange={(e) => setNameValue(e)}
          />
          <button onClick={() => submitName()}>Save</button>
        </div>
      );
    } else {
      return <p>Welcome to the IMDB API {name}</p>;
    }
  }
  return (
    <div className="header">
      <div className="header-title">
        <h1>IMDB API</h1>
      </div>
      <div className="header-input">
        {renderView()}
        <p>{error}</p>
      </div>
      <div className="header-buttons">
        <p>
          <button onClick={onTopMovies} className="header-bar-btn">
            TOP 250 MOVIES
          </button>
        </p>
      </div>
      <div className="header-buttons">
        <p>
          <button onClick={onTopTV} className="header-bar-btn">
            TOP 250 TV SHOWS
          </button>
        </p>
      </div>
      <div className="toggleDarkMode">
        <span>Dark Mode: </span>
        <input type="checkbox" onChange={onToggleDarkMode} />
      </div>
    </div>
  );
};

export default Header;
