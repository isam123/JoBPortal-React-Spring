import React from 'react'
import './hero.css'
import InputHero from './hero-serach';
import SearchRecommend from './Search_recomnd';
import { useState } from 'react';
// import {Autocomplete} from 'Autocomplete'
const Hero = (props) => {
    
//states
    const [isWord,setWord] = useState(false);
    const [Query,setQuery] = useState(false);
    const [textValue,setTextValue]  =useState("") ;

//glob variables
    let queryString="";

//functions

    function renderRecomnd(e) { 
      queryString = e.target.value
      
        if(queryString!=="" && queryString.trim()!=="") {

          setWord(true);
          setQuery(queryString);
          setTextValue(queryString);
      }
        else {
          setTextValue(queryString);
          setWord(false)
            
        }
    }

    function setValue(e) {
        setTextValue(e.target.innerText);
    }
//end functions  
   return (
        
            <div className="wrapp">
            <div className="row justify-content-center align-items-center" id="hero_row">
            <div  className="col-sm-6" id="hero-forms">
            <h3  className="h3 text-white  text-4 ">Browse Thouasnds Jobs at a Glance</h3>
            <div className="Autocomplete">
            <input type="text" value = {textValue}  onChange={renderRecomnd}  className="d-inline form-control w-75"/>
            <button className=" btn  secondary-color text-white btn-lg ">Search</button>
              
              {isWord && <SearchRecommend setValue = {setValue} queryString = {Query} /> }
              </div>
              
            </div>
            
          </div>
     
          {/* <HeroImage src="images/Hero1.jpg" ></HeroImage> */}
          
        </div>
        // peach-gradient
    )
}

export default Hero;

