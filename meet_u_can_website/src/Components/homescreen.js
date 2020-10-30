import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './Toucan.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './homescreen.css';

 export default class Homescreen extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
    }

    render() {
        return (
            <html className="All">
                <p className = "Header">
                    MeetUcan
                </p>
                <div className="Logo">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p className = "Greeting">
                    You can meet with MeetUcan!
                    </p>
                </div>
                <div className="EnterCodeDiv">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" value={this.state.value} onChange={this.handleChange} className="EnterCode"/>
                        <input type="submit" value="Enter" className="Enter"/>
                    </form>
                </div> 
                <Link to="/feed" className = "Enter">
                    Enter
                </Link>
                <div className = "Bottom"></div>
            </html>
        );
    }
}
