import './style.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class MainLayout extends Component {
    render() {
        return (
            <div id="MainLayout">
                <ul className="navbar">
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/Room">Room</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

export default MainLayout