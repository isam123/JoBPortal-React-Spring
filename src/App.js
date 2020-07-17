import React, { Component } from 'react';
import _ from 'lodash'
import Hero from './Components/Static/hero';
import Navbar from './Components/Static/navbar'

import './App.css'
import HomeContainer from './Components/Dyanimc/HomeContainer/HomeContainer';
const App = () =>  {



    function renderNavbar() {
        return <Navbar/>
    }

    function renderHero() {
        return <Hero/>
    }

    function renderHomeContainer() {
        return <HomeContainer/>
    }
    return (
        <div className="container-fluid ">

        {renderNavbar()}
        {renderHero()}
        {renderHomeContainer()}
        



        </div>
    )
}
export default App;
