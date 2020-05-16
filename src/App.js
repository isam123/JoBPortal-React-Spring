import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
export default class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jobs:[ {
                    title:"Fron-end Developer",
                    Category : "Software Developer",
                    Adress :"FAirField 100 north 4rth Street",
                    type : "Full-time",
                    newtext :""
            }
            ]
        }

    }

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
 <div className = "container-fluid">
 <h4 className="bg-success text-white text-center p-3">
     Jobs  <span className ="ml-5 text-small">(total {this.state.jobs.length})</span>  
 </h4>
 <div className="row">
<div className="col-5 border mx-auto">
    <div className="d-flex">
        <label className ="">Title : <a href="/">{this.state.title}</a></label>
    <span className="ml-auto text-sm">posted 12/12/2020 </span>
</div>
    <label>Job Category : {this.state.Category} </label>
    <label className ="d-block">Job type : {this.state.type} </label>
    <div className ="md-form">
    <input type ="text"  className ="md-form" 
    onChange = { this.twoUpdateState} defaultValue = {this.state.title}/>
</div>
<button type="button" className="btn btn-success btn-sm d-block ml-auto" onClick={this.changeStateDate}>Apply</button></div>  


 </div>
 </div>
 )
 };
}