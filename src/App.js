import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';
import  Job  from "./Job/Job";
import Signup from "./Auth/register";
import { Navbar } from './navbar';
import SignIn from './Auth/login';

export default class App extends Component {
 
    constructor(props) {
        super(props)
        this.state = {
             jobs:[],
             SigninLoader:false,
             SignUpLoader:true,
             cardLoader :true,
             tableLoader:true
        }
    }
    
   componentWillMount = () =>{
        
    }
    

    renderSignUp ()  {
          return (<Signup />);
    }
    renderNavbar = () =>{

        return (<Navbar/>);
    }

    renderSignIn() {

        return(<SignIn/>)
    }
     
 render() {
   
    let signIn = this.state.SigninLoader;
    let signUp = this.state.SignUpLoader;
    let jobs = [1,2,2,3,4,5,2];

 return (
     
    <div>   

  {/* Sign up component render        */}
<React.Fragment>
{this.renderNavbar()}
</React.Fragment>

<React.Fragment> 
 {signUp && this.renderSignUp()}
 {signIn && this.renderSignIn()}
</React.Fragment>

<React.Fragment>
            <div className="row w-100 mx-auto  mt-5 ">
                    <div className = "col-sm-12 green  white-text text-center mx-auto">
                        <p className="h1">Browse Latest Jobs </p>
                        <ul className="">
                            <li ><i className="fa fa-hand-o-right" aria-hidden="true"></i> <i>1200</i> job are ready for career </li>
                            <li><i className="fa fa-hand-o-right" aria-hidden="true"></i> <i>1200</i> job are ready for career </li>
                            <li> <i className="fa fa-hand-o-right" aria-hidden="true"></i><i>1200</i> job are ready for career </li>
                        </ul>
                     
                        </div>

                {/* <If condition={ true }>
                    <span>IfBlock</span>
                </If> */}

           <div className ="col-md-12 mt">          
            <div className="row mt-5 ">
                <React.Fragment>
                     
            { jobs.map(job => {
                     return( <Job/>)
            })  }
                     
                </React.Fragment>           
            </div>
           
</div>
                    
            </div>         
           
</React.Fragment>

<React.Fragment>
<div className="row"> </div>
</React.Fragment>

</div>
    
 )
 };
}