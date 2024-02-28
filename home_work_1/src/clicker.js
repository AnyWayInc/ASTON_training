import React from "react";

export default class Clicker extends React.Component{
    state = { text: 'StartText'}

    setText = () =>{
        const newTextBtn = document.querySelector('.input-text').value;
        this.setState({ text: newTextBtn })
    }

    render(){
        return(
            <div>
                <input type='text' className='input-text'></input>
                <br/>
                <button onClick={this.setText}>{this.state.text}</button>
            </div>)
    }
}