import './style.css'
import React from 'react'
import MainLayout from '../../layouts/MainLayout'
import ContentLayout from '../../layouts/ContentLayout'
import PokerCard from '../../shared/PokerCard'

function Room(props) {
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
                        <PokerCard id="P1C1" suit="back" number="" />
                        <PokerCard id="P1C2" suit="back" number="" />
                        <PokerCard id="P2C1" suit="h" number="2" />
                        <PokerCard id="P2C2" suit="d" number="12" />
                        <PokerCard id="P3C1" suit="back" number="" />
                        <PokerCard id="P3C2" suit="back" number="" />
                        <PokerCard id="P4C1" suit="back" number="" />
                        <PokerCard id="P4C2" suit="back" number="" />
                        <PokerCard id="P5C1" suit="back" number="" />
                        <PokerCard id="P5C2" suit="back" number="" />
                        <PokerCard id="P6C1" suit="back" number="" />
                        <PokerCard id="P6C2" suit="back" number="" />
                        <PokerCard id="P7C1" suit="back" number="" />
                        <PokerCard id="P7C2" suit="back" number="" />
                        <PokerCard id="P8C1" suit="back" number="" />
                        <PokerCard id="P8C2" suit="back" number="" />
                        <PokerCard id="P9C1" suit="back" number="" />
                        <PokerCard id="P9C2" suit="back" number="" />
                    </div>
                </div>
            </ContentLayout>
        </MainLayout>
    )
}

export default Room