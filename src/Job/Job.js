import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
export default class Job extends Component {
//  constructor(props) {
//         super(props)
//         this.state = {
//             jobs:[ {
//                     title:"Fron-end Developer",
//                     Category : "Software Developer",
//                     Adress :"FairField 100 north 4rth Street",
//                     type : "Full-time",
//                     newtext :""
//             }
//             ]
//         }

//     }
  twoUpdateState = (event) => {

        this.setState({

            title : event.target.value
        });

    }
  changeStateDate = () => {

        this.setState({
            type : this.state.type === "Part-time" ? "Full-Time" :"Part-time"
        })
    } 
     
 render() {
 return (
    <div className="col-sm-3 mb-3">
    <div className="card w-75" >

       <div className="card-header green-text text-center white h4"> Front-End Developer </div>
       <div className="card-body text-black ">
           Type : full-time
           <span className="d-block">Location : Austin, USA</span>
           <span className="d-block">Salary : 100$</span>
           <span className="d-block">Location : Austin, USA</span>
           </div>
       <div className="card-footer white text-center"><button className="btn btn-outline-green">Apply</button></div>

    </div>
    
    </div>
 )
 };
}