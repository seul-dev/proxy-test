import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect } from 'react';

function App() {
  const URL =
    '/api/ItemSearch.aspx?ttbkey=ttbls1051155001&Query=it&QueryType=Title&MaxResults=10&start=1&output=JS&Version=20131101';

  const getData = async () => {
    try {
      const response = await axios.get(URL);
      console.log(response.data.item);
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hi</p>
      </header>
    </div>
  );
}

export default App;
