import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from 'react'

import Countries from './components/Countries/Countries';
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => setCountries(data))
  },[])

  const handleClicked = (country) =>{
    console.log('clicked me', country.name)
}

  return (
    <div className="App">
      <h1>Country Loaded: {countries.length}</h1>
      <h2>Country Added: </h2>
      <ul>
        {
          countries.map(country => <Countries country = {country} handleAddClicked={handleClicked} key={country.alpha3Code}></Countries>)
        }
      </ul>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
