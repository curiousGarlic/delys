import React from 'react';
import { Switch, Route, } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import soycandles from './assets/soycandles.jpg';
import gelcandles from './assets/gelcandles.jpg';


const SoyCandles = () => (
    <div>
        <h1>Soy Candles</h1>
        <img src={soycandles} alt=''/>
    </div>
);
const GelCandles = () => (
    <div>
        <h1>Gel Candles</h1>
        <img src={gelcandles} alt=''/>
    </div>
);

class App extends React.Component {
    render() {
        return (
            <div>
                <h3>ДОМ ПОДАРКОВ</h3>
                <h1>DE LYS</h1>
                <Switch>
                    <Route exact path='/' component={ HomePage }/>
                    <Route exact path='/shop' component={ ShopPage } /> 
                    <Route exact path='/soycandles' component={ SoyCandles } />
                    <Route exact path='/gelcandles' component={ GelCandles }/>
                </Switch>
            </div>
        )
    }
}

export default App;
