import React, { Component } from 'react'
import { useState } from 'react';
const SearchRecommend = (props) => {


    // globals
    let query = props.queryString;
    let changeWord = props.setWord;
    let regEx = new RegExp('^['+query+']{1,}','i');
    let filterdResult=[];
    const Values = ["Fron-end","Backend Developer","Coursera engineer","Agile analyst"];
    //states
    

// logics
  filterdResult = Values.filter((item) =>{
           
    // console.log(query)query.substring(0,query.length) === item.substring(0,query.length)
            return regEx.test(item);
         
        });
    if(filterdResult.length ===0) filterdResult.push("Search not found")
     
   // renders
        return (

          <div className="" style={{height:"50px",width:"fit-content"}}>
                <ul className="list-unstyled text-left white" style={{padding:"10px"}}>
                    
                    {
                 filterdResult.map((item , key) =><li className="black-text" key={key}>{item}</li>)
                   }

                </ul>
                
                
            </div>
        )
    
}
export default SearchRecommend;