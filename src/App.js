import React from 'react';
import './App.css';
import { BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import Stock from './components/Stock'
import About from './components/About'
import ArrayOfStocks from '../src/data/stock-data.json'
import StockDetails from './components/StockDetails'


const App = () => {
    return (
        <div>
            <nav>
            <Link to='/'>Home</Link>
            <Link to='/stock'>Stock</Link>
            <Link to='/about'>About</Link>
           
            </nav>
            <main>
                <Routes>
                    <Route path='/'></Route>                 
                    <Route path='/stock' element={ <Stock information={ ArrayOfStocks } /> }/>
                    <Route path='/about' element={ <About /> } />
                    <Route path={'/stock/:symbol'} element={ <StockDetails /> } />

                </Routes>
            </main>
        </div>
    );
}

export default App;
