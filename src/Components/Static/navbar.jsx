import React from 'react'

const Navbar = () =>{

    return (

        <nav class="navbar navbar-expand-lg navbar-dark secondary-color">
    <a class="navbar-brand" href="#">JOB Browsing</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
               <a class="nav-link waves-effect waves-light" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link waves-effect waves-light" href="#">Features</a>
            </li>
            <li class="nav-item">
                <a class="nav-link waves-effect waves-light" href="#">Pricing</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                <div class="dropdown-menu dropdown-info" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item waves-effect waves-light" href="#">Action</a>
                    <a class="dropdown-item waves-effect waves-light" href="#">Another action</a>
                    <a class="dropdown-item waves-effect waves-light" href="#">Something else here</a>
                </div>
            </li>
        </ul>
        <form class="form-inline">
            <div class="md-form my-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
            </div>
        </form>
    </div>
    </nav>
    )


}

export default Navbar