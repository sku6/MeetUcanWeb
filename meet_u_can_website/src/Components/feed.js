import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './feed.css';

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
                    feed page
                </p>
            </html>
        );
    }
}