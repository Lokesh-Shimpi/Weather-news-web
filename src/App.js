import React, { useState } from 'react';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div className="App">
      <header className="app-header">
        <h1>🌦️ Weather News Today</h1>
        <SearchBar onSearch={setQuery} />
      </header>
      <NewsList query={query} />
    </div>
  );
}

export default App;
