import React, { Component } from 'react'

const InputHero = (props) =>{

    const onInput = props.onInput;

    return ( <input type="text" onInput={onInput} className="d-inline form-control w-75"/>)

}

export default InputHero;