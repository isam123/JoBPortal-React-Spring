
import React, { Component } from 'react'

export default class SignUp extends Component {


render() {
    let login = this.props;
    return (
<div className=" row w-100 justify-content-center ">
     <div className=" col-sm-5 mt-5 p-3  text-center animated bounce">
         <div className="green w-75  mx-auto">
             <h3 className=" white-text text-center p-2">Sign up</h3>
        </div>
         
         {/* <p > {this.props.cardLoader==true?"":this.state.model}</p> */}
         <label className="d-inline-block"  >First Name : </label>
         <input type="text" name="name" onChange={this.twoUpdateState} className="ml-1 w-50 form-control d-inline" />
         <p></p> 
         <label className="d-inline-block"  >Last Name : </label>
         <input type="text" name="name" className="ml-1 w-50 form-control d-inline" />
         <p></p>
         <label className="d-inline-block"  >Password : </label>
         <input type="password" name="password" className="ml-1 w-50 form-control d-inline" />
         <p></p>
         <button className="btn btn-sm btn-outline-green">Sign up</button>
         <p></p>
         <p className="d-inline-block"> Already a member </p>
         {'       '}
    <a href="#" className=" d-inline-block" onClick={login}> Login</a>
     </div>
       
     </div>
    ); 
}
}