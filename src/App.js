import { useEffect, useState } from 'react';
import axios from 'axios';
import Home from './containers/Home';

function App() {
  const API_KEY = 'k_aq58hqvt';
  const BASE_URL = 'https://imdb-api.com/en/API/SearchAll/';

  const [searchTerm, setSearchTerm] = useState('');

  const [url, setURL] = useState('');
  const [results, setResults] = useState([]);
  const [theme, setTheme] = useState('default');

  useEffect(() => {
    search();
  }, [searchTerm]);

  const handleChangeTheme = () => {
    console.log('handle change theme');
    if (theme === 'default') {
      setTheme('dark');
    } else {
      setTheme('default');
    }
  };

  const search = () => {
    axios.get(`${BASE_URL}${API_KEY}/${searchTerm}`).then((data) => {
      console.log(data.data);
      setResults(data.data.results);
    });
  };

  const handleOnTopMovies = () => {
    axios
      .get(`https://imdb-api.com/en/API/Top250Movies/${API_KEY}`)
      .then((data) => {
        console.log('top movies', data.data);
        setResults(data.data.items);
      });
  };
  const handleOnTopTV = () => {
    axios
      .get('https://imdb-api.com/en/API/Top250TVs/k_aq58hqvt')
      .then((data) => {
        console.log(data.data);
        setResults(data.data.items);
      });
  };

  const handleSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const handleTermChange = (e) => {
    setSearchTerm(e);
  };
  return (
    <div className="App">
      <Home
        movies={results}
        onTopMovies={handleOnTopMovies}
        onTopTV={handleOnTopTV}
        onSearchTerm={handleSearchTerm}
        onChangeTerm={handleTermChange}
        theme={theme}
        onToggleDarkMode={handleChangeTheme}
      />
    </div>
  );
}

export default App;
