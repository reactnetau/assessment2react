import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './containers/Home';
import PageNotFound from './containers/PageNotFound';

function App() {
  const API_KEY = 'k_aq58hqvt';
  const BASE_URL = 'https://imdb-api.com/en/API/SearchAll/';

  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [theme, setTheme] = useState('default');

  //Search Data every time 'searchTerm' is changed
  useEffect(() => {
    search();
  }, [searchTerm]);

  //Handle change theme from default to dark
  const handleChangeTheme = () => {
    console.log('handle change theme');
    if (theme === 'default') {
      setTheme('dark');
    } else {
      setTheme('default');
    }
  };

  //Handle Search Query
  const search = () => {
    axios.get(`${BASE_URL}${API_KEY}/${searchTerm}`).then((data) => {
      console.log(data.data);
      setResults(data.data.results);
    });
  };

  //Handle Top 250 Movies Query
  const handleOnTopMovies = () => {
    axios
      .get(`https://imdb-api.com/en/API/Top250Movies/${API_KEY}`)
      .then((data) => {
        console.log('top movies', data.data);
        setResults(data.data.items);
      });
  };

  //Handle Top 250 TV Query
  const handleOnTopTV = () => {
    axios
      .get('https://imdb-api.com/en/API/Top250TVs/k_aq58hqvt')
      .then((data) => {
        console.log(data.data);
        setResults(data.data.items);
      });
  };

  //Set Search Term
  const handleSearchTerm = (term) => {
    setSearchTerm(term);
  };

  const handleTermChange = (e) => {
    setSearchTerm(e);
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                movies={results}
                onTopMovies={handleOnTopMovies}
                onTopTV={handleOnTopTV}
                onSearchTerm={handleSearchTerm}
                onChangeTerm={handleTermChange}
                theme={theme}
                onToggleDarkMode={handleChangeTheme}
              />
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
