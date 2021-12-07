import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../App.css';

import Display from './pages/Display';
import Landing from './pages/Landing';


function App() {
  const [news, setNews] = useState([])
  const [search, setSearch] = useState('')
  const [faves, setFaves] = useState([])

  let apiURL = "https://newsapi.org/v2/top-headlines?country=us&apiKey=aee6bc851ac44b92b594aedb51d93684"
  if (search !== "") {
    apiURL = `https://newsapi.org/v2/everything?q=${search}&apiKey=aee6bc851ac44b92b594aedb51d93684`
  }

  useEffect(() => {
    fetch(apiURL)
      .then(response => response.json())
      .then(rdata => {
        console.log(rdata.articles)
        setNews(rdata.articles)
      })
  }, [apiURL])

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const addFave = (article) => {
    if (faves.indexOf(article) === -1) {
      setFaves([...faves, article])
    }
  }

  return (
    <div className="App">
      <div>
        <label htmlFor="article-search">Search: </label>
        <input
          type="text"
          id="article-search"
          value={search}
          onChange={handleChange}
        />
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Landing news={news} faves={faves} search={search} clicky={addFave} />} />
          {/* <Route path="/:id" element={<Landing articles={getFilteredArticles()} />} /> */}
          <Route path="/display" element={<Display />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;