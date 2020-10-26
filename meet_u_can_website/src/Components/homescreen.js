import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from './Toucan.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './homescreen.css';

 export default class Homescreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            value: null,
        };
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
                <div className = "EnterCode">
                    <p>
                    insert code here
                    </p>
                </div> 
                <p className = "Enter">
                    Enter
                </p>
                <div className = "Bottom"></div>
            </html>
        );
    }
}
