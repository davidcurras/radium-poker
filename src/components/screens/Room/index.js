import './style.css'
import React, { Component } from 'react'
import MainLayout from '../../layouts/MainLayout'
import ContentLayout from '../../layouts/ContentLayout'

class Room extends Component {
    render() {
        return (
            <MainLayout>
                <ContentLayout>
                    <div id="Room">
                        <h1>Room 1</h1>
                        <div className="table">
                            <div id="Player1" className="player"></div>
                            <div id="Player2" className="player"></div>
                            <div id="Player3" className="player"></div>
                            <div id="Player4" className="player"></div>
                            <div id="Player5" className="player"></div>
                            <div id="Player6" className="player"></div>
                            <div id="Player7" className="player"></div>
                            <div id="Player8" className="player"></div>
                            <div id="Player9" className="player"></div>
                            <div id="Dealer" className="player"></div>
                        </div>
                    </div>
                </ContentLayout>
            </MainLayout>
        )
    }
}

export default Room