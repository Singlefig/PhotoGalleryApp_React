import React from 'react';
import { SearchPhoto } from './components/SearchPhoto/SearchPhoto';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Photo Search</h1>
        <SearchPhoto />
      </div>
    </div>
  );
}

export default App;
