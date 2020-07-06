import React, { Component } from 'react';
import _ from 'lodash'
import Hero from './Components/Static/hero';
import Navbar from './Components/Static/navbar'
import './App.css'
const App = () =>  {



    function renderNavbar() {
        return <Navbar/>
    }

    function renderHero() {
        return <Hero/>
    }
    return (
        <div className="container-fluid ">

        {renderNavbar()}
        {renderHero()}



        </div>
    )
}
export default App;
