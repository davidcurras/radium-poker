import './style.css'
import logo from '../../../assets/logo.png'
import React from 'react'
import { Link } from 'react-router-dom'

function MainLayout(props) {
    return (
        <div id="MainLayout">
            <div className="navbar">
                <div className="controls">
                    <img src={logo} alt="Logo" />
                    <span src="title">Radium Poker</span>
                    <span className="menu">&#9776;</span>
                </div>
                <div className="links">
                    <ul>
                        <li><Link to="/home">Lobby</Link></li>
                        <li className="selected"><Link to="/room">Sala de juego</Link></li>
                        <li><Link to="/profile">Perfil</Link></li>
                    </ul>
                </div>
                <div className="user">
                    <img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" alt="img" />
                    <ul>
                        <li>Juan Perez</li>
                        <li>Mesa 5</li>
                        <li>$500</li>
                    </ul>
                </div>
            </div>
            <div className="content">
                {props.children}
            </div>
        </div>
    )
}

export default MainLayout