import React, { Component } from 'react';
import Button from './Button.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            buttonText: 'hit me'
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(event){
        if(event.target.innerHTML === 'hit me') this.setState({buttonText: 'hit me again'})
        else this.setState({buttonText: 'hit me'})
    }

    render() {
        return (
            <div>
                <div>React App</div>
                <Button 
                    handleClick = {this.handleClick}
                    buttonText = {this.state.buttonText}
                />
            </div>
        )
    }
}

export default App; 