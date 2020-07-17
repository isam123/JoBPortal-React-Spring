import React, { Component } from 'react'
import { useState } from 'react';
const SearchRecommend = (props) => {


    // globals
    let query = props.queryString;
    let changeWord = props.setWord;
    let regEx = new RegExp('^'+query+'+','i');
    let filterdResult=[];
    let setVal = props.setValue;
    let diplay = "block";
    const [display,setDisplay] = useState("block");
    const Values = ["Fron-end","Backend Developer",
    "Coursera engineer","Agile analyst","Devops Engineer","Firebase Developer"];
    //states
    

// logics
  filterdResult = Values.filter((item) =>{
           
    // console.log(query)query.substring(0,query.length) === item.substring(0,query.length)
            return regEx.test(item);
         
        });
    if(filterdResult.length ===0) {diplay = "none"}
     
   // renders
        return (
          <ul className={diplay}>
                    
                    {
                 filterdResult.map((item , key) =><li onClick ={setVal}  key={key}>{item}</li>)
                   }

                </ul>
         
        )
    
}
export default SearchRecommend;