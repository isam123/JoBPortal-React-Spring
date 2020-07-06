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


//glob variables
    let queryString="";
    function renderRecomnd(e) { 
      queryString = e.target.value
      
        if(queryString!=="" && queryString.trim()!=="") {

          setWord(true);
          setQuery(queryString)
        
        }
        else {
        
          setWord(false)
            
        }
    }
      
   return (
        
      <div className="wrapp">
     <div className="row justify-content-center align-items-center" id="hero_row">
            <div  className="col-sm-6 text-center" id="hero-forms">
 
              <h3  className="h3 text-white  text-4 ">Browse Thouasnds Jobs at a Glance</h3>
             <InputHero onInput={renderRecomnd}/>
             
              <button className=" btn secondary-color text-white btn-lg ">Search</button>
              
              {isWord && <SearchRecommend queryString = {Query} /> }
            </div>
            
          </div>
     
          {/* <HeroImage src="images/Hero1.jpg" ></HeroImage> */}
          
        </div>
        // peach-gradient
    )
}

export default Hero;

