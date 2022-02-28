import './App.css';
import {  Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import AllBeers from './views/AllBeers';
import RandomBeer from './views/RandomBeer';
import NewBeer from './views/NewBeer'

function App() {
  return (
    <div className="App">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
      <Routes>
        <Route path="/" element={<HomeView/>} />
        <Route path="beers" element={<AllBeers/>} />
        <Route path="random-beer" element={<RandomBeer/>} />
        <Route path="new-beer" element={<NewBeer/>} />
      </Routes>
    </div>
  );
}

export default App;
